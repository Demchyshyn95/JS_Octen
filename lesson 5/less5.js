
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================
// function Teg(titleOfTag,description,attrs = ['']) {
//         this.titleOfTag = titleOfTag;
//         this.description = description;
//         this.Attrs = attrs; 
// }

// const teg_a_Araays = [
//     {
//         titleOfAttr: 'href',
//         actionOfAttr: 'Задает адрес документа, на который следует перейти'
//     },
//     {
//         titleOfAttr: 'rel',
//         actionOfAttr: 'Отношения между ссылаемым и текущим документами'
//     },
//     {
//         titleOfAttr: 'type',
//         actionOfAttr: 'Указывает MIME-тип документа, на который ведёт ссылка'
//     },
// ];
// const teg_div_Araays = [
//     {
//         titleOfAttr: 'align ',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     },
// ];
// const teg_h1_Araays = [
//     {
//         titleOfAttr: 'align ',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     },
// ];
// const teg_span_Araays = [
//     {
//         titleOfAttr: 'accesskey ',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
//     },
//     {
//         titleOfAttr: 'dir ',
//         actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'
//     },
// ];

// const teg_input_Araays = [
//     {
//         titleOfAttr: 'alt',
//         actionOfAttr: 'Альтернативный текст для кнопки с изображением'
//     },
//     {
//         titleOfAttr: 'border',
//         actionOfAttr: 'толщина рамки вокруг изображения.'
//     },
//     {
//         titleOfAttr: 'form',
//         actionOfAttr: 'Связывает поле с формой по её идентификатору'
//     },
// ];

// const teg_form_Araays = [
//     {
//         titleOfAttr: 'action',
//         actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'
//     },
//     {
//         titleOfAttr: 'enctype',
//         actionOfAttr: 'Способ кодирования данных формы'
//     },
//     {
//         titleOfAttr: 'method',
//         actionOfAttr: 'Метод протокола HTTP.'
//     },
// ];

// const teg_select_Araays = [
//     {
//         titleOfAttr: 'autofocus',
//         actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//     },
//     {
//         titleOfAttr: 'multiple',
//         actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
//     },
//     {
//         titleOfAttr: 'size',
//         actionOfAttr: 'Количество отображаемых строк списка.'
//     },
// ]

// let teg_a = new Teg('a', 'является одним из важных элементов HTML и предназначен для создания ссылок', teg_a_Araays);
// console.log(teg_a);

// let div = new Teg('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     teg_div_Araays);
// console.log(div);

// let h1 = new Teg('h1', 'Заголовок первого уровня', teg_h1_Araays);
// console.log(h1);

// let span = new Teg('span', 'Тег <span> предназначен для определения строчных элементов документа.', teg_span_Araays);
// console.log(span);

// let input = new Teg('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     teg_input_Araays);
// console.log(input);

// let form = new Teg('form', 'Тег <form> устанавливает форму на веб-странице.Форма предназначена для обмена данными между пользователем и сервером',
//     teg_form_Araays);
// console.log(form);

// console.log('...');

// let select = new Teg('select', 'Тег <form> устанавливает форму на веб-странице.Форма предназначена для обмена данными между пользователем и сервером',
//     teg_select_Araays);
// console.log(select);





// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Teg {
//     constructor(titleOfTag, description, attrs = ['']) {
//         this.titleOfTag = titleOfTag;
//         this.description = description;
//         this.Attrs = attrs;
//     }
// }

// const teg_a_Araays = [
//     {
//         titleOfAttr: 'href',
//         actionOfAttr: 'Задает адрес документа, на который следует перейти'
//     },
//     {
//         titleOfAttr: 'rel',
//         actionOfAttr: 'Отношения между ссылаемым и текущим документами'
//     },
//     {
//         titleOfAttr: 'type',
//         actionOfAttr: 'Указывает MIME-тип документа, на который ведёт ссылка'
//     },
// ];
// const teg_div_Araays = [
//     {
//         titleOfAttr: 'align ',
//         actionOfAttr: 'Задает выравнивание содержимого тега <div>'
//     },
//     {
//         titleOfAttr: 'title',
//         actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.'
//     },
// ];
// const teg_h1_Araays = [
//     {
//         titleOfAttr: 'align ',
//         actionOfAttr: 'Определяет выравнивание заголовка.'
//     },
// ];
// const teg_span_Araays = [
//     {
//         titleOfAttr: 'accesskey ',
//         actionOfAttr: 'Позволяет получить доступ к элементу с помощью заданного сочетания клавиш'
//     },
//     {
//         titleOfAttr: 'dir ',
//         actionOfAttr: 'Задает направление и отображение текста — слева направо или справа налево.'
//     },
// ];

// const teg_input_Araays = [
//     {
//         titleOfAttr: 'alt',
//         actionOfAttr: 'Альтернативный текст для кнопки с изображением'
//     },
//     {
//         titleOfAttr: 'border',
//         actionOfAttr: 'толщина рамки вокруг изображения.'
//     },
//     {
//         titleOfAttr: 'form',
//         actionOfAttr: 'Связывает поле с формой по её идентификатору'
//     },
// ];

// const teg_form_Araays = [
//     {
//         titleOfAttr: 'action',
//         actionOfAttr: 'Адрес программы или документа, который обрабатывает данные формы'
//     },
//     {
//         titleOfAttr: 'enctype',
//         actionOfAttr: 'Способ кодирования данных формы'
//     },
//     {
//         titleOfAttr: 'method',
//         actionOfAttr: 'Метод протокола HTTP.'
//     },
// ];

// const teg_select_Araays = [
//     {
//         titleOfAttr: 'autofocus',
//         actionOfAttr: 'Устанавливает, что список получает фокус после загрузки страницы.'
//     },
//     {
//         titleOfAttr: 'multiple',
//         actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.'
//     },
//     {
//         titleOfAttr: 'size',
//         actionOfAttr: 'Количество отображаемых строк списка.'
//     },
// ]


// let teg_a = new Teg('a', 'является одним из важных элементов HTML и предназначен для создания ссылок', teg_a_Araays);
// console.log(teg_a);

// let div = new Teg('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     teg_div_Araays);
// console.log(div);

// let h1 = new Teg('h1', 'Заголовок первого уровня', teg_h1_Araays);
// console.log(h1);

// let span = new Teg('span', 'Тег <span> предназначен для определения строчных элементов документа.', teg_span_Araays);
// console.log(span);

// let input = new Teg('input', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем',
//     teg_input_Araays);
// console.log(input);

// let form = new Teg('form', 'Тег <form> устанавливает форму на веб-странице.Форма предназначена для обмена данными между пользователем и сервером',
//     teg_form_Araays);
// console.log(form);

// console.log('...');

// let select = new Teg('select', 'Тег <form> устанавливает форму на веб-странице.Форма предназначена для обмена данными между пользователем и сервером',
//     teg_select_Araays);
// console.log(select);



// ==============================================
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

// let car = {
//     model: 'Skoda',
//     producer: ' VW',
//     years: 2008,
//     maxSpead: 250,
//     power: '1985l',
//     drivers: {},
//     drive: function () {
//         console.log(`Їдемо зі швидкістю ${car.maxSpead}Km/h )))`);
//     },
//     info: function () {
//         console.log(this);
//     },
//     increaseMaxSpeed: function (newSpeed) {
//         this.maxSpead += newSpeed;
//         console.log(this.maxSpead);
//     },
//     changeYear: function (newValueYears) {
//         this.years = newValueYears;
//         console.log(this.years)

//     },
//     addDriver: function (driver) {
//         this.drivers = driver;
//         console.log(this.drivers);
//     }
// }

// car.drive();
// car.info();
// car.increaseMaxSpeed(50);
// car.drive();
// car.changeYear(2020);
// car.info();
// car.addDriver('Andre');




// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// function Car(model, producer, years, maxSpead, power, drivers = '') {

//     this.model = model;
//     this.producer = producer;
//     this.years = years;
//     this.maxSpead = maxSpead;
//     this.power = power;
//     this.drivers = drivers;

//     this.drive = function () {
//         console.log(`Їдемо зі швидкістю ${this.maxSpead} на годину )))`);
//     }
//     this.info = function () {
//         console.log(this);
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpead += newSpeed;
//         console.log(this.maxSpead);
//     }
//     this.changeYear = function (newValueYears) {
//         this.years = newValueYears;
//         console.log(this.years)
//     }
//     this.addDriver = function (driver) {
//         this.drivers = driver;
//         console.log(this.drivers);
//     }

// }

// let skoda = new Car('OCTAVIA A5', 'VW', 2008, 250, '1985L');
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(50);
// skoda.drive();
// skoda.changeYear(2020);
// skoda.info();
// skoda.addDriver('Andre');



// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================
// 
// class Car {
//     constructor(model, producer, years, maxSpead, power, drivers = '') {
//         this.model = model;
//         this.producer = producer;
//         this.years = years;
//         this.maxSpead = maxSpead;
//         this.power = power;
//         this.drivers = drivers;
//     }
//     drive() {
//         console.log(`Їдемо зі швидкістю ${this.maxSpead} на годину )))`);
//     }
//     info() {
//         console.log(this);
//     }
//     increaseMaxSpeed(newSpeed) {
//         this.maxSpead += newSpeed;
//     }
//     changeYear(newValueYears) {
//         this.years = newValueYears;
//         console.log(this.years)
//     }
//     addDriver(driver) {
//         this.drivers = driver;
//         console.log(this);
//     }

// }

// let skoda = new Car('OCTAVIA A5', 'VW', 2008, 250, '1985L');
// skoda.drive();
// skoda.info();
// skoda.increaseMaxSpeed(50);
// skoda.drive();
// skoda.changeYear(2020);
// skoda.info();
// skoda.addDriver('Andre');


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================

// class Cinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }
// let cinderellas = [];
// let mary = new Cinderella('Mary', 21, 33);
// cinderellas.push([mary])
// let anna = new Cinderella('Anna', 17, 35);
// cinderellas.push([anna])
// let jes = new Cinderella('Jes', 23, 38);
// cinderellas.push([jes])
// let oks = new Cinderella('Oksana', 20, 37);
// cinderellas.push([oks])
// let jesi = new Cinderella('Jesica', 19, 37);
// cinderellas.push([jesi])
// let katy = new Cinderella('Katy', 21, 36);
// cinderellas.push([katy])
// let marta = new Cinderella('Marta', 23, 39);
// cinderellas.push([marta])
// let alla = new Cinderella('Alla', 20, 39);
// cinderellas.push([alla])
// let vika = new Cinderella('Vika', 23, 37);
// cinderellas.push([vika])
// let tani = new Cinderella('Tani', 21, 39);
// cinderellas.push([tani])

// class Princ {
//     constructor(name, age, shoeSize,) {
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }
//     cinderellaSearch(cinderellas) {
//         for (const ciderel of cinderellas) {
//             if (this.shoeSize === ciderel[0].footSize) {
//                 console.log('Твоя попелюшка ' + ciderel[0].name)
//             }
//         }
//     }
// }

// let Arthur = new Princ('Arthur', '26', 38);
// Arthur.cinderellaSearch(cinderellas);



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================

// function Cinderella(name, age, footSize) {
//     this.name = name;
//     this.age = age;
//     this.footSize = footSize;
// }

// let cinderellas = [];
// let mary = new Cinderella('Mary', 21, 33);
// cinderellas.push([mary])
// let anna = new Cinderella('Anna', 17, 35);
// cinderellas.push([anna])
// let jes = new Cinderella('Jes', 23, 38);
// cinderellas.push([jes])
// let oks = new Cinderella('Oksana', 20, 37);
// cinderellas.push([oks])
// let jesi = new Cinderella('Jesica', 19, 37);
// cinderellas.push([jesi])
// let katy = new Cinderella('Katy', 21, 36);
// cinderellas.push([katy])
// let marta = new Cinderella('Marta', 23, 39);
// cinderellas.push([marta])
// let alla = new Cinderella('Alla', 20, 39);
// cinderellas.push([alla])
// let vika = new Cinderella('Vika', 23, 37);
// cinderellas.push([vika])
// let tani = new Cinderella('Tani', 21, 39);
// cinderellas.push([tani])

// function Princ(name, age, shoeSize,) {
//     this.name = name;
//     this.age = age;
//     this.shoeSize = shoeSize;

//     this.cinderellaSearch = function (cinderellas) {
//         for (const ciderel of cinderellas) {
//             if (this.shoeSize === ciderel[0].footSize) {
//                 console.log('Твоя попелюшка ' + ciderel[0].name)
//             }
//         }
//     }
// }

// let Arthur = new Princ('Arthur', '26', 38);
// Arthur.cinderellaSearch(cinderellas);
