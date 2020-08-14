// - Напишіть код, який :

// --змінює колір тексту елемнту з ід main_header на будь - який інший
// let mainHead = document.getElementById('main_header');
// mainHead.style.color = 'yellow';

// --робить шириниу елементу ul 400 пікселів
// let ulWidth = document.getElementsByTagName('ul');
// ulWidth[0].style.width = '400px';

// -- робить шириниу всіх елементів з класом linkList шириною 50%
// let allElemClassLinkList = document.getElementsByClassName('linkList');
// for (let i = 0; i < allElemClassLinkList.length; i++) {
//     allElemClassLinkList[i].style.width = '50%'
// }

// -- отримує текст який зберігається в елементі з класом listElement2
// let textClass = document.getElementsByClassName('listElement2');
// console.log(textClass[0]);

// -- отримує всі елементи li та змінює ім колір фону на сірий
// let liBgColor = document.getElementsByTagName('li');
// for (let i = 0; i < liBgColor.length; i++) {
//     liBgColor[i].style.backgroundColor = 'silver'
// }

// -- отримує всі елементи 'a' та додає їм клас anchor
// let allA = document.getElementsByTagName('a');
// for (let i = 0; i < allA.length; i++) {
//     allA[i].classList.add('anchor')
// }

// -- отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allA = document.getElementsByTagName('a');
// for (let i = 0; i < allA.length; i++) {
//     if (allA[i].innerText === 'link3') {
//         allA[i].style.width = '40px';
//         allA[i].style.color = 'red';

//     }
// }

// --отримує всі елементи 'sub-header' та змінює колір фону.Фон отримати з prompt()
// let allClasSub = document.getElementsByClassName('sub-header');
// let bgColor = prompt('Enter your color,please =)');
// for (let i = 0; i < allClasSub.length; i++) {
//     allClasSub[i].style.backgroundColor = bgColor;
// }

// --отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment.Колір отримати з prompt()
// let allClasSub2 = document.getElementsByClassName('sub-header');
// for (let i = 0; i < allClasSub2.length; i++) {
//     if (allClasSub2[i].innerText === 'content 2 segment') {
//         let color = prompt('Enter your color,please =)');
//         allClasSub2[i].style.color = color;
//     }
// }

// --отримує елемент з класом content_1 та заміняє  в ньому тест на довільний.Текст отримати з prompt()
// let elClasCont1 = document.getElementsByClassName('content_1');
// let newText = prompt('Enter your text, please')
// elClasCont1[0].innerHTML = newText;

// -- отримати елементи p та змінити їм paddin на довільне значення
// let ellP = document.getElementsByTagName('p');
// for (let i = 0; i < ellP.length; i++) {
// ellP[i].style.padding = '45px'    
// }

// -- отримати елементи з класом text2 та змінити їм текст на довільне значення
// let clText2 = document.getElementsByClassName('text2');
// clText2[0].innerHTML = 'довільне значення довільне значення довільне значення довільне значення довільне значення'
