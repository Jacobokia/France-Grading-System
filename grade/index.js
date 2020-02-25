const marks = require("./models/marks");
const student = require("./models/student");

const mark1 = new marks("SST", "Kawooya", 99.4);
mark1.computeScore();

const mark2 = new marks("Science", "Kawooya", 78);
mark2.computeScore();

const mark3 = new marks("Biology", "Kawooya", "ninety");
mark3.isValidate();

const mark4 = new marks("Biology", "Kawooya");
mark4.isValidate();

const mark5 = new marks("Geog", 90, 90);
mark5.isValidate();

const student1 = new student(9090, "Doe", "Married", 30);
student1.validate();

module.exports = mark1;

// const student2 = new student("Jane", "Doh", "Married", 28);
// student2.validate();
