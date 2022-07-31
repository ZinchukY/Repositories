// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write

let h = 'hello';
let o = 'owu';
let com = 'com';
let u = 'ua';
let f = '1';
let t = '10';
let m = '-999';
let ft = '123';
let pi = '3.14'
let ts = '2.7';
let s = '16';
let tr = 'true';
let fl = 'false';

console.log(h);
console.log(o);
console.log(com);
console.log(u);
console.log(f);
console.log(t);
console.log(m);
console.log(ft);
console.log(pi);
console.log(ts);
console.log(s);
console.log(tr);
console.log(fl);

// alert(h);
// alert(o);
// alert(com);
// alert(u);
// alert(f);
// alert(t);
// alert(m);
// alert(ft);
// alert(pi);
// alert(ts);
// alert(s);
// alert(tr);
// alert(fl);

document.write(`${h} ${o} ${com} ${u} ${f} ${t} ${m} ${ft} ${pi} ${ts} ${s} ${tr} ${fl}`);

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
// let firstName = 'Zinchuk';
// let middleName = 'Yurii';
// let lastName = 'Romanovich';
// // let person = `${firstName} ${middleName} ${lastName}`;
// let person = firstName+' '+middleName+' '+lastName;
// console.log(person)


// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;

let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль

let Name = prompt('Enter Name')
let middleName = prompt('Enter middleName')
let lastName = prompt('Enter lastName')
console.log(Name);
console.log(middleName);
console.log(lastName);