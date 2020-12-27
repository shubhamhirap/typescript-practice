// optional parameter with '?' and usable for forms
interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName} ${person.age}`);
}

let p = {
  firstName: "will",
  lastName: "smith",
};

fullName(p);
