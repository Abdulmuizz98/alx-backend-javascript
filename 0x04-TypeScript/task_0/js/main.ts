interface Student{
    firstName: string,
    lastName: string,
    age: number, 
    location: string
}

const firstStudent: Student = {
    firstName: 'Ola',
    lastName: 'Shola',
    age: 10,
    location: 'Ibadan'
}

const secondStudent: Student = {
    firstName: 'Bisi',
    lastName: 'Bimbo',
    age: 15,
    location: 'Ilorin'
}

let studentsList: Student[] = [firstStudent, secondStudent]
console.table(studentsList.map((e: Student) => ({firstName: e.firstName, location: e.location }
)));