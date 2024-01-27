import { Faker } from '@faker-js/faker';
import { Country } from './country';

export function generateRandomBio(country: Country): any {
  try {
     const currentDate = new Date();
     const currentYear = new Date().getFullYear();
     const faker = new Faker({
       locale: country.getLocale(),
     });

     const birthdate = faker.date.birthdate({
       max: currentYear - 14,
       min: currentYear - 17,
       mode: "year",
     });

     let age = currentYear - birthdate.getFullYear();

     if (
       currentDate.getMonth() < birthdate.getMonth() ||
       (currentDate.getMonth() === birthdate.getMonth() &&
         currentDate.getDate() < birthdate.getDate())
     ) {
       age--;
     }

     return {
       name: faker.person.firstName('male'),
       lastName: faker.person.lastName(),
       kitNumber: faker.number.int({
         min: 1,
         max: 99,
       }),
       country: country.getCountryName(),
       city: country.getCity(),
       yearOfBirth: birthdate.getFullYear(),
       monthOfBirth: birthdate.toLocaleString("default", { month: "long" }),
       dayOfBirth: birthdate.getDate(),
       age,
     };
  } catch (error) {
    console.error(error, country.getCountryName())
  }
}

