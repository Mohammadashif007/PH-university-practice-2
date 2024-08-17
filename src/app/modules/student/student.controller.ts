import { RequestHandler } from 'express';
import { StudentServices } from './student.server';

const createStudent: RequestHandler = async (req, res, next) => {
  try {
    const { student: studentData } = req.body;
    const result = await StudentServices.createStudentIntoDB(studentData);
    res.status(200).json({
      success: true,
      message: 'Student created successfully',
      data: result,
    });
  } catch (error) {
    next(error)
  }
};

const getAllStudent: RequestHandler = async (req, res, next) => {
  try {
    const result = await StudentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'All student retrieve successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;

    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single student retrieve successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const studentData = req.body;
    const result = await StudentServices.updateStudentIntoDB(
      studentId,
      studentData,
    );
    res.status(200).json({
      success: true,
      message: 'Student update successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteStudent: RequestHandler = async (req, res, next) => {
  try {
    const { studentId } = req.params;
    const result = await StudentServices.deleteStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Student deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
