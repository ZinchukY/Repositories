//створити функцію яка обчислює та повертає площу прямокутника
// const sRectangle = (a, b) => {
//     return  a * b;
// }
// console.log(sRectangle(4, 6))


//створити функцію яка обчислює та повертає площу кола
// const sCircle = (r) => {
//     return 3.14 * (r**2)
// }
// console.log(sCircle(4))


//- створити функцію яка обчислює та повертає площу циліндру
// const sCylinder = (r, h) => {
//     return 2 * 3.14 * h * r;
// }
// console.log(sCylinder(4, 6))


//створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [67, 678, 567, "day", "me"];
// const arrBack =(arr) => {
//     for (let i = 0; i < arr.length; i++){
//         document.write(arr[i])
//     }
// }
// arrBack(arr);


//створити функцію яка  створює параграф з текстом. Текст задати через аргумент
// const createP = (txt) =>{
//     document.write(`<p>${txt}</p>`)
//     document.write(`<p>${txt}</p>`)
//     document.write(`<p>${txt}</p>`)
// }
// createP(`hello`)


//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// const createUl = (uLi) =>{
//     document.write(`<ul>`)
//     document.write(`<li>${uLi}</li>`)
//     document.write(`<li>${uLi}</li>`)
//     document.write(`<li>${uLi}</li>`)
//     document.write(`</ul>`)
//
// }
// createUl(`Random txt`)


//створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// const createUl = (uLi, number) =>{
//     document.write(`<ul>`)
//     for (let i =0; i<number; i++){
//         document.write(`<li>${uLi}</li>`)
//     }
//     document.write(`</ul>`)
// }
// createUl(`random txt`, 5)


//створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let combineArr = [true, 2022, "kivi", "amd", 44, false, "me"];
//
// const combine = (array) => {
//     document.write(`<ol>`)
//     for (let i =0; i < array.length; i++){
//         document.write(`<li>${array[i]}</li>`);
//     }
//     document.write(`</ol>`)
// }
// combine(combineArr);


// створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let infoArray = [{id : 1, name : 'Ivan', age : 28}, {id : 2, name: 'Kevin', age: 31}, {id : 3, name: 'Georgiy', age: 40}];
//
// const objArray = (array) => {
//     for (const arrElem of array){
//         document.write(`<div>${arrElem.id}  ${arrElem.name}  ${arrElem.age}</div>`)
//     }
// }
// objArray(infoArray)