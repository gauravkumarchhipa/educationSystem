import { Course } from "../models/Course.js";

export const getAllCourse = async (req, res, next) => {
  try {
    const courses = await Course.find();
    res.status(200).json({
      success: true,
      courses,
    });
  } catch (error) {
    console.log(error);
  }
};
