"use strict";
const form = document.querySelector("#add-student-form");
const input = document.querySelector("#student-name");
const studentList = document.querySelector(".studentlista");
function handleAddStudent(event) {
    event.preventDefault();
    const student = document.createElement("div");
    const studentName = input.value;
    student.textContent = `${studentName}`;
    studentList.appendChild(student);
    input.value = "";
}
form.addEventListener("submit", handleAddStudent);
//# sourceMappingURL=addStudent.js.map