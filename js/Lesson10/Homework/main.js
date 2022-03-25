// //Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text"
document.getElementById('button').onclick = function () {
    document.getElementById('text').hidden = true;
}

// //Создайте кнопку, при клике на которую, она будет скрывать сама себя
document.getElementById('hide').onclick = function () {
    document.getElementById('hide').hidden = true;
}

// //створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
document.getElementById('button1').onclick = function (){
    let age = document.getElementById('age').value;
    if (!age){
        alert('Ви нічого не ввели')
    }else if(age < 18){
        alert('Ви ще не досягли потрібного віку')
    }else {
        alert('Welcome To The Party')
    }
}

// //Создайте меню, которое раскрывается/сворачивается при клике
let menuElem = document.querySelector('.menu');
let titeElem = menuElem.querySelector('.title');

titeElem.onclick = function (){
    menuElem.classList.toggle('hidden');
};

// //- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //    Вывести список комментариев в документ, каждый в своем блоке.
// //    Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {name: 'Максим', body: 'Вчи English'},
    {name: 'Іван', body: 'Досить сидіти, вже пізно'},
    {name: 'Льоня', body: 'Зупка, стине, ходи додому'},
    {name: 'Іра', body: 'Воно, тобі треба?'},
];

let divFather = document.createElement('div');
for (const item of comments){
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let p = document.createElement('p')
    let btn = document.createElement('button')
    let hr = document.createElement('hr')

    h2.innerText = item.name;
    p.innerHTML = item.body;
    btn.innerHTML = 'Close me';

    btn.onclick = () => {
        p.classList.add('Hidden');
    }
    div.append(h2, p, btn);
    divFather.append(div, hr);
}
document.body.appendChild(divFather)