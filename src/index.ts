interface Student {
    name: string;
    isActive: boolean;
}

const students: Student[] = [
    { name: "Klara", isActive: true },
    { name: "Amir", isActive: true },
    { name: "Francis", isActive: false }
];

const ulList = document.querySelector(".studentlista") as HTMLDivElement;

function renderList() {
    students.forEach(student => {
        const li = document.createElement("li");
        
        li.className = "student-list_item"
        if ( student.isActive === true ) {
            li.innerHTML = `<p>${student.name}. Aktiv.</p>`;
        } else {
            li.innerHTML = `<p>${student.name}. EJ Aktiv.</p>`;
        }
        
        ulList.appendChild(li);
    });
}

renderList();
