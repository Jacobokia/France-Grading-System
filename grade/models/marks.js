class marks {
  constructor(subject, student, marks) {
    this.subject = subject;
    this.student = student;
    this.marks = marks;
  }

  computeScore() {
    if (this.marks >= 80) {
      console.log("You have an A");
    } else if (this.marks >= 70 && this.marks < 80) {
      console.log("You have a B");
    } else if (this.marks >= 60 && this.marks < 70) {
      console.log("You have a C");
    } else if (this.marks >= 50 && this.marks < 60) {
      console.log("You have a D");
    } else if (this.marks >= 40 && this.marks < 50) {
      console.log("You have a E");
    } else if (this.marks == 0 && this.marks < 40) {
      console.log("You have an F");
    } else console.log("Marks can not be below 0");
  }

  isValidate() {
    var valid = true;
    if (this.student == null) {
      valid = false;
      console.log("Student does not exist");
    }
    if (typeof (this.marks !== Number)) {
      valid = false;
      console.log("You have probably put in a text instead of a number");
    }
    // if (this.marks < 0) {
    //   valid = false;
    //   console.log("Marks can not be less than zero");
    // }

    if (this.marks == null) {
      valid = false;
      console.log("You have not provided any marks");
    }
    if (this.subject == null) {
      valid = false;
      console.log("You have not provided any subject");
    }
  }
}

module.exports = marks;
