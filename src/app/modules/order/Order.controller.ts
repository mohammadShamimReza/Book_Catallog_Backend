import { Request, Response } from 'express';
import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { OrderService } from './Order.service';

const createOrder = catchAsync(async (req: Request, res: Response) => {
  let id: string | undefined;

  if (req.user !== null && typeof req.user === 'object' && 'id' in req.user) {
    id = req.user.id;
  } else {
    throw new ApiError(httpStatus.BAD_REQUEST, "doesn't have an 'id' property");
  }

  const data = { ...req.body, userId: id }; // Now you can safely use the 'id' variable

  const result = await OrderService.createOrder(data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order created successfully',
    data: result,
  });
});

const getById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const token = req.user;
  const result = await OrderService.getById(
    id,
    token?.email,
    token?.password,
    token?.role,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Category fetched successfully',
    data: result,
  });
});

const getOrder = catchAsync(async (req: Request, res: Response) => {
  const token = req.user;

  const result = await OrderService.getOrder(
    token?.email,
    token?.password,
    token?.role,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Order fetched successfully',
    data: result,
  });
});

export const OrderController = {
  createOrder,
  getById,
  getOrder,
};
