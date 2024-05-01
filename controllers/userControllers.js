import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendToken } from "../utils/sendToken.js";

export const registration = catchAsyncError(async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!name && !email && !password)
    return next(new ErrorHandler("Please enter name, email & password", 400));
  if (!name) return next(new ErrorHandler("Please enter name", 400));
  if (!email) return next(new ErrorHandler("Please enter email", 400));
  if (!password) return next(new ErrorHandler("Please enter password", 400));

  let user = await User.findOne({ email });
  if (user) return next(new ErrorHandler("User Already Exist", 409));

  user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "temId",
      url: "tempurl",
    },
  });
  sendToken(res, user, "Registration Successfully", 201);
});

export const login = catchAsyncError(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email && !password)
    return next(new ErrorHandler("Please enter  email & password", 400));
  if (!email) return next(new ErrorHandler("Please enter email", 400));
  if (!password) return next(new ErrorHandler("Please enter password", 400));
  // const data = "login successfully";
  const user = await User.findOne({ email }).select("+password");
  if (!user) return next(new ErrorHandler("Incorrect Email or Password", 401));

  const isMatch = await User.comparePassword(password);
  console.log(isMatch);
  sendToken(res, user, `Welcome back ${user?.name}`, 200);
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
