
// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.
// const textarea = document.getElementById('textarea');
// textarea.value = localStorage.getItem('key');
// textarea.onchange = (e) => {
//     localStorage.setItem('key', (e.target.value));
//     console.log(localStorage)
// }

// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

// const form1 = document.getElementById('form1')
// getForm(form1);

// function saveForm(e) {
//     setForm(e)
// }

// function setForm(tag) {
//     for (let i = 0; i < tag.length; i++) {
//         const element = tag[i];
//         if (element.type === 'checkbox' || element.type === 'radio') {
//             element.checked ? element.value = true : element.value = false
//         }
//         localStorage.setItem(element.id, element.value)
//     }
// }

// function getForm(tag) {
//     for (let i = 0; i < localStorage.length; i++) {
//         if (localStorage.hasOwnProperty(tag.children[i].id)) {
//             tag.children[i].value = localStorage.getItem(tag.children[i].id)
//             if (tag.children[i].value === 'true') {
//                 tag.children[i].setAttribute('checked', 'true')
//             }
//         }
//     }
// }

// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).

// const text = document.getElementById('area');
// const arrow_left = document.getElementById('arrow-left');
// const arrow_rigth = document.getElementById('arrow-rigth');
// const save = document.getElementById('save');

// save.onclick = () => {
//     localStorage.setItem(localStorage.length + 1,text.value);
// }

// arrow_left.onclick = () => {
//     arrow_rigth.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//            if(localStorage.getItem(key) === text.value){
//                index = key
//            }

//         }
//     }
//     if (index === '1'){
//         arrow_left.style.visibility = 'hidden';
//         return
//     }
//     text.value = localStorage.getItem(index-1)
// }

// arrow_rigth.onclick = () => {
//     arrow_left.style.visibility = 'visible';
//     let index;
//     for (const key in localStorage) {
//         if (localStorage.hasOwnProperty(key)) {
//            if(localStorage.getItem(key) === text.value){
//                index = key
//            }

//         }
//     }
//     if (index === localStorage.length.toString()){
//         arrow_rigth.style.visibility = 'hidden';
//         return
//     }
//     text.value = localStorage.getItem(+index+1)
// }



// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта
// const form1 = document.forms.form1;
// const array_users = 'ARRAY_USERS';
// const content = document.getElementById('notebook')

// let tempUsers = {};


// form1.submit1.onclick = (ev) => {
//     // ev.preventDefault()
//     let person = { ...tempUsers };
//     tempUsers = {};
//     for (let i = 0; i < form1.children.length; i++) {
//         const el = form1.children[i];
//         if (el.name && el.type !== 'submit') {
//             person[el.name] = el.value;
//         }
//     }
//     if (!person.id) {
//         person.id = new Date().getTime();

//     }
//     savePerson(person)
// }

// function savePerson(user) {
//     if (localStorage.hasOwnProperty(array_users)) {
//         const arrayUsers = JSON.parse(localStorage.getItem(array_users));
//         const find = arrayUsers.find(val => val.id === user.id);
//         if (find) {
//             const filter = arrayUsers.filter(val => val.id !== user.id);
//             filter.push(user);
//             localStorage.setItem(array_users, JSON.stringify(filter))
//         }
//         else {
//             arrayUsers.push(user);
//             localStorage.setItem(array_users, JSON.stringify(arrayUsers))
//         }
//     }
//     else {
//         localStorage.setItem(array_users, JSON.stringify([user]));
//     }

// }

// getUsersLS();
// function getUsersLS() {
//     if (localStorage.hasOwnProperty(array_users)) {
//         let users = JSON.parse(localStorage.getItem(array_users));
//         for (const el of users) {
//             content.appendChild(createNotebook(el))
//         }
//     }
// }

// function createNotebook(user) {
//     const main = document.createElement('div');
//     const btn1 = document.createElement('button');
//     const btn2 = document.createElement('button');
//     btn1.innerText = 'Edit';
//     btn1.onclick = () => {
//         editUser(user.id);
//     }
//     btn2.onclick = () => {
//         deleteUser(user.id);
//     }
//     btn2.innerText = 'Delete';
//     let flag = true;
//     for (const el in user) {
//         if (flag) {
//             const h3 = document.createElement('h3');
//             h3.innerText = el + ':' + user[el];
//             main.appendChild(h3);
//             flag = false
//         } else {
//             const p = document.createElement('p');
//             p.innerText = el + ':' + user[el];
//             main.appendChild(p)
//         }
//         main.appendChild(btn1);
//         main.appendChild(btn2);
//     }
//     main.style = " width:250px;border:silver 1px solid;float:left"
//     return main
// }

// function deleteUser(id) {
//     let users = JSON.parse(localStorage.getItem(array_users));
//     let filter = users.filter(el => el.id !== id);
//     localStorage.setItem(array_users, JSON.stringify(filter));
//     location.reload();
// }


// function editUser(id) {
//     let parse = JSON.parse(localStorage.getItem(array_users));
//     let user = parse.find(el => el.id === id);
//     for (let i = 0; i < form1.children.length; i++) {
//         const el = form1.children[i];
//         if (el.name && el.type !== 'submit') {
//             for (const key in user) {
//                 if (el.name === key) {
//                     el.value = user[key]
//                 }
//             }
//         }
//     }
//     tempUsers = user;
// }