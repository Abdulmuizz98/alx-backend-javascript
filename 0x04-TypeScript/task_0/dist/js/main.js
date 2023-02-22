var firstStudent = {
    firstname: 'Ola',
    lastname: 'Shola',
    age: 10,
    location: 'Ibadan'
};
var secondStudent = {
    firstname: 'Bisi',
    lastname: 'Bimbo',
    age: 15,
    location: 'Ilorin'
};
var studentsList = [firstStudent, secondStudent];
console.table(studentsList.map(function (e) {
    return { firstname: e.firstname, location: e.location };
}));
//# sourceMappingURL=main.js.map