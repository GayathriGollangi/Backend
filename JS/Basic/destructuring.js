const personDetails={
    firstName:"Sam",
    lastName:"Prabhu",
    age:"38"
}
console.log(personDetails);
const {firstName,lastName,age} = personDetails;
console.log(firstName,lastName,age);

let arr = ["sam","Kevin","cherry"];
let [person1,person2,person3] = arr;
console.log(person1,person2,person3);