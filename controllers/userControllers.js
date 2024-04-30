import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";

export const registration = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;
  // const data = "Registration successfully";
  const data = await User.find();
  res.status(200).json({
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
