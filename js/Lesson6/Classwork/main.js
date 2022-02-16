// //Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'

// //Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// //let n1 = 'Harry Potter'
// //let n2 = 'Ron Whisley'
// //let n3 = 'Hermione Granger'

// let normal = (str, symbol) =>{
//     let newArr = [];
//     if (str.includes(symbol)){
//         let a = str.split(symbol)
//         a.forEach((item) =>{
//             if (item) newArr.push(item);
//         })
//         console.log(newArr.join(' '))
//     }
// };
// normal(n1,'.')
// normal(n2, '-')
// normal(n3, '_')


// //створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// let generateRandomNumber = (length, number) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++){
//         emptyArr.push(Math.floor(Math.random() * number));
//     }
//     return emptyArr;
// }
// document.write(generateRandomNumber(15, 100))


// //створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// let generateRandomNumber = (length, number) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++){
//         emptyArr.push(Math.floor(Math.random() * number));
//     }
//     return emptyArr.sort((a, b) => a - b);
// }
// document.write(generateRandomNumber(15, 100))


// //створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// let generateRandomNumber = (length, number) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++){
//         emptyArr.push(Math.floor(Math.random() * number));
//     }
//     return emptyArr.filter(value => value % 2 === 0);
// }
// document.write(generateRandomNumber(15, 100))


// //- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let generateRandomNumber = (length, number) => {
//     let emptyArr = [];
//     for (let i = 0; i < length; i++){
//         emptyArr.push(Math.floor(Math.random() * number));
//     }
//     return emptyArr.map(value => value.toString());
// }
// document.write(generateRandomNumber(15, 100))


// //створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3, 56, 42, 89];
// let sortNums = (arr, direction) =>{
//     if (direction === 'ascending') return arr.sort((a, b) => a - b);
//     if (direction === 'descending') return arr.sort((a, b) => b - a);
// }
// console.log(sortNums(nums, 'ascending'))
// console.log(sortNums(nums, 'descending'))


// //є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// //відсортувати його за спаданням за monthDuration
// let descending = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(descending);


// //відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let filter = coursesAndDurationArray.filter((value) => (value.monthDuration > 5))
// console.log(filter);