import { $Enums, Order, Prisma } from '@prisma/client';
import prisma from '../../../shared/prisma';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createOrder = async (data: {
  id: string;
  userId: string;
  orderedBooks: Prisma.JsonArray[];
  status: $Enums.OrderStatusEnum;
  createdAt: Date;
}): Promise<Order> => {
  const result = await prisma.order.create({
    data,
  });
  return result;
};

const getAllFromDb = async (): Promise<Order[]> => {
  const result = await prisma.order.findMany({});
  return result;
};

const getById = async (id: string): Promise<Order | null> => {
  const result = await prisma.order.findUnique({
    where: {
      id,
    },
  });
  return result;
};

export const OrderService = {
  createOrder,
  getAllFromDb,
  getById,
};
