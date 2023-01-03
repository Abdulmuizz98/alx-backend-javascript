export default function getStudentIdsSum(studentList) {
  return studentList.reduce((sum, e) => sum + e.id, 0);
}
