export default function createIteratorObject(report) {
    allEmployees = report.allEmployees;
    len = report.getnumberOfDepartments(allEmployees);
    
    const employees = {}
    for (key in allEmployees)
        employees = {employees, ...allEmployees.key}
    
    employees[Symbol.iterator] = function() {
            let n = 0;
            done = false;
            return {
                next() {
                n += 10;
                if (n == 100) {done = true}
                return {value:n, done:done};
                }
            };
        }    
}
