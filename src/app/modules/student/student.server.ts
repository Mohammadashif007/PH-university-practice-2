import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

const updateStudentIntoDB = async (id: string, studentData: TStudent) => {
  const result = await StudentModel.findOneAndUpdate({id}, studentData, { new: true });
  return result;
};

const deleteStudentFromDB = async(id: string) => {
  const result = await StudentModel.findOneAndDelete({id})
  return result;
}

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentIntoDB,
  deleteStudentFromDB
};
