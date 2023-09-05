import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { ProfileService } from './Profile.service';

const getProfile = catchAsync(async (req: Request, res: Response) => {
  const token = req.user;

  const email = token?.email;
  const password = token?.password;

  const result = await ProfileService.getProfile(email, password);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User fetched successfully',
    data: result,
  });
});

export const ProfileController = {
  getProfile,
};
