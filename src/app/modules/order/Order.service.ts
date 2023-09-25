import { Order, Prisma } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (data: {
  userId: string;
  orderedBooks: Prisma.JsonArray[];
}): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getById = async (
  id: string,
  email: string,
  password: string,
  role: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  let result;
  if (role === 'admin') {
    result = await prisma.order.findMany({});
  }
  if (role === 'customer') {
    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
        password,
        role,
      },
    });

    if (!isUserExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'user not found');
    }

    const UserId = isUserExist?.id;

    result = await prisma.order.findFirst({
      where: {
        id: id,
        userId: UserId,
      },
    });
  }

  if (!result) {
    result = 'order not found';
  }

  return result;
};

const getOrder = async (
  email: string,
  password: string,
  role: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): Promise<any> => {
  let result;
  if (role === 'admin') {
    result = await prisma.order.findMany({});
  }
  if (role === 'customer') {
    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
        password,
        role,
      },
    });

    if (!isUserExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, 'user not found');
    }

    const id = isUserExist?.id;

    result = await prisma.order.findFirst({
      where: {
        userId: id,
      },
    });
  }

  if (!result) {
    result = 'order not placed yet';
  }

  return result;
};

export const OrderService = {
  createOrder,
  getById,
  getOrder,
};
