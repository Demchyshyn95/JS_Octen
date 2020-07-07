// - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
// - При помощи for in вывести все ключи всех объектов из задания 
let obj = {
    name: 'Anre',
    age: '24',
    single: 'true',
    cars: ['opel', 'bmw', 'skoda'],
    animals: [{ name: 'jerry', age: 1 },
    { name: 'tom', age: 3 }]
};
// let obj2 = {
//     name: 'olha',
//     age: '19',
//     single: 'false',
//     cars: ['audi', 'bmw'],
//     animals: [{ name: 'cat', age: 4 },
//     { name: 'dog', age: 3 }]
// };
// let obj3 = {
//     name: 'olha',
//     age: '19',
//     single: 'false',
//     cars: ['audi', 'bmw'],
//     animals: [{ name: 'jerry', age: 2 },
//     { name: 'cat', age: 7 }]
// };
// let obj4 = {
//     name: 'Anna',
//     age: '23',
//     single: 'true',
//     cars: ['opel', 'vaz'],
//     animals: [{ name: 'jerry', age: 1 },
//     { name: 'tom', age: 3 }]
// };
// let obj5 = {
//     name: 'Oleg',
//     age: '22',
//     single: 'true',
//     cars: ['audi', 'porche'],
//     animals: [{ name: 'dog', age: 10 }]
// };

// for (const key1 in obj) {
//     console.log(obj[key1])
// }

// for (const key2 in obj2) {
//     console.log(obj2[key2])
// }
// for (const key3 in obj3) {
//     console.log(obj3[key3])
// }
// for (const key4 in obj4) {
//     console.log(obj4[key4])
// }
// for (const key5 in obj5) {
//     console.log(obj5[key5])
// }

// При помощи Object.keys вывести все ключи всех объектов из задания 
// let keys = Object.keys(obj);
// console.log(keys);
// let keys5 = Object.keys(obj5);
// console.log(keys5);


// - взять объекты из задания  и превратить каждый в json.
// - взять json из задания  и превратить их обратно в объекты.

// let jsonObj = JSON.stringify(obj);
// console.log(jsonObj);
// let parsedObj = JSON.parse(jsonObj);
// console.log(parsedObj);


// - Дано 2 масиви з рівною кількістю об'єктів. ???
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]

let usersWithId =
    [{ id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },];

let citiesWithId =
    [{ user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' },];

///?????