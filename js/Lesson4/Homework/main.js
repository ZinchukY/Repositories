// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function s(a, b){
//     sRectangle = a * b;
//     return sRectangle;
// }console.log(s(20, 40))


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function s(r) {
//     Pi = 3.14;
//     sCircle = Pi * Math.pow(r, 2);
//     return sCircle;
// }console.log(s(4))


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(r, h) {
//     Pi = 3.14;
//     sCylindre = 2 * Pi * r * h;
//     return sCylindre;
// }console.log(s(5,7))


// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [25, 256, 79650, 7876, 34567, 965, 'ghjk'];
// function array(arr) {
//     for (i = 0; i < arr.length; i++){
//         console.log(arr[i])
//     }
// }array(arr)


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function p(txt) {
//     for (let i = 0; i<=50; i++){
//         document.write(`<p>${i} - ${txt}</p>`)
//     }
// }p('GHJKL GHJKLK')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function uLi(arg) {
//     document.write(`<ul>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`<li>${arg}</li>`)
//     document.write(`</ul>`)
// }uLi(`random txt`)


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function uLi(arg, li) {
//     document.write(`<ul>`)
//     for (i=0; i < li; i++){
//         document.write(`<li>${arg}</li>`)
//     }
//     document.write(`</ul>`)
// }uLi(`random txt`, 5)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [2022, "year", false, 44, "car", "today", 539, true]
// function list(array) {
//     document.write(`<ol>`)
//     for (i=0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`)
//     }
//     document.write(`</ol>`)
// }list(array)


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array = [{ id : 1, name : 'Yurii', age : 20}, { id : 2, name : 'Bogdan', age : 30}, { id : 3, name : 'Sergiy', age: 34} ];
// function objArray(array) {
//     for (const arrElem of array){
//         document.write(`<div>${arrElem.id} ${arrElem.name} ${arrElem.age}</div>`)
//     }
// }objArray(array)