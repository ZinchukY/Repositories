// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

let url = new URL(location.href);
let user = JSON.parse(url.searchParams.get('data'));
console.log(user);

let userDetailsContainer = document.getElementsByClassName('user-details')[0];
let postsContainer = document.getElementsByClassName('posts')[0];

let postsDetailsButton = document.getElementsByClassName('postsDetailsButton')[0];
userDetailsContainer.innerText = `${JSON.stringify(user)}`;

postsDetailsButton.onclick = function () {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
        .then(value => value.json())
        .then(value => {
            for (const postItem of value) {
                let postContainer = document.createElement('div');
                postContainer.classList.add('post')
                postContainer.innerText = postItem.title;
                let postDetailsButton = document.createElement('button')
                postDetailsButton.innerText = 'post details';
                postDetailsButton.onclick = function () {
                    location.href = `post-details.html`
                }

                postContainer.appendChild(postDetailsButton);
                postsContainer.appendChild(postContainer);

            }
        });
};

userDetailsContainer.appendChild(postsButton);