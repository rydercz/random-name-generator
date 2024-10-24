var express = require('express');
var router = express.Router();

const maleNames = [
  "Jan", "Petr", "Jiří", "Josef", "Václav", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Zdeněk",
  "František", "Karel", "Milan", "Jakub", "Lukáš", "David", "Ondřej", "Vojtěch", "Michal", "Daniel",
  "Adam", "Matěj", "Roman", "Radek", "Stanislav", "Marek", "Filip", "Antonín", "Vladimír", "Aleš",
  "Ladislav", "Ivan", "Patrik", "Bohuslav", "Dominik", "Rudolf", "Vít", "Richard", "Erik", "Štěpán",
  "Pavel", "Radim", "Eduard", "Leoš", "René", "Alexandr", "Igor", "Samuel", "Sebastian", "Zbyněk",
];

const femaleNames = [
  "Marie", "Jana", "Eva", "Anna", "Lenka", "Kateřina", "Lucie", "Hana", "Petra", "Veronika",
  "Tereza", "Martina", "Barbora", "Alena", "Michaela", "Zuzana", "Helena", "Monika", "Eliška", "Adéla",
  "Markéta", "Ivana", "Kristýna", "Vlasta", "Andrea", "Věra", "Karolína", "Nikola", "Dagmar", "Dana",
  "Olga", "Magdaléna", "Irena", "Kamila", "Růžena", "Šárka", "Aneta", "Gabriela", "Naděžda", "Božena",
  "Iveta", "Nela", "Miluše", "Jitka", "Ludmila", "Simona", "Soňa", "Radka", "Blanka", "Hedvika",
];

const maleSurnames = [
  "Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec",
  "Marek", "Pospíšil", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček",
  "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Urban", "Vaněk", "Blažek", "Krejčí", "Šimek",
  "Kovář", "Bartoš", "Konečný", "Dušek", "Štěpánek", "Holub", "Matoušek", "Štěpán", "Mach", "Bláha",
  "Vlček", "Malý", "Hrubý", "Hruška", "Janda", "Pavlík", "Říha", "Ševčík", "Strnad", "Polák",
];

const femaleSurnames = [
  "Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová",
  "Marková", "Pospíšilová", "Pokorná", "Hájková", "Králová", "Jelínková", "Růžičková", "Benešová", "Fialová", "Sedláčková",
  "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Urbanová", "Vaňková", "Blažková", "Krejčí", "Šimková",
  "Kovářová", "Bartošová", "Konečná", "Dušková", "Štěpánková", "Holubová", "Matoušková", "Štěpánová", "Machová", "Bláhová",
  "Vlčková", "Malá", "Hrubá", "Hrušková", "Jandová", "Pavlíková", "Říhová", "Ševčíková", "Strnadová", "Poláková",
];

// Function to get a random element from an array
const getRandomElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

router.get('/', function(req, res, next) {
  const gender = req.query.gender;

  let firstName;
  let surname;

  if (gender === 'male') {
    firstName = getRandomElement(maleNames);
    surname = getRandomElement(maleSurnames);
  } else if (gender === 'female') {
    firstName = getRandomElement(femaleNames);
    surname = getRandomElement(femaleSurnames);
  } else {
    return res.status(400).send({ error: 'Invalid query parameter gender. Use "male" or "female".' });
  }

  return res.json({ firstName, surname });
});

module.exports = router;
