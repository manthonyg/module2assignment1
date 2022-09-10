// VIDEO 1/2

// a simple green function that takes a single argument
function greetStudent(studentName) {
  return "Hello There" + " " + studentName;
}

// or refactored with fat arrow fn

const greetStudentRefactor = (studentName) => {
  return `Hello There ${studentName}`;
};

// console.log(greetStudent("Michael"));
// console.log(greetStudentRefactor("Nichaolas"));

// VIDEO 3

// creating a full name function

// this fn uses implicit return
const fullName = (firstName, middleName, lastName) =>
  `${lastName}, ${middleName}. ${firstName}`;

const titleName = fullName("Michael", "A", "Grandori");
// console.log(titleName);

// also refactoring our first example with implicit return
const greetStudentImplicit = (studentName) => `Hello There ${studentName}`;
