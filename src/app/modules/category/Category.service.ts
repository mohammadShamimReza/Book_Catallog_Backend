import { Category } from '@prisma/client';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Category): Promise<Category> => {
  const result = await prisma.category.create({
    data,
  });
  return result;
};

const getAllFromDb = async (): Promise<Category[]> => {
  const result = await prisma.category.findMany({});
  return result;
};
const getById = async (id: string): Promise<Category | null> => {
  const result = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  if (!result) {
    throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
  }
  return result;
};

const updateCategory = async (
  id: string,
  payload: Partial<Category>,
): Promise<Category> => {
  const result = await prisma.category.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteCategory = async (id: string): Promise<Category> => {
  const isExist = await prisma.category.findUnique({
    where: {
      id,
    },
  });
  if (!isExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'category not found');
  }
  const result = await prisma.category.delete({
    where: {
      id,
    },
    include: {
      _count: true,
    },
  });
  return result;
};

export const CategoryService = {
  insertIntoDB,
  getAllFromDb,
  getById,
  updateCategory,
  deleteCategory,
};
