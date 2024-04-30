import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";

export const registration = catchAsyncError(async (req, res, next) => {
  const { name, email } = req.body;
  if (!name || !email) return next(new ErrorHandler("Please enter all field", 400));
  const data = await User.find();
  res.status(201).json({
    success: true,
    data,
  });
});

export const login = catchAsyncError(async (req, res, next) => {
  // const data = "login successfully";
  const data = await User.find();
  res.status(200).json({
    success: true,
    data,
  });
});

export const logout = catchAsyncError(async (req, res, next) => {
  // const data = "logout successfully";
  const data = await User.find();
  res.status(200).json({
    success: true,
    data,
  });
});

export const getUserDetails = catchAsyncError(async (req, res, next) => {
  // const data = "User Working";
  const data = await User.find();
  res.status(200).json({
    success: true,
    data,
  });
});
