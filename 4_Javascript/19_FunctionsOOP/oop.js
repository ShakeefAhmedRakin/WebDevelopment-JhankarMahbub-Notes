var student = {
  name: "Shakeef Ahmed Rakin",
  id: 12345678,
  course: "CSE440",
  dept: "CSE",
};

console.log(student.name, student.id);
student.name = "Unknown";
console.log(student.name, student.id);

console.log("-----------------------------------");

console.log(student);
var properties = Object.keys(student);
console.log(properties);
console.log(student["name"]);
var propertiesValues = Object.values(student);
console.log(propertiesValues);

for (var i = 0; i < properties.length; i++) {
  console.log(properties[i], ":", propertiesValues[i]);
}
