import { z } from 'zod';
import { OrderStatus } from './Order.constants';

// Define a schema for the book object inside orderedBooks
const bookSchema = z.object({
  bookId: z.string({ required_error: 'bookId is required' }),
  quantity: z.number({
    required_error: 'quantity is required',
  }),
});

// Define the schema for the Order model
const create = z.object({
  body: z.object({
    userId: z.string({
      required_error: 'userId is required',
    }),
    orderedBooks: z.array(bookSchema),
    status: z.enum([...OrderStatus] as [string, ...string[]]),
  }),
  // Define OrderStatusEnum values
});

export const OrderValidation = {
  create,
};
