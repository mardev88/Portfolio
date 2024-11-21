const students = [
  { name: "Ion Popescu", grades: [7, 8, 7], average: (7 + 8 + 7) / 3 },
  { name: "Dana Ionescu", grades: [9, 9, 8], average: (9 + 9 + 8) / 3 },
  { name: "Mircea Dumitrescu", grades: [8, 7, 6], average: (8 + 7 + 6) / 3 },
  { name: "Laura Georgescu", grades: [10, 9, 9], average: (10 + 9 + 9) / 3 },
  { name: "Ana Marinescu", grades: [7, 8, 7], average: (7 + 8 + 7) / 3 },
  { name: "Vasile Vasilescu", grades: [9, 10, 10], average: (9 + 10 + 10) / 3 },
  { name: "Andreea Petrescu", grades: [8, 7, 8], average: (8 + 7 + 8) / 3 },
  { name: "Irina Radu", grades: [10, 10, 10], average: (10 + 10 + 10) / 3 },
  { name: "Dragos Stan", grades: [7, 8, 7], average: (7 + 8 + 7) / 3 },
  { name: "Alin Barbu", grades: [9, 9, 8], average: (9 + 9 + 8) / 3 },
];

const nameInputElement = document.querySelector("#student-name-input");
const addStudentButton = document.querySelector("#add-student-btn");
const studentsTable = document.querySelector("#students-table");
const gradesTabel = document.querySelector("#grades-table");
const gradesSector = document.querySelector("#student-grades-container");
const hideGradesBtn = document.querySelector("#hide-grades");
const studentGradesContainer = document.querySelector(
  "#student-grades-container"
);
const addGradeBtn = document.querySelector("#add-grade-btn");
const gradeInputElement = document.querySelector("#grade-input");

showTable(students);
addStudentButton.addEventListener("click", addStudent);
nameInputElement.addEventListener("keydown", addStudentOnPressingEnterKey);
studentsTable.addEventListener("click", handleStudentsTableActions);
gradesTabel.addEventListener("click", handleGradesTableActions);
hideGradesBtn.addEventListener("click", hideGradeSector);
addGradeBtn.addEventListener("click", addGrade);
gradeInputElement.addEventListener("keydown", addGradeOnPressingEnterKey);

function addStudentOnPressingEnterKey(e) {
  if (e.key === "Enter") {
    addStudent();
  }
}

function addGradeOnPressingEnterKey(e) {
  if (e.key === "Enter") {
    addGrade();
  }
}

function addStudent() {
  const studentName = nameInputElement.value;
  if (studentName.length > 2) {
    students.push({ name: studentName, average: 0, grades: [] });
  } else {
    alert("The students name must contain at least 3 letters");
  }
  showTable(students);
}

function showTable(students) {
  const tableBody = studentsTable.querySelector("tbody");
  tableBody.innerHTML = "";

  for (let i = 0; i <= students.length - 1; i++) {
    tableBody.innerHTML += `
      <tr id="student-${i}">
        <td>${students[i].name}</td>
        <td>${students[i].average.toFixed(2)}</td>
        <td><button class="show-grades btn">Show Grades</button></td>
        <td><button class="delete-student btn">Delete</button></td>
      </tr> 
    `;
  }
}

function handleStudentsTableActions(e) {
  if (e.target.classList.contains("show-grades")) {
    gradesSector.classList.remove("hide");
    const id = e.target.parentElement.parentElement.id;
    const index = id.split("-")[1];
    showGrades(students[index]);
  } else if (e.target.classList.contains("delete-student")) {
    const id = e.target.parentElement.parentElement.id;
    const index = id.split("-")[1];
    students.splice(index, 1);
    showTable(students);
  }
}

function handleGradesTableActions(e) {
  if (e.target.classList.contains("delete-grade")) {
    const gradeId = e.target.parentElement.parentElement.id;
    const gradeIndex = gradeId.split("-")[1];
    const idTableBody = e.target.parentElement.parentElement.parentElement.id;
    const studentIndex = idTableBody.split("-")[1];

    students[studentIndex].grades.splice(gradeIndex, 1);
    showGrades(students[studentIndex]);
  }
}

function hideGradeSector() {
  gradesSector.classList.add("hide");
}

function showGrades(student) {
  const index = students.indexOf(student);
  const h1StudentName = studentGradesContainer.querySelector("h1");
  h1StudentName.innerHTML = student.name;
  const tableBody = gradesTabel.querySelector("tbody");
  tableBody.innerHTML = "";
  for (let i = 0; i <= student.grades.length - 1; i++) {
    tableBody.id = `student-${index}`;
    tableBody.innerHTML += `
      <tr id="grade-${i}">
        <td>${student.grades[i].toFixed(2)}</td>
        <td><button class="delete-grade btn">Delete</button></td>
      </tr> 
    `;
  }
}

function addGrade() {
  const grade = Number(gradeInputElement.value);
  const h1StudentName = studentGradesContainer.querySelector("h1").innerText;
  const student = students.find((s) => s.name === h1StudentName);
  if (typeof grade === "number" && grade >= 1 && grade <= 10) {
    student.grades.push(grade);
    showGrades(student);
    gradeInputElement.value = "";
  } else {
    alert("Please enter a valid grade between 1 and 10");
  }
}
