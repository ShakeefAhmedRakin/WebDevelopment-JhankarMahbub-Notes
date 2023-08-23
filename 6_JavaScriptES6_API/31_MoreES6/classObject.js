class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }

  speak() {
    console.log(`Hi my name is ${this.name} and my job is ${this.job}.`);
  }
}

let personOne = new Person("Rakin", "Student");
personOne.speak();
let personTwo = new Person("Robert", "Engineer");
personTwo.speak();

class Teacher extends Person {
  constructor(name, job, subject, course) {
    super(name);
    this.job = "Teacher";
    this.subject = subject;
    this.course = course;
  }

  teach() {
    console.log(`I am teaching ${this.subject}`);
  }
}

let teacherOne = new Teacher("Bob", NaN, "CSE", "CSE442");
teacherOne.teach();
teacherOne.speak();

console.log("-----------------------");
// ACCESSING OBJECTS
let testObj = {
  myName: "Bob",
  5: "What?",
  my_number: "8805",
};

console.log(testObj.myName);
console.log(testObj["myName"]);
console.log(testObj[5]);
console.log(testObj["my_number"]);
