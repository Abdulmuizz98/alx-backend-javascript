interface DirectorInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workDirectorTasks(): string
}
interface TeacherInterface{
    workFromHome(): string,
    getCoffeeBreak(): string,
    workTeacherTasks(): string
}

class Director implements DirectorInterface{
    workFromHome(): string {
        return 'Working from home';
    }
    getCoffeeBreak(): string {
         return 'Getting a coffee break';
    }
    workDirectorTasks(): string {
        return 'Getting to director tasks';
    }
}

class Teacher implements TeacherInterface{
    workFromHome(): string {
        return 'Cannot work from home';
    }
    getCoffeeBreak(): string {
        return 'Cannot have a break';
    }
    workTeacherTasks(): string {
        return 'Getting to work'
    }
}

function createEmployee(salary: number | string): Director | Teacher{
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    return new Director();
}

function isDirector(employee: Director | Teacher ): employee is Director{
    return  employee.hasOwnProperty('workDirectorTasks');
} 
function executeWork(employee:  Teacher | Director){
    // let res: string = (isDirector(employee)) ? employee.workDirectorTasks() : employee.workTeacherTasks()
    // console.log(res);
    if ('workDirectorTasks' in employee)
        console.log((employee.workDirectorTasks()));
    else   
        console.log((employee.workTeacherTasks()));
}
// executeWork(createEmployee(200));
// Getting to work
// executeWork(createEmployee(1000));
// Getting to director tasks


// console.log(createEmployee(200));
// // Teacher
// console.log(createEmployee(1000));
// // Director
// console.log(createEmployee('$500'));
// // Director

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects){
    return `Teaching ${todayClass}`;
}
console.log(teachClass('Math'));
// Teaching Math
console.log(teachClass('History'));
// Teaching History