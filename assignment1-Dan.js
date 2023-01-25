//Question 1
let student = [ { name: "Daniel", email: "daniel@gmail.com", marks: [80, 60, 50, 70, 95] },
{ name: "Mark", email: "mark@gmail.com", marks: [99, 40, 84, 72, 60] },
{ name: "Stacy", email: "stacy@gmail.com", marks: [8, 30, 11, 0, 20] },
{ name: "Geri", email: "geri@gmail.com", marks: [100, 99, 95, 85, 99] }
];



function studentMarks (students) {
    let smartestStudent;
    let highestMarks = 0;
    students.forEach(student => {
        let totalMarks = student.marks.reduce((type, mark) => type + mark)/student.marks.length;
        
        if (totalMarks > highestMarks) {
            highestMarks = totalMarks;
            smartestStudent = student.name;
        }
    });
    return smartestStudent + " with " + highestMarks + "%";


};

let finalAnswer = studentMarks (student);

console.log(`Smartest student is ${finalAnswer}\n`);

// Question 2

let numberList = [110, -200, 10, 560, 0, -50];

let minimumValue = numberList.reduce(function(acc, cV) {
    return acc < cV ? acc : cV;
}, Infinity);

console.log(`Minimun value is ${minimumValue} `);



// Question 3:

function countLetters(str) {
    return str.replace(/[^a-zA-Z]/g, '').length;

};

console.log(`${countLetters("Good evening")}`)


debugger;