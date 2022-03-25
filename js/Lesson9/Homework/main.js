// //створити блок
// let div = document.createElement('div')
// // //додати йому класи wrap, collapse, alpha, beta
// div.classList.add('wrap');
// div.classList.add('collapse');
// div.classList.add('alpha');
// div.classList.add('beta');
// // //додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// div.style.backgroundColor = 'red';
// div.style.color = 'blue';
// div.style.fontSize = '30px'
// // //додати цей блок в body.
// document.body.appendChild(div)
// // //клонувати його повністю, та додати клон в body.
// document.body.appendChild(div.cloneNode(true))

// //Є масив:
// //Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// //Завдання робити через цикли.
// let arr = ['Main','Products','About us', 'Contacts'];
// let arrItems = document.getElementsByClassName('menu')[0];
//
// for (const elem of arr){
//     let li = document.createElement('li')
//     li.innerText = elem;
//     arrItems.appendChild(li)
// }

// //Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// // //Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// // //Завдання робити через цикли.
// for (let course of coursesAndDurationArray){
//     let divElem = document.createElement('div');
//     divElem.innerText = `${course.title} ${course.monthDuration}`;
//     document.body.appendChild(divElem);
// }

// //- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// // За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
// //     Завдання робити через цикли.
for (const course of coursesAndDurationArray){
    let divElem = document.createElement('div');

    let h1Elem = document.createElement('h1');
    h1Elem.innerText = course.title;

    let pElem = document.createElement('p');
    pElem.innerText = course.monthDuration;

    divElem.appendChild(h1Elem);
    divElem.appendChild(pElem);
    document.body.appendChild(divElem)
}