// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }

// let array = [];
// let user1 = new User(34, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user2 = new User(25, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user3 = new User(67, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user4 = new User(88, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user5 = new User(29, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user6 = new User(15, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user7 = new User(6, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user8 = new User(95, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user9 = new User(72, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// let user10 = new User(47, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754);
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// console.log(array);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let filter = array.filter(value => value.id % 2 === 0);
// console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sort = array.sort(function (a, b) {
//     return a.id - b.id;
// });
// console.log(sort)

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// class User{
//     constructor(id, name, surname , email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
// }
//
// let array = [];
// let user1 = new User(34, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [26, 'spray', 128]);
// let user2 = new User(25, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [36, 'light']);
// let user3 = new User(67, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [48, 'carpet', 153, 242]);
// let user4 = new User(88, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [15, 'mask', 345, 482, 521]);
// let user5 = new User(29, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [876, 'hamburger', 789, 533, 175]);
// let user6 = new User(15, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [324, 'phone', 147, 743, 567, 678]);
// let user7 = new User(6, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [655, 'garlic', 21]);
// let user8 = new User(95, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [6, 'headphones', 827, 23]);
// let user9 = new User(72, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [97, 'candy', 145, 975, 365]);
// let user10 = new User(47, 'Andriy', 'Blabla', 'andriy@gmail.com', 380976462754, [787, 'beer', 999, 467, 386, 875]);
//
// array.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);
// let sort = array.sort((a, b) => a.order.length - b.order.length);
// console.log(sort);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// function Car(model, manufacturer, year, maxSpeed, engineSize){
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.engineSize = engineSize;
//
//     this.drive = function (){
//     console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this){
//             if (typeof this[item] !== 'function'){
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     }
//
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     }
//
// }
// let car = new Car ('Peugeot', 'France', '2007', 160, '2.0');
// // console.log(car);
// // car.drive();
// // car.info();
// car.increaseMaxSpeed(50);
// console.log(car);
// car.addDriver({name: 'Andriy', surname:'Tkach', age: 36});


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Car{
//     constructor(model, producer, year, maxSpeed, engineSize) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engineSize = engineSize;
//     }
//
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     }
//
//     info(){
//         for (const item in this){
//             if (typeof this[item] !== 'function'){
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     increaseMaxSpeed(newSpeed){
//         this.maxSpeed += newSpeed;
//     }
//
//     addDriver(driver){
//         this.driver = driver;
//     }
// }
//
// let car = new Car ('Peugeot', 'France', '2007', 160, '2.0');
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(88);
// car.addDriver({name: 'Oleksiy', surname:'Golubenko', age:26});
// console.log(car);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Popelushka{
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let popelushka1 = new Popelushka('Nastya', 24, 35);
let popelushka2 = new Popelushka('Ivanka', 23, 34);
let popelushka3 = new Popelushka('Yulya', 26, 38);
let popelushka4 = new Popelushka('Veronika', 21, 36);
let popelushka5 = new Popelushka('Iryna', 25, 37);
let popelushka6 = new Popelushka('Olena', 27, 39);

let array = [popelushka1, popelushka2, popelushka3, popelushka4, popelushka5, popelushka6];

class Prince extends Popelushka{
    constructor(name, age, findFootSize) {
        super(name, age);
        this.findFootSize = findFootSize;
    }
}

let prince = new Prince('Vlad', 29, 38);

let find = (array, prince ) =>{
    for (const item of array){
        if (prince.findFootSize === item.footSize){
            return `Popelushka is ${item.name}`
        }
    }
}
console.log(find(array, prince));

let popelushka = array.find(value => prince.findFootSize === value.footSize);
console.log(popelushka);
