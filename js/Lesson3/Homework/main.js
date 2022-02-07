//1
//--створити масив з:
//   - з 5 числових значень
// let numbers = [10, 31, 45, 67, 82]
//- з 5 стічкових значень
// let str = ['blabla', 'simpsons', 'okten', 'js', 'intelij']
//- з 5 значень стрічкового, числового та булевого типу
// let combine = ['okten', 'js', 20, true, false]
//- та вивести його в консоль
// console.log(numbers);
// console.log(str);
// console.log(combine);


//2
//Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr = []
// arr [0] = false;
// arr [1] = 2002;
// arr [2] = true;
// arr [3] = 'lesson3'
// arr [4] = 'good mood'
// console.log(arr);


//3
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// for (let i = 0; i <= 10; i++){
//     document.write(`<div>STAY HOME</div>`)
// }

// for (let i = 0; i <= 10; i++){
//     document.write(`<div>ABRACADABRA index</div>`)
// }

// let i =0;
// while (i<=20){
//     document.write(`<h1>Text</h1>`)
//     i++
// }

// let i = 0;
// while (i<=20){
//     document.write(`<h1>NEW TEXT index</h1>`)
//     i++
// }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let array = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99]
// for (part of array){
//     console.log(part)
// }

// let array = ['weather', 'ide', 'Ukraine', 'for', 'array', 'while', 'do', 'Lviv', 'js', 'okten']
// for (part of array){
//     console.log(part)
// }

// let array = [false, 2022, 'vibe', true, 56, 'change', 97, 34, 'day', 'time']
// for (part of array){
//     console.log(part)
// }

// let array = [false, 2022, 'vibe', true, 56, 'change', 97, 34, 'day', 'time']
// for (let i = 0; i<array.length; i++){
//     if (typeof array[i] === "boolean"){
//         console.log(array[i])
//     }
// }

// let array = [false, 2022, 'vibe', true, 56, 'change', 97, 34, 'day', 'time']
// for (let i = 0; i<array.length; i++){
//     if (typeof array[i] === "number"){
//         console.log(array[i])
//     }
// }

// let array = [false, 2022, 'vibe', true, 56, 'change', 97, 34, 'day', 'time']
// for (let i = 0; i<array.length; i++){
//     if (typeof array[i] === "string"){
//         console.log(array[i])
//     }
// }

let lastArray =[]
lastArray[0] = 'Monday';
lastArray[1] = true;
lastArray[2] = 4;
lastArray[3] = false;
lastArray[4] = 'English';
lastArray[5] = 119;
lastArray[6] = 328;
lastArray[7] = 'Home';
lastArray[8] = 'Week';
lastArray[9] = 444;


// console.log(lastArray)

// for (let i = 0; i<10; i++){
//     console.log('поточний крок циклу : ' + i + ' ')
//     document.write('поточний крок циклу : ' + i + ' ')
// }

// for (let i = 0; i<100; i++){
//     console.log('поточний крок циклу : ' + i + ' ')
//     document.write('поточний крок циклу : ' + i + ' ')
// }

// for (let i = 0; i<100; i+=2){
//     console.log('поточний крок циклу : ' + i + ' ')
//     document.write('поточний крок циклу : ' + i + ' ')
// }

// for (let i = 0; i<100; i++){
//     if (i % 2 === 0){
//         console.log('поточний крок циклу : ' + i + ' ')
//         document.write('поточний крок циклу : ' + i + ' ')
//     }
// }

// for (let i = 0; i<100; i++){
//     if (i % 2 !== 0){
//         console.log('поточний крок циклу : ' + i + ' ')
//         document.write('поточний крок циклу : ' + i + ' ')
//     }
// }