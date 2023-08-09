console.log("#-OBJECT NESTING AND FUNCTIONS---------------------------#")
const student = {
  name: "Shakeef Ahmed Rakin",
  id: 20301046,
  dept: "CSE",
  courses: [
    {
      courseCode: "CSE423",
      courseName: "Computer Graphics",
      courseFaculty: "TMD",
    },
    {
      courseCode: "CSE440",
      courseName: "Natural Language Processing II",
      courseFaculty: "FYZ",
    },
  ],
  giveCourseInfo: function () {
    for (i in student.courses) {
      console.log(student.courses[i]);
    }
  },
};

student.giveCourseInfo();
