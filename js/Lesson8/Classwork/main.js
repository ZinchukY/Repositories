// //1) Напишіть код, який :
// //    a) додає клас з назвою групи, елементу з ід main_header
// let main_header = document.getElementById('main_header');
// main_header.innerText = 'Dec-2021'
//
// //робить шириниу елементу ul 400px
// let ul = document.getElementsByTagName('ul')
// console.log(ul)
// ul[0].style.width = '400px';
// ul[0].style.border = '1px solid red'
//
// //робить шириниу всіх елементів з класом linkList шириною 50%
// let li = document.getElementsByClassName('linkList');
// for (const liElem of li){
//     liElem.style.border = '1px solid red'
//     liElem.style.width = '50%';
// }
//
// //отримує текст який зберігається в елементі з класом listElement2
// let liText = document.getElementsByClassName('listElement2');
// console.log(liText);
// liText[0].innerHTML = '<a href=""><b>New txt</b></a>';
//
// //отримує всі елементи li та змінює ім колір фону на сірий
// liAll = document.getElementsByTagName('li')
// console.log(liAll)
// for (const liAllElem of liAll){
//     liAllElem.style.backgroundColor = 'grey'
// }
//
// //отримує всі елементи 'a' та додає їм клас anchor
// let allA = document.getElementsByTagName('a')
// console.log(allA);
// for (let allElem of allA){
//     allElem.classList.add('anchor')
//     console.log(allElem)
// }
//
// //отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let allA = document.getElementsByTagName('a')
// console.log(allA)
// for (let allElem of allA){
//     console.log(allElem)
//     if (allElem === 'link3'){
//         allElem.style.fontSize = '40px';
//     }
// }
//
// //отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let allA = document.getElementsByTagName('a')
// console.log(allA);
// for (let allElem of allA) {
//     console.log(allElem);
//     let newClass = allElem.innerText
//     allElem.classList.add(`element_${newClass}`)
// }
//
// //отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let allSubHeader = document.getElementsByClassName('sub-header');
// console.log(allSubHeader);
// for (let elem of allSubHeader){
//     elem.style.backgroundColor = prompt('Enter color: ');
// }
//
// //отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// let allSubHeader = document.getElementsByClassName('sub-header')
// for (const elem of allSubHeader){
//     console.log(elem);
//     if (elem.innerText === 'content 2 segment'){
//         elem.style.color = prompt('Enter color: ');
//     }
// }
//
// //отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let cntnt_1 = document.getElementsByClassName('content_1')
// console.log(cntnt_1[0].innerText);
// cntnt_1[0].innerText = prompt('Enter new txt: ')
//
// //отримати елементи p та змінити їм padding на 20px
// let allP = document.getElementsByTagName('p')
// for(const elem of allP){
//     elem.style.padding = '20px'
//     elem.style.border = '1px solid red'
// }
//
// //отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// let txt2 = document.getElementsByClassName('text2')
// console.log(txt2);
// txt2[0].innerText = 'dec-2021';