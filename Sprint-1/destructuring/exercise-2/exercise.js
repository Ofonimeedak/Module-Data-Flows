let hogwarts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    house: "Gryffindor",
    pet: "Owl",
    occupation: "Student",
  },
  {
    firstName: "Ron",
    lastName: "Weasley",
    house: "Gryffindor",
    pet: "Scabbers",
    occupation: "Student",
  },
  {
    firstName: "Hermione",
    lastName: "Granger",
    house: "Gryffindor",
    pet: "Cat",
    occupation: "Student",
  },
  {
    firstName: "Draco",
    lastName: "Malfoy",
    house: "Slytherin",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Cedric",
    lastName: "Diggory",
    house: "HufflePuff",
    pet: null,
    occupation: "Student",
  },
  {
    firstName: "Severus",
    lastName: "Snape",
    house: "Slytherin",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Filius",
    lastName: "Flitwick",
    house: "Ravenclaw",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Pomona",
    lastName: "Sprout",
    house: "Hufflepuff",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Minerva",
    lastName: "McGonagall",
    house: "Gryffindor",
    pet: null,
    occupation: "Teacher",
  },
  {
    firstName: "Albus",
    lastName: "Dumbledore",
    house: "Gryffindor",
    pet: "Phoenix",
    occupation: "Teacher",
  },
];

//Task 1
function gryffindorHouse(WizardAndWitch) {
  for (let mate of WizardAndWitch) {
    const { firstName, lastName, house } = mate;
    if (house === "Gryffindor") {
      const gryffindorMates = `${firstName} ${lastName} lives in ${house} house `;
      console.log(gryffindorMates);
    }
  }
}

gryffindorHouse(hogwarts);

//Task2

function teacherWithPet(WizardAndWitch) {
  for (let teacher of WizardAndWitch) {
    const { firstName, lastName, pet } = teacher;
    if (pet !== null) {
      const teacherPet = `${firstName} ${lastName} has a ${pet}`;
      console.log(teacherPet);
    }
  }
}
teacherWithPet(hogwarts);
