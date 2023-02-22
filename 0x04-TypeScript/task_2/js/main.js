var Director = /** @class */ (function () {
    function Director() {
    }
    Director.prototype.workFromHome = function () {
        return 'Working from home';
    };
    Director.prototype.getCoffeeBreak = function () {
        return 'Getting a coffee break';
    };
    Director.prototype.workDirectorTasks = function () {
        return 'Getting to director tasks';
    };
    return Director;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return 'Cannot work from home';
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return 'Cannot have a break';
    };
    Teacher.prototype.workTeacherTasks = function () {
        return 'Getting to work';
    };
    return Teacher;
}());
function createEmployee(salary) {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    return new Director();
}
function isDirector(employee) {
    return employee.hasOwnProperty('workDirectorTasks');
}
function executeWork(employee) {
    // let res: string = (isDirector(employee)) ? employee.workDirectorTasks() : employee.workTeacherTasks()
    // console.log(res);
    if ('workDirectorTasks' in employee)
        console.log((employee.workDirectorTasks()));
    else
        console.log((employee.workTeacherTasks()));
}
function teachClass(todayClass) {
    return "Teaching ".concat(todayClass);
}
console.log(teachClass('Math'));
// Teaching Math
console.log(teachClass('History'));
// Teaching History
