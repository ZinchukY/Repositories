//- створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].


// function calc(a, b, c){
//     if (a<b && b<c){
//         return a;
//     }else if(b<a && b<c){
//         return b;
//     }else{
//         return c;
//     }
// }console.log(calc(30, 40, 20));


// function calc1(a, b, c){
//     if (a>b && a>c){
//         return a;
//     }else if (b>a && b>c){
//         return b;
//     }else {
//         return c;
//     }
// }console.log(calc1(90, 50, 60))


// let maxArray = [200,3,4,5,6,-10,40000,3,600]
// function arrayMax(array) {
//     let max = array[0];
//     for (const element of array) {
//         if(element > max){
//             max = element;
//         }
//     }
//     return max;
// }
// document.write(`<h2>Найбільший елемент масиву: ${arrayMax(maxArray)}</h2>`)


// let minArray = [200,3,4,5,6,-10,40000,3,600]
// function arrayMin(array) {
//     let min = array[0];
//     for (const element of array) {
//         if(element < min){
//             min = element;
//         }
//     }
//     return min;
// }
// document.write(`<h2>Найменший елемент масиву: ${arrayMin(minArray)}</h2>`)


// let arr = [44, 4, 2, 22]
// function arraySum(array){
//     let arrNumbers = 0;
//     for (const arrElem of array){
//         arrNumbers = arrElem + arrNumbers;
//     }
//     return arrNumbers;
// }console.log(arraySum(arr))


// let arr = [44, 4, 2, 22]
// function midSum(array){
//     let arrayNumbers = 0;
//     for (const arrayElem of array){
//         arrayNumbers = (arrayElem + arrayNumbers);
//     }
//     return arrayNumbers/arr.length;
// }console.log(midSum(arr))


// function minMax(arg) {
//     let min = arguments[0];
//     let max = arguments[0];
//     for (const element of arguments) {
//         if (element > max) {
//             max = element;
//         }
//         if (element < min) {
//             min = element;
//         }
//     }
//     console.log("max ", max);
//     return min;
// }
// document.write('Мінімальне число з введених: ' + minMax(100, 20, 3, 100, 2021))


// function randomPush(length) {
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.floor(Math.random()*100));
//     }
//     return arr;
// }document.write(randomPush(15))


// function randomPush(limit, length){
//     let arr = [];
//     for (let i = 0; i < length; i++){
//         arr.push(Math.round(Math.random() * limit ));
//     }
//     return arr;
// }document.write(randomPush(15, 50))


function reverse(arr) {
    let arr = [];
    for (let i = arr.length - 1, ri = 0; i >= 0; i--, ri++) {
        newArr[ri] = newArr[i];
    }

    return newArr;
}console.log(reverse())