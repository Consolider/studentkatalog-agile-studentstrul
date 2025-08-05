const students = [
    { name: "Klara", isActive: true },
    { name: "Amir", isActive: true },
    { name: "Francis", isActive: false }
];
const studentList = document.querySelector(".studentlista");
function renderList() {
    students.forEach(student => {
        const li = document.createElement("li");
        if (student.isActive === true) {
            li.className = "studentlista_item_active";
            li.innerHTML = `<p>${student.name}. <span>Aktiv.</span></p>`;
        }
        else {
            li.className = "studentlista_item_inactive";
            li.innerHTML = `<p>${student.name}. <span>EJ Aktiv.</span></p>`;
        }
        studentList.appendChild(li);
    });
}
renderList();
export {};
//# sourceMappingURL=index.js.map