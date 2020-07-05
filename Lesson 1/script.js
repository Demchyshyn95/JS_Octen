// 1.

// let value1 = 'hello';
// let value2 = 'owu';
// let value3 = 'com';
// let value4 = 'ua';
// let value5 = 1;
// let value6 = 10;
// let value7 = -999;
// let value8 = 123;
// let value9 = 3.14;
// let value10 = 2.7;
// let value11 = 16;
// let value12 = true;
// let value13 = false;
// console.log(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13);
// document.write(value1, ",", value2, ",", value3, ",", value4, ",", value5, ",", value6, ",", value7, ",", value8, ",", value9, ",", value10, ",", value11, ",", value12, ",", value13)
// alert(value1);
// alert(value2);
//...щоб усі не писати
// alert(value13);

// 2.

// value1 = 'world';
// value2 = 'course';
// value3 = 'org';
// value4 = 33;
// value5 = 23;
// value6 = 1.21;
// value7 = 99;
// value8 = 15
// value9 = 21;
// value10 = 2332;
// value11 = 8.22;
// value12 = false;
// value13 = true;
// console.log(value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12, value13);
// document.write('<br>')
// document.write(value1, ",", value2, ",", value3, ",", value4, ",", value5, ",", value6, ",", value7, ",", value8, ",", value9, ",", value10, ",", value11, ",", value12, ",", value13)

//3.

// let numb1 = 2;
// let numb2 = 3;
// let numb3 = 7;
// let string1 = 'Hello';
// let string2 = 'Hey';
// let string3 = 'Hi';
// console.log(numb1, numb2, numb3, string1, string2, string3);
// document.write('<br>')
// document.write(numb1, ",", numb2, ",", numb3, ",", string1, ",", string2, ",", string3);
// alert(numb3);
// alert(string3);

//4. 

// let name =prompt('What`s your name?');
// let surname =prompt('What`s your surname?');
// let lastName =prompt('What`s your lastName?');
// console.log(lastName, name, surname,);
// document.write('<br>');
// document.write(lastName, ",", name, ",", surname);
// alert(lastName + ' ' + name + ' ' + surname);

//5.
// const Person = lastName + ' ' + name + ' ' + surname;
// console.log('Person:' + Person);

//6.



//7.

// let num1 = prompt('number');
// let num2 = prompt('number');
// let num3 = prompt('number');
// console.log(num1,num2,num3);

//8.

// let num1 = parseInt(prompt('number1'));
// let num2 = parseInt(prompt('number2'));
// let num3 = parseInt(prompt('number3'));
// let num4 = parseInt(prompt('number4'));
// const result = num1 + num2 + num3 + num4;
// console.log(result);

//9. 

// let num1 = parseFloat(prompt('Enter number1'));
// let num2 = parseFloat(prompt('Enter number2'));
// let num3 = parseFloat(prompt('Enter number3'));
// const result = (num1 + num2 + num3);
// console.log(result);

//10.

// let num1 = Math.round(prompt('Enter number1'));
// let num2 = Math.round(prompt('Enter number2'));
// let num3 = Math.round(prompt('Enter number3'));
// const result = (num1 + num2 + num3);
// console.log(result);

//11.

// let a = +prompt('Enter number');
// let b = +prompt('Enter power')
// let result = Math.pow(a,b);
// console.log(result);

//12.

// let a = 100; 
// let b = '100';
// let c = true;
// let d = undefined;
// console.log(typeof(a),typeof(b),typeof(c),typeof(d));

//13.

// 5 < 6 -> true
// 5 > 6 -> false
// 5 >= 6 -> false
// 5 == 6 -> false
// 10 == 10 -> true
// 10 === 10 -> true
// 10 >= 10 -> false
// 10 != 10 -> false
// 10 !== 10 -> false
// 123 === '123' -> false
// 123 == '123' -> true


/// Class

//1.
// let str = 'Привет';
// let num = 123;
// let flag = true;
// let txt = true;
// console.log(typeof(str),typeof(num),typeof(flag),typeof(txt));

// 2.

// let a1 = 5 + 3;
// let a2 = 5 - 3;
// let a3 = 5 * 3;
// let a4 = 5 / 3;
// let a5 = 5 % 3;
// console.log(a1,a2,a3,a4,a5)

// 3.

// let a6 = 5 % 3;
// let a7 = 3 % 5;
// let a8 = 5 + '3';
// let a9 = '5' - 3;
// let a10 = 75 + 'кг';
// console.log(a6,a7,a8,a9,a10)


// Додаткове 3.

let trafficLights = prompt('Enter color traffic lights');
let isRoadClear = confirm('isRoadClear?');

if (trafficLights === 'green' && isRoadClear === true) {
    alert('ІДИ!!!!')
}
else if (trafficLights === 'green' && isRoadClear === false) {
    alert('подожди пока нарушители проедут')
}
else if (trafficLights === 'yellow' && isRoadClear === false) {
    alert('Жди!!!!')
}
else if (trafficLights === 'yellow' && isRoadClear === true) {
    alert('все рано жди!!!!')
}
else if (trafficLights === 'red' && isRoadClear === true) {
    alert('стой и жди!!!!')
}
else if (trafficLights === 'red' && isRoadClear === false) {
    alert('стой все рано!!!!')

}
else {
    alert('делай что хочешь')
}













