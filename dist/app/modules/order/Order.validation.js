"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderValidation = void 0;
const zod_1 = require("zod");
// Define a schema for the book object inside orderedBooks
const bookSchema = zod_1.z.object({
    bookId: zod_1.z.string({ required_error: 'bookId is required' }),
    quantity: zod_1.z.number({
        required_error: 'quantity is required',
    }),
});
// Define the schema for the Order model
const create = zod_1.z.object({
    body: zod_1.z.object({
        orderedBooks: zod_1.z.array(bookSchema),
    }),
    // Define OrderStatusEnum values
});
exports.OrderValidation = {
    create,
};
