// 1-4.
// let array = ['apple','oragne','banana',true,123];
// console.log(array);

// 5.
// let array=[];
// array[0]='red';
// array[1]='green';
// array[2]='blue';
// array[3]= 12;
// array[4]= false;
// console.log(array);

// 6-8
// for (let i = 0; i < 10; i++) {
//     document.write(`<div> Heloo World i-${i} </div>`)
// }

// 9-10
// let i = 0;
// while(i<20){
//     i++;
//     document.write(`<h1> Heloo World i-${i}</h1>`)
// }

// 11-13
// let array=['Victor', 'Jon', true, 121, 0.75, false, 'Ford', 'Mustang', 'Audi'];
// for( let i = 0; i<array.length; i++){
//     console.log(array[i])
// }

// 14.
// let array = ['Victor', 'Jon', true, 121, 0.75, false, 'Ford', 'Mustang', 'Audi'];
// for (const Array2 of array) {
//     if (typeof (Array2) === 'boolean') {
//         console.log(Array2)
//     }
// }
// for (let i = 0; i < array.length; i++) {
//     if (typeof (array[i]) === 'boolean') {
//         console.log(array[i])
//     }
// }

// 15.
// for (const Array2 of array) {
//     if (typeof (Array2) === 'number') {
//         console.log(Array2)
//     }
// }
// 16.
// for (const Array2 of array) {
//     if (typeof (Array2) === 'string') {
//         console.log(Array2)
//     }
// }

// 17.
// let array=[];
// array[0]='red';
// array[1]='green';
// array[2]='blue';
// array[3]= 12;
// array[4]= false;
// array[5]='cat';
// array[6]='tree';
// array[7]='car';
// array[8]= 0.132;
// array[9]= true;
// for(let i = 0; i<array.length; i++){
//     console.log(array[i])
// }

// 18-20.

// for (let i = 0; i <= 10; i++) {
// console.log(i);
// document.write(i);    
// }
// for (let i = 0; i <= 100; i++) {
//     console.log(i);
//     document.write(i);    
//     }
// for (let i = 0; i <= 100; i+=2) {
//         console.log(i);
//         document.write(i);    
//         }


// 21-23 .
// for (let i = 0; i <= 100; i++) {
//     if (i % 2) continue;
//     {
//         document.write(i);
//         console.log(i)
//     }
// }

// for (let i = 0; i <= 100; i++) {
//     if (i % 2 ==0) continue;
//     {
//         document.write(i);
//         console.log(i)
//     }
// }

// 24.
// for (let min = 0; min < 2; min++) {
//     for (sec = 0; sec < 60; sec++) {
//         document.write(`min =${min} sec =${sec}`)
//         document.write('<br>')
//     }
// }
// 25.
// for (let hour = 0; hour <= 2; hour++) {
//     for (let min = 0; min < 60; min++) {
//         if (hour === 2 && min === 20) {
//             break;
//         }
//         for (let sec = 0; sec < 60; sec++) {
//             console.log(`hour = ${hour} min = ${min} sec = ${sec}`)
//         }
//     }
// }

                            // //...Додатково

// - Дано масив: ['a', 'b', 'c'].За допомогою циклу for of зібрати всі букви в слово.
// let world = '';
// let string = ['a', 'b', 'c'];
// for (const symb of string) {
//     world += symb
// }
// console.log(world)

// За допомогою циклу for
// let world = '';
//     let string = ['a', 'b', 'c'];
// for (let i = 0; i < string.length; i++) {
//     world += string[i]
// }
// console.log(world);


// /- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let numb = [1, 2, 3];
// let numb2 = []
// while (numb.length) {
//     numb2.unshift(numb.shift())
// }
// console.log(numb2);


// Дан масив['js', 'css', 'jq'].Виведіть на екран останній елемент за допомогою pop()
// let str = ['js', 'css', 'jq'];
// let x = str.pop();
// console.log(x);


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
// let Array = [1, 2, 3, 4, 5];
// Array.splice(1, 0, 'a', 'b');
// Array.splice(6, 0, 'c');
// Array.splice(8, 0, 'e');
// console.log(Array)//[1, "a", "b", 2, 3, 4, "c", 5, "e"]


//Вывести каждый елемент массива у которого соседний с права элемент - парный
// let Array = [1, 2, 33, 343, 3, 2, 22, 4, 6, 60, 12, 13, 3, 4, 5]
// for (let i = 0; i < Array.length; i++) {
//     if (Array[i + 1] % 2 === 0) {
//         console.log(Array[i]);
//     }
// }

// используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)

// let Array = [];
// for (let i = 0; i < 10; i++) {
//     let x = Math.floor(Math.random() * (732 - 8)) + 8;
//     Array.push(x)
// }
// console.log(Array);