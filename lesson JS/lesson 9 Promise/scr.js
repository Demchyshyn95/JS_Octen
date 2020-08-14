
// Треба реалізувати свій розпорядок дня. 
// Колбеками, промісами та асинк авейт.

// В дні має бути від 7 до 10 подій. Всі події мають мати описані успішні та не успішні варіанти виконання. 
// Має бути так
// 1) прокинувся
// 2) Поснідав
// 3) почистав зуби 
// і т.д.

// Якщо щось пішло не так (нема шо їсти), то має бути викинута помилка і решта функцій виконуватись не мають. 
// Якщо ж все ок, то ви маєте прожити свій звичайний день.
// Кожна подія має бути з рандомною (не по зростанню) затримкою.


// function wakeUp(isWakeup, ) {
//     setTimeout(() => {
//         if (isWakeup) {
//             (null, 'good morning')
//         }
//         else {
//             ('Проспав', null)
//         }
//     }, 1000)
// }

// function makeBreakfast(make, ) {
//     setTimeout(() => {
//         if (make) {
//             (null, 'сніданок готовий');
//         }
//         else {
//             (true, null)
//         }
//     }, 1000);
// }
// function brushTeeth() {
//     setTimeout(() => {
//         ('Зуби чисті')
//     }, 1000);
// }
// function goToWork() {
//     setTimeout(() => {
//         ('Їду на роботу')
//     }, 1000);
// }
// function working() {
//     setTimeout(() => {
//         ('Я працююю')
//     }, 1000);
// }
// function goToHome() {
//     setTimeout(() => {
//         ('Їду додому =)')
//     }, 1000);
// }
// function eating() {
//     setTimeout(() => {
//         ('я їМ)))))))))')
//     }, 1000);
// }
// function goToSleep() {
//     setTimeout(() => {
//         ('Все,я спати,надобраніч)')
//     }, 1000);
// }



// wakeUp(true, (err, ) => {
//     if (err) {
//         console.log(err)
//     }
//     else {
//         console.log();
//         makeBreakfast(false, (err, ) => {
//             if (err) {
//                 console.log('БРО НЕМА ЩО ЇСТИ,ДНЯ НЕ БУДЕ')
//             }
//             else {
//                 console.log();
//                 brushTeeth(() => {
//                     console.log();
//                     goToWork(() => {
//                         console.log();
//                         working(() => {
//                             console.log();
//                             goToHome(() => {
//                                 console.log();
//                                 eating(() => {
//                                     console.log();
//                                     goToSleep(() => {
//                                         console.log()
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })

//             }
//         })
//     }
// })


// function wakeUp(isWakeup) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isWakeup) {
//                 resolve('good morning')
//             }
//             else {
//                 reject('СПЛЮ ВЕСЬ ДЕНЬ')
//             }
//         }, 1000)
//     })
// }

// function makeBreakfast(make) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (make) {
//                 resolve('сніданок готовий');
//             }
//             else {
//                 reject('БРО НЕМА ЩО ЇСТИ,ДНЯ НЕ БУДЕ')
//             }
//         }, 1000);
//     })
// }
// function brushTeeth() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Зуби чисті')
//         }, 1000);
//     })

// }
// function goToWork() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Їду на роботу')
//         }, 1000);
//     })
// }
// function working() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Я працююю')
//         }, 1000);
//     })
// }
// function goToHome() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Їду додому =)')
//         }, 1000);
//     })
// }
// function eating() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('я їМ)))))))))')
//         }, 1000);
//     })
// }
// function goToSleep() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve('Все,я спати,надобраніч)')
//         }, 1000);
//     })
// }


// wakeUp(true)
//     .then(val => {
//         console.log(val);
//         return makeBreakfast(true)
//     })
//     .then(val => {
//         console.log(val);
//         return brushTeeth();
//     })
//     .then(val => {
//         console.log(val);
//         return goToWork();
//     })
//     .then(val => {
//         console.log(val);
//         return working();
//     })
//     .then(val => {
//         console.log(val);
//         return goToHome();
//     })
//     .then(val => {
//         console.log(val);
//         return eating();
//     })
//     .then(val => {
//         console.log(val);
//         return goToSleep();
//     })
//     .then(val => console.log(val))

//     .catch(val => console.error(val))

// async function allDay(){
//     try {
//         let wake = await wakeUp(true);
//         console.log(wake);
//         let breakfast = await makeBreakfast(true);
//         console.log(breakfast);
//         let brushT = await brushTeeth();
//         console.log(brushT);
//         let goWork = await goToWork();
//         console.log(goWork);
//         let work = await working();
//         console.log(work);
//         let goHome = await goToHome();
//         console.log(goHome);
//         let eat = await eating();
//         console.log(eat);
//         let goSleep = await goToSleep();
//         console.log(goSleep);

//     } catch (error) {
//         console.error(error);
//     }
// }
// allDay()
