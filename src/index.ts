interface Student {
    name: string;
    isActive: boolean;
    age: number;
}

const students: Student[] = [
    { name: "Klara", age: 35, isActive: true },
    { name: "Amir", age: 20, isActive: true },
    { name: "Francis", age: 18, isActive: false },
];

// Dom-manipulation
const studentContainer = document.querySelector('#studentlista');

if (studentContainer) {
    students.forEach(student => {
        const p = document.createElement('p'); // Skapar ett <p>-element för varje elev
        p.textContent = `${student.name}, ${student.age} år`; // <p>-elementets innehåll sätts till studentens namn ålder.
        studentContainer.appendChild(p);
    });
}
function renderList() {
    students.forEach(student => {
        const li = document.createElement("li");
        
        if ( student.isActive === true ) {
            li.className = "studentlista_item_active"
            li.innerHTML = `<p>${student.name}. <span>Aktiv.</span></p>`;
        } else {
            li.className = "studentlista_item_inactive"
            li.innerHTML = `<p>${student.name}. <span>EJ Aktiv.</span></p>`;
        }
        
        studentList.appendChild(li);
    });
}

renderList();