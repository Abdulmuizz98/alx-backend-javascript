export default function getStudentsByLocation(studentList, city) {
  return studentList.filter((e) => e.location === city);
}
