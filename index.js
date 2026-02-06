const express = require("express");

const app = express();

const students = [
  {
    studentName: "ABDUL HAQUE",
    University: "SUxCG 714",
    UniversityUID: "108444"
  },
  {
    studentName: "ADITYA KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108716"
  },
  {
    studentName: "krishna solanki",
    University: "SUxCG 702",
    UniversityUID: "108797"
  },
  {
    studentName: "AMAN KUMAR",
    University: "SUxCG 702",
    UniversityUID: "108500"
  },
  {
    studentName: "AMRIT RAJ",
    University: "SUxCG 702",
    UniversityUID: "108587"
  }
];

const port = 3000;

app.get("/", (req, res) => {
  res.send("Student Search Server is running");
});

app.get("/students", (req, res) => {
  res.status(200).json(students);
});

app.get("/students/:gr_number", (req, res) => {
  const grNumber = req.params.gr_number;
  const student = students.find(s => s.UniversityUID === grNumber);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json(student);
});

app.get("/students/name/:name", (req, res) => {
  const name = req.params.name.toUpperCase();
  const student = students.find(s => s.studentName.toUpperCase() === name);

  if (!student) {
    return res.status(404).json({ 
      success: false,
      message: `Student with name ${name} not found` 
    });
  }

  res.status(200).json({ 
    success: true,
    data: student 
  });
});

app.listen(port, () => {
  console.log("Server started on port", port);
});