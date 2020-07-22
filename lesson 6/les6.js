
// - создать массив с 20 числами.
// --при помощи метода sort и колбека  отсортировать массив.
// --при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// --при помощи filter получить числа кратные 3
// --при помощи filter получить числа кратные 10
// --перебрать(проитерировать) массив при помощи foreach()
// --перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let array = [1, 2, 3, 4, 50, 3, 20, 3, 45, 5, 10, 6, 55, 45, 3, 4, 56, 80, 9, 19];
// let sortArr = array.sort((a, b) => a - b);
// console.log(sortArr);

// let sortArr2 = array.sort((a, b) => b - a);
// console.log(sortArr2);

// let filtr3 = array.filter((value) => value % 3 === 0);
// console.log(filtr3);

// let filtr10 = array.filter((value) => value % 10 === 0);
// console.log(filtr10);

// let arr2 = array.forEach((value) => console.log(value));

// let arr3 = array.map((value) => value * 3);
// console.log(array);
// console.log(arr3);

//..............................................................................


//     - создать массив со словами на 15 - 20 элементов.
// --отсортировать его по алфавиту в восходящем порядке.
// --отсортировать его по алфавиту  в нисходящем порядке.
// --отфильтровать слова длиной менее 4х символов
// --перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

let string = ['tree', 'World', 'dog', 'cat', 'CARR', 'soup', 'ANGRY', 'GOOD'];

// let string2 = string.sort((a, b) => (a.toLowerCase() > b.toLowerCase()) ? 1 : -1)
// console.log(string2)

// let string3 = string.reverse();
// console.log(string3);

// let lessThanThreeWords = string.filter((element)=>element.length > 4);
// console.log(lessThanThreeWords);

// let arrayMap = string.map((value,index)=>{
//     return value + '!';
// })
// console.log(arrayMap);

//.........................................................................................

// Все робити через функції масивів(foreach, map ...тд)
// Дан масив:
// let users = [{ name: 'vasya', age: 31, status: false }, { name: 'petya', age: 30, status: true }, { name: 'kolya', age: 29, status: true }, { name: 'olya', age: 28, status: false }, { name: 'max', age: 30, status: true }, { name: 'anya', age: 31, status: false }, { name: 'oleg', age: 28, status: false }, { name: 'andrey', age: 29, status: true }, { name: 'masha', age: 30, status: true }, { name: 'olya', age: 31, status: false }, { name: 'max', age: 31, status: true }];
// - відсортувати його за  віком(зростання, а потім окремо спадання)
//     - відсортувати його за кількістю знаків в імені(зростання, а потім окремо спадання)
//         - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор(По якому принципу його створювати - ваше рішення), та зберегти це в новий масив(первинний масив залишиться без змін)
//             - відсортувати його за індентифікатором

// const users = [
//     { name: 'vasya', age: 31, status: false },
//     { name: 'petya', age: 30, status: true },
//     { name: 'kolya', age: 29, status: true },
//     { name: 'olya', age: 28, status: false },
//     { name: 'max', age: 30, status: true },
//     { name: 'anya', age: 31, status: false },
//     { name: 'oleg', age: 28, status: false },
//     { name: 'andrey', age: 29, status: true },
//     { name: 'masha', age: 30, status: true },
//     { name: 'olya', age: 31, status: false },
//     { name: 'max', age: 31, status: true }
// ];

// let ageGrowing = users.sort((a,b)=> a.age - b.age);
// console.log(ageGrowing)

// let ageFalls = users.sort((a,b)=> b.age - a.age);
// console.log(ageFalls)


// let nameGrowing = users.sort((a,b)=> a.name.length - b.name.length);
// console.log(nameGrowing)

// let nameFalls = users.sort((a,b)=> b.name.length - a.name.length);
// console.log(nameFalls)
// let userJson = JSON.stringify(users);
// let userGetJson = JSON.parse(userJson)

//  let userId = userGetJson.map((el,id)=>{
//     el.id = id+=1;
//     return el
// })
// console.log(users)
// console.log(userId)

// --наисать функцию калькулятора с 2мя числами и колбеком
// function calculate(a, b, callback) {
//     console.log(callback(a, b))
// }

// calculate(12, 23, function (a, b) {
//     return a + b;
// });


// --наисать функцию калькулятора с 3мя числами и колбеком
// function calculate2(a, b, c, sumDiv) {
//     console.log(sumDiv(a, b, c))
// }

// calculate2(12, 23, 3, function (a, b, c) {
//     return (a + b) / c;
// });

// =============================================
// =============================================
// =============КЛАССНАЯ РАБОТА=================
// =============================================
// =============================================




// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// - двигун = 2л
// - виробник мерс
// - двигун більше 3х літрів + виробник мерседес
// - двигун більше 3х літрів + виробник субару
// - сили більше ніж 300
// - сили більше ніж 300 + виробник субару
// - мотор серіі ej
// - сили більше ніж 300 + виробник субару + мотор серіі ej
// - двигун меньше 3х літрів + виробник мерседес
// - двигун більше 2л + сили більше 250
// - сили більше 250  + виробник бмв

// let cars = [
//     { producer: "subaru", model: "wrx", year: 2010, color: "blue", type: "sedan", engine: "ej204x", volume: 2, power: 400 },
//     { producer: "subaru", model: "legacy", year: 2007, color: "silver", type: "sedan", engine: "ez30", volume: 4, power: 250 },
//     { producer: "subaru", model: "tribeca", year: 2011, color: "white", type: "jeep", engine: "ej20", volume: 2, power: 300 },
//     { producer: "subaru", model: "leone", year: 1998, color: "yellow", type: "sedan", engine: "ez20x", volume: 2, power: 140 },
//     { producer: "subaru", model: "impreza", year: 2014, color: "red", type: "sedan", engine: "ej204x", volume: 2, power: 200 },
//     { producer: "subaru", model: "outback", year: 2014, color: "red", type: "hachback", engine: "ej204", volume: 2, power: 165 },
//     { producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120 },
//     { producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350 },
//     { producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e200", year: 1990, color: "silver", type: "sedan", engine: "eng200", volume: 2, power: 180 },
//     { producer: "mercedes", model: "e63", year: 2017, color: "yellow", type: "sedan", engine: "amg63", volume: 3, power: 400 },
//     { producer: "mercedes", model: "c250", year: 2017, color: "red", type: "sedan", engine: "eng25", volume: 2.5, power: 230 }
// ];

// let engineMoreThanThreeVolume = cars.filter((el) => el.volume > 3)
// console.log(engineMoreThanThreeVolume);

// let engineEqualTwo = cars.filter((el) => el.volume === 2)
// console.log(engineEqualTwo);

// let mers = cars.filter((el) => el.producer === 'mercedes')
// console.log(mers);

// let mersMoreThreeVol = cars.filter((el) => el.volume > 3 && el.producer === 'mercedes')
// console.log(mersMoreThreeVol);

// let subMoreThreeVol = cars.filter((el) => el.volume > 3 && el.producer === 'subaru')
// console.log(subMoreThreeVol);

// let power = cars.filter((el) => el.power > 300)
// console.log(power);

// let powerSubaru = cars.filter((el) => el.power > 300 && el.producer === 'subaru')
// console.log(powerSubaru);

// let motorEj = cars.filter((el) => el.engine.includes('ej'));
// console.log(motorEj);

// let powerSubaruEj = cars.filter((el) => el.power > 300 && el.producer === 'subaru' && el.engine.includes('ej'))
// console.log(powerSubaruEj);


// - взять слдующий массив
// -- отсортировать его по id пользователей
// -- отсортировать его по id пользователей в обратном опрядке
// -- отсортировать его по возрасту пользователей
// -- отсортировать его по возрасту пользователей в обратном порядке
// -- отсортировать его по имени пользователей
// -- отсортировать его по имени пользователей в обратном порядке
// -- отсортировать его по названию улицы  в алфавитном порядке
// -- отсортировать его по номеру дома по возрастанию


// let usersWithAddress = [
//     { id: 3, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 9, name: 'petya', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 1 } },
//     { id: 1, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 7, name: 'olya', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 2 } },
//     { id: 4, name: 'oleg', age: 28, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 2, name: 'masha', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Lviv', street: 'andryne', number: 121 } }
// ];
// let sortId = usersWithAddress.sort((a, b) => a.id - b.id)
// console.log(sortId);

// let sortIdresers = usersWithAddress.sort((a, b) => b.id - a.id)
// console.log(sortIdresers);

// let age = usersWithAddress.sort((a, b) => a.age - b.age)
// console.log(age);

// let ageRevers = usersWithAddress.sort((a, b) => b.age - a.age)
// console.log(ageRevers);

// let name = usersWithAddress.sort((a, b) => a.name > b.name ? 1 : -1)
// console.log(name);

// let nameRevers = usersWithAddress.sort((a, b) => b.name > a.name ? 1 : -1)
// console.log(nameRevers);

// let street = usersWithAddress.sort((a, b) => a.address.street > b.address.street ? -1 : 1)
// console.log(street);

// let number = usersWithAddress.sort((a, b) => a.address.number - b.address.number)
// console.log(number);

// -- отфильтровать (оставить) тех кто младше 30
// -- отфильтровать (оставить) тех у кого отрицательный статус
// -- отфильтровать (оставить) тех у кого отрицательный статус и младше 30 лет
// -- отфильтровать (оставить) тех у кого номер дома четный

// let ageLess = usersWithAddress.filter((el) => el.age < 30)
// console.log(ageLess);

// let statusFalse = usersWithAddress.filter((el) => el.status === false)
// console.log(statusFalse);

// let statusFalseAnd = usersWithAddress.filter((el) => el.status === false && el.age < 30)
// console.log(statusFalseAnd);

// let numbHouse = usersWithAddress.filter((el) => el.address.number % 2 === 0)
// console.log(numbHouse);

// ===========================
// ======ДОПОЛНИТЕЛЬНО========
// ===========================

// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25, то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// class Car {
//     constructor(marka, power, owner, price, years) {
//         this.marka = marka;
//         this.power = power;
//         this.owner = owner;
//         this.price = price;
//         this.year = years;
//     }
// }
// class Owner {
//     constructor(name, age, drivingExperience) {
//         this.name = name;
//         this.age = age;
//         this.drivingExperience = drivingExperience;
//     }
// }

// let skoda = new Car('Skoda', 1980, new Owner('Андрій', 24, 4), '8k', 2009);
// let vw = new Car('VW', 1990, new Owner('Роман', 21, 1), '9k', 2012);
// let kia = new Car('KIA', 2910, new Owner('Орест', 29, 4), '11k', 2011);
// let opel = new Car('OPEL', 1580, new Owner('Ліля', 26, 6), '7k', 2001);
// let bmw = new Car('BMW', 2980, new Owner('Марія', 27, 2), '8k', 2004);
// let ford = new Car('FORD', 1680, new Owner('Олег', 21, 1), '6k', 2007);
// let audi = new Car('AUDI', 2180, new Owner('Коля', 24, 5), '11k', 2010);

// let cars = [];

// cars.push(skoda, vw, kia, opel, bmw, ford, audi);

// for (let i = 0; i < cars.length / 2; i++) {
//     cars[i].power = (cars[i].power * 0.1) + cars[i].power
//     if (i === 0) {
//         cars[i].owner.name = 'Валя'
//     }
//     else if (i === 1) {
//         cars[i].owner.name = 'Катюха'
//     }
//     else if (i === 2) {
//         cars[i].owner.name = 'Мішаня'
//     }
//     else if (i === 3) {
//         cars[i].owner.name = 'Андрюха'
//     }
// }
// console.log(cars)


// Задача: дан отсортированный по возрастанию массив целых чисел. Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.

// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.

// const Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]

// function minMaxIndex(arr, number) {
//     let minIndex = arr.indexOf(number);
//     console.log(minIndex)
//     let maxIndex = arr.lastIndexOf(number);
//     console.log(maxIndex)
// }
// minMaxIndex(Arr, 1)
// minMaxIndex(Arr, 4)

