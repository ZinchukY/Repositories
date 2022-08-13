// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function count(a,b){
//     return a*b;
// }
//
// console.log(count(40, 80));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let Pi = 3.14;
// function s(Pi, r){
//     return Pi * Math.pow(r, 2);
// }
// console.log(s(Pi, 10));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function s(h, r){
//     return 2 * 3.14 * r * (r + h);
// }
// console.log(s(4, 8))

// - створити функцію яка приймає масив та виводить кожен його елемент
// let array = ['car', true, 44, 2]
// function foo(arr){
//     console.log(arr);
// }
// foo(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// function foo(txt){
//     document.write(`<p>${txt}</p>`);
// }
// foo('txt');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// function foo(txt){
//     document.write(`<ul><li>${txt}</li><li>${txt}</li><li>${txt}</li></ul>`);
// }
// foo('txt');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function foo(txt, number){
//     document.write(`<ul>`)
//     for (let i = 0; i < number; i++){
//         document.write(`<li>${txt}</li>`)
//     }
//     document.write(`</ul>`)
// }
// foo('txt', 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let array = [4, 'me', true];
// function foo(arr){
//     document.write(`<ul>`);
//     for (const arrElem of arr){
//         document.write(`<li>${arrElem}</li>`);
//     }
//     document.write(`</ul>`);
// }
// foo(array)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let array =  [
//     {
//         id: 1,
//         name: 'Valeriy',
//         age: 44
//     },
//     {
//         id: 2,
//         name: 'Andriy',
//         age: 35
//     },
//     {
//         id: 3,
//         name: 'Dima',
//         age: 24
//     },
//     {
//         id: 4,
//         name: 'Danik',
//         age: 27
//     }
// ]
// function foo(arr){
//     for (const arrElem of arr){
//         document.write(`<div>${arrElem.id}__${arrElem.name}__ ${arrElem.age}</div>`)
//     }
// }
// foo(array)

// - створити функцію яка повертає найменьше число з масиву
// let array = [15, 8, 22, 19, 5];
// function foo(arr){
//     let min = arr[0];
//     for (const minElem of arr){
//         if (minElem < min){
//             min = minElem;
//         }
//     }
//     return min;
// }
// console.log(foo(array));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let array = [33, 22, 11, 34];
// function foo(arr){
//     let sum = 0;
//     for (const arrElem of arr){
//         sum += arrElem;
//     }
//     return sum;
// }
// console.log(foo(array));