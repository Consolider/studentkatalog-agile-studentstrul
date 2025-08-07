"use strict";
const students = [
    { name: "Klara", age: 35, isActive: true },
    { name: "Amir", age: 20, isActive: true },
    { name: "Francis", age: 18, isActive: false },
];
const studentLista = document.querySelector("#studentlista");
if (studentLista) {
    students.forEach(student => {
        const li = document.createElement("li");
        if (student.isActive === true) {
            li.className = "studentlista_item_active";
            li.innerHTML = `<p>${student.name}, ${student.age} år. <span>Aktiv.</span></p>`;
        }
        else {
            li.className = "studentlista_item_inactive";
            li.innerHTML = `<p>${student.name}, ${student.age} år. <span>EJ Aktiv.</span></p>`;
        }
        studentLista.appendChild(li);
    });
}
//# sourceMappingURL=index.js.map