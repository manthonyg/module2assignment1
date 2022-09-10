const students = [];

const student = {
  name: "Michael Grandori",
  birthYear: 1990,
  course: "IFT-458",
  grade: 90,
  active: true,
  age: function calculate() {
    if (this.active) {
      return 2022 - this.birthYear;
    }
  },
};

const student2 = {
  name: "Nicholas Grandori",
  birthYear: 1995,
  course: "IFT-458",
  grade: 95,
  active: false,
  age: function calculate() {
    if (this.active) {
      return 2022 - this.birthYear;
    } else {
      return 0;
    }
  },
};

students.push(student, student2);
// now we will have [student, student2]
console.log(students);

// loop through each student and call the .age() method on it
students.forEach((student) => console.log(student.age()));
// console.log(student.age());
// console.log(student2.age());
