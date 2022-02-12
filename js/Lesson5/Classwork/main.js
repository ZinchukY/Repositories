// //створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// const min = (num1, num2, num3) =>{
//     if (num1 < num2 && num1 < num3){
//         console.log(num1);
//     }else if (num2 < num1 && num2 < num3){
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// };
// min(300, 200, 100);


// //створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// const max = (num1, num2, num3) => {
//     if (num1 > num2 && num1 > num3){
//         console.log(num1);
//     }else if (num2 > num1 && num2 > num3){
//         console.log(num2);
//     }else {
//         console.log(num3);
//     }
// };
// max(300, 200, 100)


// //створити функцію яка повертає найбільше число з масиву
// let array = [50, 90, 200, 600, 400, 300, 967, 553];
// const maxArrNumber = (arr) =>{
//     let number = arr[0]
//     for (const arrElem of arr){
//         if (arrElem >number){
//             number = arrElem;
//         }
//     }
//     return number;
// }
// console.log(maxArrNumber(array))


// //створити функцію яка повертає найменьше число з масиву
// let array = [50, 90, 200, 600, 40, 300, 967, 553];
// const minArrNumber = (arr) =>{
//     let number = arr[0]
//     for (const arrElem of arr){
//         if (arrElem < number){
//             number = arrElem;
//         }
//     }
//     return number;
// }
// console.log(minArrNumber(array))


// //створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let sumArray = [23, 34, 58]
// const sumElem = (array) =>{
//     let sum =0;
//     for (const arrayElement of array){
//         sum = arrayElement + sum;
//     }
//     return sum;
// }
// document.write(sumElem(sumArray))


// //створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [28, 32, 60]
//
// const midArr = (array) =>{
//     let sum = 0;
//     for (const arrElem of array){
//         sum = arrElem + sum;
//     }
//     return sum/array.length;
// }
// document.write(midArr(arr))


// //створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// const minMax = (...arg) => {
//     let min = arg[0];
//     let max = arg[0];
//     for (const elem of arg){
//         if (elem > max){
//             max = elem;
//         }
//         if (elem < min){
//             min = elem;
//         }
//     }
//     console.log("max", max)
//     return min;
// }
// document.write(minMax(90, 975, 30, 347, 22, 764))


// //створити функцію яка заповнює масив рандомними числами
// const randomArr = (length) =>{
//     let arrEmpty = [];
//     for (let i=0; i < length; i++){
//         arrEmpty.push(Math.round(Math.random()*100))
//     }
//     return arrEmpty;
// };
// document.write(randomArr(10))


// //створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// const randomArr = (length, limit) =>{
//     let arrEmpty = [];
//     for (let i = 0; i < length; i++){
//         arrEmpty.push(Math.round(Math.random()*limit))
//     }
//     return arrEmpty
// }
// document.write(randomArr(10, 200))


// //Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let array = [54, 76, 240, 876]
// const revrse = (arr) =>{
//     let newArr = [];
//     for (let i =arr.length-1, ri = 0; i >= 0; i--, ri++){
//         newArr[ri] = arr[i];
//     }
//     return newArr;
// }
// console.log(revrse(array))