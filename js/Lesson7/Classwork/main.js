// // Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //  -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //  -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //  -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //  -- changeYear (newValue) - змінює рік випуску на значення newValue
// //  -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Cars(model, manufacturer, year, max_speed, engine_size) {
//     this.model = model;
//     this.manufacturer = manufacturer;
//     this.year = year;
//     this.max_speed = max_speed;
//     this.engine_size = engine_size;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     };
//     this.info = function () {
//         for (const key in this){
//             if (typeof this[key] !== 'function') console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.newMax_Speed = function (newSpeed){
//         this.max_speed = this.max_speed + newSpeed;
//     };
//     this.changeYear = function (newYear){
//         this.year = newYear;
//     };
//     this.addDriver = function (driver){
//         this.driver = driver;
//     };
// }
//
// let addCar = new Cars ('Renault', 'France', 2007, 200, 2.0)
// console.log(addCar)
// addCar.drive();
// addCar.info();
// addCar.newMax_Speed(10);
// addCar.drive();
// addCar.addDriver('Yurii')
// console.log(addCar)


// //(Те саме, тільки через клас)
// //Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// //-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// //    -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// //    -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// //    -- changeYear (newValue) - змінює рік випуску на значення newValue
// //    -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// class Cars1{
//     constructor(model, manufacturer, year, max_speed, engine_size) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.max_speed = max_speed;
//         this.engine_size = engine_size;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.max_speed} на годину`)
//     }
//     info(){
//         for (const key in this){
//             console.log(`${key} - ${this[key]}`)
//         }
//     }
//     newMaxSpeed (newSpeed){
//         this.max_speed = this.max_speed + newSpeed;
//     }
//     changeYear (newYear){
//         this.year = newYear;
//     }
//     addDriver (driver) {
//         this.driver = driver;
//     }
// }
//
//
// let addCar = new Cars1 ('Renault', 'France', 2007, 200, 2.0)
// console.log(addCar)
// addCar.drive();
// addCar.info();
// addCar.newMaxSpeed(10);
// addCar.drive();
// addCar.addDriver('Yurii')
// console.log(addCar)
//
//
// class Popelushka {
//     constructor(name, age, foot_size) {
//         this.name = name;
//         this.age = age;
//         this.foot_size = foot_size;
//     }
// }
//
//
// const popelushkaArr = [
//     new Popelushka('Tanya', 23, 38),
//     new Popelushka('Lilya', 20, 36),
//     new Popelushka('Vika', 21, 39),
//     new Popelushka('Diana', 19, 37),
//     new Popelushka('Olesia', 24, 41),
//     new Popelushka('Roksolana', 28, 40),
//     new Popelushka('Marta', 30, 44),
//     new Popelushka('Nastya', 26, 42),
//     new Popelushka('Yulia', 29, 43),
//     new Popelushka('Nadia', 25, 45)
// ];
// console.log(popelushkaArr);
//
//
// class Prince {
//     constructor(name, age, find_foot) {
//         this.name = name;
//         this.age = age;
//         this.find_foot = find_foot;
//     }
// }
// const prince = new Prince('Diana', 19, 37)
//
//
// const newCouple = (popelushkaArr, prince) => {
//     for (const item of popelushkaArr){
//         if (item.foot_size === prince.find_foot){
//             return 'Tvoya popelushka: ' + item.name;
//         }
//     }
// }
// console.log(newCouple(popelushkaArr, prince))
//
//
// const findPrincess = popelushkaArr.find((item) => item.foot_size === prince.find_foot)
// console.log(findPrincess);