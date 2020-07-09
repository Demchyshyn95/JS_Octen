// - створити функцію яка виводить масив
// function getArray() {
//     let array = [1, 2, 3];
//     console.log(array);
// }
// getArray();

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
// function minNumber(a, b, c) {
//     let array = [a, b, c];
//     const min = Math.min(...array)
//     console.log(min)
//     return min;
// }
// minNumber(prompt(a = 'Enter number a'), prompt(b = 'Enter number b'), prompt(c = 'Enter number c'))


// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function minNumber(a, b, c) {
//     let array = [a, b, c];
//     const max = Math.max(...array)
//     console.log(max)
//     return max;
// }
// minNumber(prompt(a = 'Enter number a'), prompt(b = 'Enter number b'), prompt(c = 'Enter number c'))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function allN() {
//     Numbers = []
//     for (i = 0; i < arguments.length; i++) {
//         Numbers[i] = arguments[i];
//     }
//     let minNumber = Math.min(...Numbers);
//     console.log('minNumber - ' + minNumber);
//     let maxNumber = Math.max(...Numbers);
//     console.log('maxNumber - ' + maxNumber);
// }
// allN(1, 2, 3, 4, 5, 6, 7, 8, 9)

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function allN() {
//     Numbers = []
//     for (i = 0; i < arguments.length; i++) {
//         Numbers[i] = arguments[i];
//     }
// let sum = Numbers.reduce((a,b)=>a+b,0);
// let rezult = sum/Numbers.length;
// console.log(rezult);
// }
// allN(1, 20, 3, 4, 5, 6, 7, 8, 9)


// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві

// function allObj() {
//     Array = []
//     for (i = 0; i < arguments.length; i++) {
//         Array[i] = arguments[i];
//     }
// let rezult = Array.length;
// console.log(rezult);
// }
// allObj({name:'Andre'},{age:21},{animals:"cat"},{maried:false},{single:false},{},{})

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// let arr1=[1,2,3,4];
// let arr2=[2,3,4,5];
// let arr3=[];
// function sumArray(){
//         for (let i = 0; i < arr1.length; i++){
//             arr3[i] = arr1[i] + arr2[i];
//         }
//         console.log(arr3);;
//         return arr3;
// }
// sumArray();


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrayOfEndZiro = () => {
//     let array = [];
//     for (let i = 0; i < 100; i++) {
//         let numb = Math.floor(Math.random() * (9 - 0)) + 0
//         if (numb === 0) {
//             array.push(numb)
//         }
//         else {
//             array.unshift(numb)
//         }
//     }
//     console.log(array);
// }
// arrayOfEndZiro()


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

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці


