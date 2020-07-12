// - створити функцію яка виводить масив
// function getArray() {
//  console.log(arguments[0]);
// }
// getArray([1, 2, 3]);

// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function getArray() {
//     let array = [];
//     for (i = 0; i < 10; i++) {
//         let random = Math.floor(Math.random() * (100 - 1)) + 1;
//         array[i] = random;
//     }
//     console.log(array)
// }
// getArray();

// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function minNumber(array) {
//   let min = array[0];
// for (let i = 0; i < array.length; i++) {
//   if(min > array[i]){
//     min = array[i];
//   }
// }
//   console.log(min);
// }
// minNumber([22,2,2332,-322,223,23])


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function maxNumber(array) {
//   let max = array[0];
// for (let i = 0; i < array.length; i++) {
//   if(max < array[i]){
//     max = array[i];
//   }
// }
//   console.log(max);
// }
// maxNumber([22,2,45332,-322,223,23])

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function Allnumb(array) {
//   let max = array[0];
//   let min = array[0];
// for (let i = 0; i < array.length; i++) {
//   if(max < array[i]){
//     max = array[i];
//   }
//   else if (min > array[i]){
//     min = array[i]
//   }
// }
//   console.log(max);
//   return min;
// }
// console.log(Allnumb([22,3.12,45332,-322,223,23]))

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function allN() {
//     numb = []
//     for (i = 0; i < arguments.length; i++) {
//         numb[i]=arguments[i]
//     }
// let sum = numb.reduce((a,b)=>a+b,0);
// let rezult = sum/numb.length;
// console.log(rezult);
// }
// allN(1, 20, 3, 4, 5, 6, 7, 8, 9)


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function allObj() {
// let rezult = arguments.length;
// console.log(rezult);
// }

// allObj({name:'Andre'},{age:21},{animals:"cat"},{maried:false},{single:false},{},{})

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function sumArray() {
//     let arr1 = [1, 2, 3, 4];
//     let arr2 = [2, 3, 4, 5];
//     let arr3 = [];
//     for (let i = 0; i < arr1.length; i++) {
//         arr3[i] = arr1[i] + arr2[i];
//     }
//     console.log(arr3);;
//     return arr3;
// }
// sumArray();


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrayOfEndZiro = (arr1) => {
//   let newAraay = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] > 0) {
//       newAraay.push(arr1[i]);
//     }
//   }
//   for (const num of arr1) {
//     if (num === 0) {
//       newAraay.push(num)
//     }
//   }
//   console.log(newAraay);
// }
// arrayOfEndZiro([1, 0, 6, 0, 3]) ///////// ?????????? ЯК ЙОГО МОЖНА ЗРОБИТИ ПО НОРМАЛЬНОМУ????????????


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

// (function addedHello(){
//     let div =document.createElement('div');
//     let p = document.createElement('p');
//     p.innerHTML = 'Hello owu';
//     div.appendChild(p);
//     document.body.appendChild(div);
// })()


// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

// (function addedHello(){
//    for(let i = 0; i <arguments.length; i++){
//        let text = arguments[i];
//        let div =document.createElement('div');
//        let p = document.createElement('p');
//        p.innerHTML = text ;
//        div.appendChild(p);
//        document.body.appendChild(div);
//    }
// })('HELLO EVERYONE, HELLO EVERYONE, HELLO EVERYONE')



// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.

// function userCity(usersWithId, citiesWithId) {
//     for (let i = 0; i < usersWithId.length; i++) {
//         for (let j = 0; j < citiesWithId.length; j++) {
//             if (usersWithId[i].id === citiesWithId[j].user_id) {
//                 usersWithId[i].adress = citiesWithId[j]
//             }
//         }
//     }
//     console.log(usersWithId)
// }
// userCity([
//     { id: 1, name: 'vasya', age: 31, status: false },
//     { id: 2, name: 'petya', age: 30, status: true },
//     { id: 3, name: 'kolya', age: 29, status: true },
//     { id: 4, name: 'olya', age: 28, status: false },
// ],
//     [
//         { user_id: 3, country: 'USA', city: 'Portland' },
//         { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
//         { user_id: 2, country: 'Poland', city: 'Krakow' },
//         { user_id: 4, country: 'USA', city: 'Miami' }
//     ]
// )

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила.
//  Створити скрипт який ітерує цей масив, 
//  та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, 
// текст правила записати в свій окремий блок.

// function allRules() {
//   for (let i = 0; i < arguments[0].length; i++) {
//     let div = document.createElement('div');
//     let h2 = document.createElement('h2');
//     h2.innerText = arguments[0][i].title;
//     div.appendChild(h2);
//     let p = document.createElement('p');
//     p.innerHTML = arguments[0][i].body;
//     div.appendChild(p);
//     let hr = document.createElement('hr');
//     div.appendChild(hr);
//     document.body.appendChild(div);
//   }

// }

// let rules = [
//   {
//     title: 'Первое правило Бойцовского клуба.',
//     body: 'Никому не рассказывать о Бойцовском клубе.'
//   },
//   {
//     title: 'Второе правило Бойцовского клуба.',
//     body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//   },
//   {
//     title: 'Третье правило Бойцовского клуба.',
//     body: 'В схватке участвуют только двое.'
//   },
//   {
//     title: 'Четвертое правило Бойцовского клуба.',
//     body: 'Не более одного поединка за один раз.'
//   },
//   {
//     title: 'Пятое правило Бойцовского клуба.',
//     body: 'Бойцы сражаются без обуви и голые по пояс.'
//   },
//   {
//     title: 'Шестое правило Бойцовского клуба.',
//     body: 'Поединок продолжается столько, сколько потребуется.'
//   },
//   {
//     title: 'Седьмое правило Бойцовского клуба.',
//     body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//   },
//   {
//     title: 'Восьмое и последнее правило Бойцовского клуба.',
//     body: 'Новичок обязан принять бой.'
//   },

// ];
// allRules(rules);

// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.

// function carsFun(cars,id){
//   for (const car of cars) {
//     let divka = document.createElement('div');
//     divka.innerText = car;
//     let elementById = document.getElementById(id);
//     elementById.appendChild(divka);
//   }
// }

// carsFun(['skoda','audi','bmw','porsh','VW'],car1)
// carsFun(['skoda','audi','bmw','porsh','VW'],car2)


