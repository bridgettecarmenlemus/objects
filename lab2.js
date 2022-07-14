// Create an object for a "Teacher" with the following properties
// - Name (with anyone's name)
// - Classes (with an empty array)
// - currentlyTeaching (true or false, your choice)

// Now with the above object do the following:
// - Add a new class name (of your choice) to the "Classes" array 
// - Add another class.
// - Display the Teacher's Name
// - Display the Teacher's Classes
// - Display the full Teacher Object

let teacher = {
    name: "Ruben",
    classes: [],
    currentlyTeaching: true,  
}
console.log(teacher)
teacher.classes.push('History')
console.log(teacher)
teacher.classes.push('Statistics')
console.log(teacher)
console.log(teacher.name)
console.log(teacher)
console.log(teacher)