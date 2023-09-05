import { User } from '@prisma/client';
import httpStatus from 'http-status';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { jwtHelpers } from '../../../helpers/jwtHelpers';
import prisma from '../../../shared/prisma';

const signUp = async (data: User): Promise<User> => {
  const result = await prisma.user.create({
    data,
  });
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const signIn = async (LoginData: { email: string; password: string }) => {
  const { email, password } = LoginData;

  const isUserExist = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'user not found');
  }
  const { role } = isUserExist;

  const isUserExistWithPassword = await prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

  if (!isUserExistWithPassword) {
    throw new ApiError(httpStatus.NOT_FOUND, 'password not matched');
  }

  const accessToken = jwtHelpers.createToken(
    { email, password, role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string,
  );
  const refreshToken = jwtHelpers.createToken(
    { email, password },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const AuthService = {
  signUp,
  signIn,
};
