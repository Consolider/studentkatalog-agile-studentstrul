interface Student {
    name: string;
    age: number;
}

const students: Student[] = [
    { name: "Klara", age: 35 },
    { name: "Amir", age: 20 },
    { name: "Francis", age: 18 },
];

// Dom-manipulation
const studentContainer = document.querySelector('#studentlista');

if (studentContainer) {
    students.forEach(student => {
        const p = document.createElement('p'); // Skapar ett <p>-element för varje elev.
        p.textContent = `${student.name}, ${student.age} år`; // <p>-elementets innehåll sätts till studentens namn ålder.
        studentContainer.appendChild(p);
    });
}