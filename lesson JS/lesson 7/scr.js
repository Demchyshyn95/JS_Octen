// - Создать произвольный елемент с id = text.Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id = "text".

// const text = document.createElement('p');
// text.setAttribute('id', 'text')
// text.innerHTML = 'asncajkcnjcjkwejcwjecwkwjk'
// const button = document.createElement('button')
// button.setAttribute('id', 'btn')
// button.innerText = 'button'
// document.body.appendChild(text);
// document.body.appendChild(button);


// button.onclick = () => {
//     text.parentElement.removeChild(text);
// }

// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// button.onclick = () => {
//     button.style.opacity = 0
// }
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// const input = document.createElement('input');
// const btn = document.createElement('button');
// input.setAttribute('id', 'inp');
// input.setAttribute('type', 'number');
// btn.setAttribute('id', 'btn');
// btn.innerText = 'button'
// document.body.appendChild(input);
// document.body.appendChild(btn);

// btn.onclick = () => {
//     const value = input.value;
//     value > 18 ? alert('Ти дорослий') : alert('тобі ще зарано')
// }



//     - Создайте меню, которое раскрывается / сворачивается при клике
// const div = document.createElement('div');
// div.setAttribute('id', 'sweeties');
// div.setAttribute('class', 'menu');
// document.body.appendChild(div);
// const span = document.createElement('span');
// span.setAttribute('class', 'title');
// span.innerText = 'Смаколики =)';
// div.appendChild(span);
// const ul = document.createElement('ul');
// div.appendChild(ul);
// const li2 = document.createElement('li');
// li2.innerText = 'морозивко';
// ul.appendChild(li2);
// const li3 = document.createElement('li');
// li3.innerText = 'тістечко'
// ul.appendChild(li3);

// const menuElem = document.getElementById('sweeties');
// const titleElem = menuElem.querySelector('.title');

// titleElem.onclick = function() {
//   menuElem.classList.toggle('open');
// };



// - Создать список комментариев, пример объекта коментария - { title: 'lorem', body: 'lorem ipsum dolo sit ameti' }.
// Вывести список комментариев в документ, каждый в своем блоке.
// Добавьте каждому комментарию по кнопке для сворачивания его body.
// const coments = [
//     { title: 'lorem :', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem :', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem :', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem :', body: 'lorem ipsum dolo sit ameti' },
//     { title: 'lorem :', body: 'lorem ipsum dolo sit ameti' }
// ]

// coments.forEach(el => {
//     const ul = document.createElement('ul');
//     const li = document.createElement('li');
//     const span = document.createElement('span');
//     const span2 = document.createElement('span');
//     const btn = document.createElement('button');
//     btn.innerHTML = 'приховати'
//     span2.setAttribute('id', 'spanBody')
//     span.innerHTML = el.title;
//     span2.innerHTML = el.body;
//     li.appendChild(span);
//     li.appendChild(span2);
//     li.appendChild(btn)
//     ul.appendChild(li);
//     document.body.appendChild(ul);
//     btn.onclick = () => {
//     span2.hidden
//     ?span2.hidden = false
//     :span2.hidden = true

//     }
// })


// - створити 2 форми  по 2 інпути в кожній.ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм(Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API.Отже дайте формі та інпутам всі необхідні атрибути.

// const form = document.createElement('form');
// const input1 = document.createElement('input');
// input1.setAttribute('value', '')
// const input2 = document.createElement('input');
// input2.setAttribute('value', '')
// form.appendChild(input1);
// form.appendChild(input2);
// document.body.appendChild(form);

// const form2 = document.createElement('form');
// const input3 = document.createElement('input');
// input3.setAttribute('value', '')
// const input4 = document.createElement('input');
// input4.setAttribute('value', '')
// form.appendChild(input3);
// form.appendChild(input4);
// document.body.appendChild(form2);

// const btn = document.createElement('button');
// btn.innerText = 'ok';
// btn.style.width = '662px'
// document.body.appendChild(btn)

// btn.onclick = () => {
//     console.log(`forma 1 - input 1 -----${input1.value}`)
//     console.log(`forma 1 - input 2 -----${input2.value}`)
//     console.log(`forma 2 - input 1 -----${input3.value}`)
//     console.log(`forma 2 - input 1 -----${input4.value}`)
// }



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.

// const divka = document.createElement('div');
// document.body.appendChild(divka);

// const tabl = (tr, td, where) => {
//     const table = document.createElement('table');
//     for (const i = 0; i < tr; i++) {
//         const tabTr = document.createElement('tr');
//         table.appendChild(tabTr)
//         for (const i = 0; i < td; i++) {
//             const tablTd = document.createElement('td');
//             tablTd.innerText = `some text ${i},`
//             tabTr.appendChild(tablTd);
//         }
//     }
//     where.appendChild(table)
// }

// tabl(3, 3, divka);



// - Створити 3 инпута та кнопку.Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// const input = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
// const btn = document.createElement('button');
// input.setAttribute('value', '');
// input2.setAttribute('value', '');
// input3.setAttribute('value', '');
// input.setAttribute('placeholder', 'tr');
// input2.setAttribute('placeholder', 'td');
// input3.setAttribute('placeholder', 'innerText');
// btn.innerText = 'OK';
// btn.style.width = '494px'
// document.body.appendChild(input);
// document.body.appendChild(input2);
// document.body.appendChild(input3);
// document.body.appendChild(btn);

// btn.onclick = () => {
//     const tr = input.value;
//     const td = input2.value;
//     const text = input3.value;
//     const table = document.createElement('table');
//     for (const i = 0; i < tr; i++) {
//         const tabTr = document.createElement('tr');
//         table.appendChild(tabTr)
//         for (const i = 0; i < td; i++) {
//             const tablTd = document.createElement('td');
//             tablTd.innerText = text
//             tabTr.appendChild(tablTd);
//         }
//     }
//     document.body.appendChild(table)
// }



//     - Напишите «Карусель» – ленту изображений, которую можно листать влево - вправо нажатием на стрелочки.

// const image = new Image(400, 400);
// image.src = 'https://www.apa.org/images/2020-03-feature-giraffe_tcm7-269465.png';
// image.style.display = 'none'
// image.onload = () => {
//     document.body.appendChild(image);
// }

// const image2 = new Image(400, 400);
// image2.style.display = 'block'
// image2.src = 'https://zoo.sandiegozoo.org/sites/default/files/styles/landing_page_view_thumbnail/public/2019-01/thumb-amurleopard_0.jpg?itok=2V5hBqxr';
// image2.onload = () => {
//     document.body.appendChild(image2);
// }

// const image3 = new Image(400, 400);
// image3.src = 'https://hips.hearstapps.com/esq.h-cdn.co/assets/15/23/1433261929-25-toughest-animals-lede.jpg';
// image3.style.display = 'none'
// image3.onload = () => {
//     document.body.appendChild(image3);
// }
// const images = [];
// images.push(image, image2, image3);

// this.onkeydown = (e) => {
//     for (const i = 0; i < images.length; i++) {
//         if (e.code === 'ArrowRight') {
//             if (images[i].style.display === 'block') {
//                 images[i].style.display = 'none';
//                 nextImag = images[i + 1] ? images[i + 1] : images[0]
//                 nextImag.style.display = 'block';
//                 break;
//             }
//         }
//         else if (e.code === 'ArrowLeft') {
//             if (images[i].style.display === 'block') {
//                 images[i].style.display = 'none';
//                 nextImag = images[i - 1] ? images[i - 1] : images[images.length - 1]
//                 nextImag.style.display = 'block';
//                 break;
//             }
//         }
//     }
// }

// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку

//     - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку

// const world = ['бля', 'говно', 'єбало', 'єбать', 'жопа', 'лярва'];
// const input = document.createElement('input');
// input.setAttribute('type', 'text');
// document.body.appendChild(input);
// const btn = document.createElement('button');
// btn.innerText = 'send';
// document.body.appendChild(btn);
// btn.onclick = () => {
//     value = input.value;
//     world.forEach(el => {
//         if (value.includes(el)) {
//             alert('УВАГА!!! НЕ ЦЕНЗУРНЕ СЛОВО')
//             added()
//         }
//     });
// }

// создать скрипт,
// который берет считывает на странице(rules.html) текст
//  и делает сбоку меню оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте
//Розкоментуйте html для роботи з кодом


// const arrayH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content1');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
// for (const i = 0; i < arrayH2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     const yakor = 'yakor' + i;
//     a.href = '#' + yakor;
//     arrayH2[i].setAttribute('id', yakor);
//     a.innerHTML = arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content1.appendChild(ul)

// content.style = "width : 30%; float:left";
// wrap.style = "width : 70%; float:right";

// --взять массив пользователей
// const usersWithAddress = [
//     { id: 1, name: 'vasya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 2, name: 'petya', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 1 } },
//     { id: 3, name: 'kolya', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 121 } },
//     { id: 4, name: 'olya', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 90 } },
//     { id: 5, name: 'max', age: 30, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 115 } },
//     { id: 6, name: 'anya', age: 31, status: false, address: { city: 'Kyiv', street: 'Shevchenko', number: 2 } },
//     { id: 7, name: 'oleg', age: 28, status: false, address: { city: 'Ternopil', street: 'Shevchenko', number: 22 } },
//     { id: 8, name: 'andrey', age: 29, status: true, address: { city: 'Lviv', street: 'Shevchenko', number: 43 } },
//     { id: 9, name: 'masha', age: 30, status: true, address: { city: 'Kyiv', street: 'Shevchenko', number: 12 } },
//     { id: 10, name: 'olya', age: 31, status: false, address: { city: 'Lviv', street: 'Shevchenko', number: 16 } },
//     { id: 11, name: 'max', age: 31, status: true, address: { city: 'Ternopil', street: 'Shevchenko', number: 121 } }
// ];
// Создать три чекбокса.Каждый из них активирует фильтр для вышеуказаного массива.Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false(осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ

//     const div = document.createElement('div')
//     const content = document.createElement('div');
//     content.appendChild(iterArray(usersWithAddress))
//     const br = document.createElement('br');
//     div.appendChild(br)
//     const checkbox = document.createElement('input');
//     checkbox.setAttribute('type', 'checkbox');
//     const label = document.createElement('label');
//     label.innerText = 'status false';  
//     checkbox.appendChild(label);
//     const checkbox2 = document.createElement('input');
//     checkbox2.setAttribute('type', 'checkbox');
//     const label2 = document.createElement('label');
//     label2.innerText = 'age >= 29';
//     const checkbox3 = document.createElement('input');
//     checkbox3.setAttribute('type', 'checkbox');
//     const label3 = document.createElement('label');
//     label3.innerText = 'city = Kyiv';
//     const btn = document.createElement('button');  
//     btn.innerText = 'Filter';
//     div.appendChild(content)
//     div.appendChild(checkbox);
//     div.appendChild(label);
//     div.appendChild(checkbox2);
//     div.appendChild(label2);
//     div.appendChild(checkbox3);
//     div.appendChild(label3);
//     div.appendChild(btn)
//     document.body.appendChild(div);

//     function iterArray(arr){
//         const inner = document.createElement('div');
//         inner.setAttribute('id', 'content')
//         arr.forEach(el => {
//             const div = document.createElement('div');
//             div.innerHTML = JSON.stringify(el);
//             inner.appendChild(div);
//             content.appendChild(inner)

//         })
//         return inner
//     }
// btn.onclick = ev => {
//     let newArray = JSON.parse(JSON.stringify(usersWithAddress));
//     if(checkbox.checked) newArray = newArray.filter((el) => !el.status);
//     if(checkbox2.checked) newArray =newArray.filter((el) => el.age >= 29);
//     if(checkbox3.checked) newArray = newArray.filter((el) => el.address.city === 'Kyiv');
//     content.innerHTML = '';
//     iterArray(newArray);
// }

//     ***** (Прям овердоз с рекурсией) Создать функцию которая принимает какой - либо элемент DOM - структуры.Функция создает в боди 2 кнопки(назад / вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу(лежащему на одном уровне)
// НО если у(какого - либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка.и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


//     *** При виділені сегменту тексту на сторінці він стає жирний / курсивний / або якось іншим способом змінює свій стан

// const content = document.createElement('div');
// content.innerText = ' При виділені сегменту тексту на сторінці він стає жирний / курсивний / або якось іншим способом змінює свій стан';
// document.body.appendChild(content);

// content.onmouseup = function () {
//     let segment = document.getSelection().toString();
//     const innerText = this.innerText;
//     let boldSegment = '<b>' + segment + '</b>';
//     this.innerHTML = innerText.replace(segment, boldSegment);
// }
