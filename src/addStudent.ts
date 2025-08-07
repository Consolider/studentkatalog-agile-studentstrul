const form = document.querySelector("#add-student-form") as HTMLFormElement;
const input = document.querySelector("#student-name") as HTMLInputElement;
const studentList = document.querySelector(".studentlista") as HTMLDivElement;

function handleAddStudent(event: Event) : void {
    event.preventDefault();
    const student = document.createElement("div");
    const studentName = input.value;
    student.textContent = `${studentName}`;
    studentList.appendChild(student);
    input.value = "";
}

form.addEventListener("submit", handleAddStudent);
