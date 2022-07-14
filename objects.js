
let person = {
    name: 'Bridgette',
    lastName: 'Lemus',
    age: 24,
    inClass: true,
    classesTaught: ['JavaScript', 'arrays']
}
person.name = 'Bridgette' // edit
person.hasGlasses = true; // add anew property
console.log(person);

person.Age = 21 // mistyped age.
console.log(person)


// const allProps = Object.keys(person)
// console.log(allProps)
// const hasAge = allProps.indexOf('age') > -1
// console.log(hasAge)
// console.log(allProps.indexOf(age))

// let {name, age}= person
// console.log(name)
// console.log(age)
// delete person.name
// console.log(person)
// person.name = 'Bridgette l'
// console.log(person.name)
// console.log(person.classesTaught [0])
