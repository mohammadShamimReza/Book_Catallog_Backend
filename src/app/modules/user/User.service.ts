import { User } from '@prisma/client';
import prisma from '../../../shared/prisma';

const getAllFromDb = async (): Promise<User[]> => {
  const result = await prisma.user.findMany({});
  return result;
};
const getById = async (id: string): Promise<User | null> => {
  const result = await prisma.user.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const UserService = {
  getAllFromDb,
  getById,
};
