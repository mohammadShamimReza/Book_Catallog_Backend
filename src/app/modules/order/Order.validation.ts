import { z } from 'zod';

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
    orderedBooks: z.array(bookSchema),
  }),
  // Define OrderStatusEnum values
});

export const OrderValidation = {
  create,
};
