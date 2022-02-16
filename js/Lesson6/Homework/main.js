// //- Знайти та вивести довижину настипних стрінгових значень
// let word1 = "hello world";
// console.log(word1.length)
//
// let word2 = "lorem ipsum";
// console.log(word2.length)
//
// let word3 = "javascript is cool";
// console.log(word3.length)


// //Перевести до великого регістру наступні стрінгові значення
// let word1 = "hello world";
// let word2 = "lorem ipsum";
// let word3 = "javascript is cool";
//
// console.log(word1.toUpperCase())
// console.log(word2.toUpperCase())
// console.log(word3.toUpperCase())


// //Перевести до нижнього регістру настипні стрінгові значення
// let word1 = "HELLO WORLD";
// let word2 = "LOREM IPSUM";
// let word3 = "JAVASCRIPT IS COOL";
//
// console.log(word1.toLowerCase())
// console.log(word2.toLowerCase())
// console.log(word3.toLowerCase())


// //Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів
// let str = ' dirty string   '
// let trim = str.trim();
// console.log(trim)
// console.log(trim.length)


// //Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let stringToarray = (string) => {
//     string = string.split()
//     return string;
// }
// let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr);
// console.log(arr)


// //Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
// let delete_characters = (str, length) =>{
//     return str.substring(0, length);
// }
// let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7));


// //Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
// let insert_dash = (str) =>{
//     let splitUpperJoin = str.split(' ').join('-').toUpperCase();
//     return splitUpperJoin;
// }
// let string = "HTML JavaScript PHP";
// document.write(insert_dash(string)); // 'HTML-JAVASCRIPT-PHP'


// //Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// let firstUp = (str) => {
//     if (!str) return str;
//     return str [0].toUpperCase() + str.slice(1)
// };
// document.write(firstUp('hello world'))


// //Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let capitalize = (str) => {
//     return str.split(' ').map(word =>word.charAt(0).toUpperCase()+word.slice(1)).join(' ');
// };
// document.write(capitalize('hi welcome to ukraine'))