//1
// let number1 = parseInt(prompt('Your number 1? '))
// let number2= parseInt(prompt('Your number 2? '))
//
// if (number1>number2) {
//     console.log(number1);
// }else if (number2 > number1) {
//     console.log(number2)
// }else if (number1===number2) {
//     console.log('draw')
// }


//2
// let numberEntrance = parseInt(prompt('Введіть номер квартири'));
// if (numberEntrance > 0 && numberEntrance <= 20) {
//     console.log('Вказана квартира знаходиться у 1 підїзді')
// } else if (numberEntrance >= 21 && numberEntrance <= 48) {
//     console.log('Вказана квартира знаходиться у 2 підїзді')
// } else if (numberEntrance >= 49 && numberEntrance <= 90) {
//     console.log('Вказана квартира знаходиться у 3 підїзді')
// }


//3
// let number = parseInt(prompt('Your number? '));
//
// if (number === 10){
//     console.log('ВІРНО!!!')
// }else{
//     console.log('НЕВІРНО!!!')
// }


//4
// let writeData = prompt('Введіть щось: ');
// if (typeof writeData === 'number') {
//     document.write('це число')
// } else if (typeof writeData === "string") {
//     document.write('це текст')
// } else if (typeof writeData === "object") {
//     document.write('це обєкт')
// } else if (typeof writeData === "boolean") {
//     document.write('це булеве значення')
// } else {
//     document.write('Взагалі не зрозуміло що ви ввели')
// }


//5
// let temp = parseInt(prompt('Яка сьогодні температура? '));
// if (temp >=10 && temp <=22){
//     alert('ЙДЕМО ВЧИТИСЯ !!!')
// } else {
//     alert('СИДИМО ВДОМА І ВЧИМОСЯ ОНЛАЙН !!!')
// }


//6
// let game = parseInt(prompt('Введіть ваше щасливе число від 1 до 5: '))
//
// switch (game){
//
//     case 1:
//         alert('ВИ ВИГРАЛИ АВТОМОБІЛЬ!!!');
//         break;
//
//     case 2:
//         alert('ВИ ВИГРАЛИ МОТОЦИКЛ!!!')
//         break;
//
//     case 3:
//         alert('ВИ ВИГРАЛИ ТЕЛЕФОН!!!')
//         break;
//
//     case 4:
//         alert('ВИ ВИГРАЛИ СМАРТ-ГОДИННИК!!!')
//         break;
//
//     case 5:
//         alert('ВИ ВИГРАЛИ КЛАВІАТУРУ!!!')
//         break;
//
//     default:
//         alert('ВИ ПОГАНО ОЗНАЙОМИЛИСЬ З ПРАВИЛАМИ ГРИ ОЗНАЙОМТЕСЬ З НИМИ ЩЕ РАЗ!!!')
//         break;
// }