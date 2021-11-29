let person = {
    fname: "Toni", 
    lname: "Leinonen",
    age: 25
}

person.length = 190;

let persons = [
    {
        fname:"Tiina",
        lname:"Karvanen",
        age:69
    },
    {
        fname:"Lauri",
        lname:"Ylönen",
        age:14
    },
    person
];

// let persons = [
//     {
//         fname: "Reiska",
//         age: 23
//     },
//     {
//         fname: "Riina",
//         age: 17
//     },
//     {
//         fname: "Allu",
//         age: 40
//     }
// ]
// let word = "s"
// let filtered_persons = persons.filter( p => p.fname.includes(word))

persons.forEach( p => console.log(p.fname))
console.log(persons[1].lname);