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