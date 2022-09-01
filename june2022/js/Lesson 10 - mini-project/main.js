// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

let usersContainer = document.getElementsByClassName('users')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {
        for (const userItem of value) {
            let userContainer = document.createElement('div');
            userContainer.classList.add('user');
            let anchor = document.createElement('a');
            anchor.innerText = `${userItem.id} - ${userItem.name}`;
            anchor.href = `./user-details.html?data=${JSON.stringify(userItem)}`;
            userContainer.appendChild(anchor);
            usersContainer.appendChild(userContainer);
        }
    })