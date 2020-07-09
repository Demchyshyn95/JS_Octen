// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок


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

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
function allObj() {
    Array = []
    for (i = 0; i < arguments.length; i++) {
        Array[i] = arguments[i];
    }
let rezult = Array.length;
console.log(rezult);
}
allObj({name:'Andre'},{age:21},{animals:"cat"},{maried:false},{single:false},{},{})
