interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearOfExperience?: number,
    location: string,
    [key: string]: any
}

interface Directors extends Teacher{
    numberOfReports: number
}
interface printTeacherFucntion{
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFucntion =  (firstName, lastName) => {
    return `${firstName[0]}. ${lastName}`
}

// console.log(printTeacher('John', 'Doe'));

interface StudentClassInterface{
    firstName: string,
    lastName: string,
    workOnHomework(): string,
    displayName(): string,
}
interface StudentClassConstructor{
    new(firstName: string, lastName: string) : StudentClassInterface
}
class StudentClass implements StudentClassInterface{
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;

    }
    workOnHomework():string{
        return 'Currently working';
    }
    displayName():string{
        return this.firstName;
    }
}