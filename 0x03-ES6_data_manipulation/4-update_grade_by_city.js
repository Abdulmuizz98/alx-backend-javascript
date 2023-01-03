export default function updateStudentGradeByCity(studentList, city, newGrades) {
  let result = studentList.filter((e) => e.location === city);

  result = result.map((e) => {
    const studentGrade = newGrades.find((i) => i.studentId === e.id);
    e.grade = studentGrade ? studentGrade.grade : 'N/A';
    return e;
  });
  return result;
}
