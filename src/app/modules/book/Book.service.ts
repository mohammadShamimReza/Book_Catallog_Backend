import { Book } from '@prisma/client';
import prisma from '../../../shared/prisma';

const insertIntoDB = async (data: Book): Promise<Book> => {
  const result = await prisma.book.create({
    data,
  });
  return result;
};

const getAllFromDb = async (): Promise<Book[]> => {
  const result = await prisma.book.findMany({});
  return result;
};

const getById = async (id: string): Promise<Book | null> => {
  const result = await prisma.book.findUnique({
    where: {
      id,
    },
  });
  return result;
};

const updateBook = async (
  id: string,
  payload: Partial<Book>,
): Promise<Book> => {
  const result = await prisma.book.update({
    where: {
      id,
    },
    data: payload,
  });
  return result;
};

const deleteBook = async (id: string): Promise<Book> => {
  const result = await prisma.book.delete({
    where: {
      id,
    },
    include: {
      _count: true,
    },
  });
  return result;
};

export const BookService = {
  insertIntoDB,
  getAllFromDb,
  getById,
  updateBook,
  deleteBook,
};
