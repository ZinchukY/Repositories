// //Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone){
    this.id = id,
        this.name = name,
        this.surname = surname,
        this.email = email,
        this.phone = phone
}

// //створити пустий масив, наповнити його 10 об'єктами new User(....)
const userArr = [
    new User(10, 'Volodya', 'Lozinskiy', 'vdlz@gmail.com', 30984526781),
    new User(5, 'Denis', 'Pelipets', 'Den@gmail.com', 305156374869),
    new User(7, 'Filip', 'Kirkorov', 'Filya@gmail.com', 30246869741),
    new User(8, 'Roman', 'Zibolka', 'RomaZ@gmail.com', 30675938429),
    new User(2, 'Igor', 'Zaluzhniy', 'Zaluzhniy@gmail.com', 30768564736),
    new User(9, 'Markiyan', 'Kosiv', 'MarKos@gmail.com', 3095846255),
    new User(3, 'Vasil', 'Zirka', 'ZirkaV@gmail.com', 30765843762),
    new User(4, 'Yurii', 'Zinchuk', 'ZinchukY@gmail.com', 30152768441),
    new User(6, 'Nastya', 'Popiv', 'PopivNast@gmail.com', 30946525484),
    new User(1,'Lilya', 'Parabellum', 'ParabeL@gmail.com', 3098675643)
]


// //Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let userFilter = userArr.filter((user) => {
    if (user.id % 2 ===0 ){
        return user;
    }
});
console.log(userFilter)


// //Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortUser = userArr.sort((a, b) => a.id - b.id);
console.log(sortUser)


// //створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client  {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// //створити пустий масив, наповнити його 10 об'єктами Client
let emptyArr = [
    new Client(6, 'Liza', 'Pidlisna', 'LizPd@gmail.com', 30984526781, ['t-shirt', 'leapstick']),
    new Client(4, 'Victor', 'Boyka', 'VictorB@gmail.com', 305156374869,['boxing-glowes', 'protein', 'creatine']),
    new Client(3, 'Boris', 'Pivkach', 'Borya@gmail.com', 30246869741,['beer', 'fish', 'chips']),
    new Client(1, 'Nelya', 'Vovk', 'VovkN@gmail.com', 30675938429,['pizza', 'Coca-cola']),
    new Client(9, 'Nazar', 'Lisnuy', 'Leshuy@gmail.com', 30768564736,['book']),
    new Client(2, 'Tolik', 'Dvornuckiy', 'Tolya@gmail.com', 3095846255,['flash-memory', 'Ssd', 'Processor']),
    new Client(7, 'Bogdan', 'Melnuk', 'Bodya@gmail.com', 30765843762,['notebook']),
    new Client(5, 'Andrii', 'Frankiv', 'Andruha@gmail.com', 30152768441,['beer', 'pizza', 'chips']),
    new Client(10, 'Ilona', 'Kravets', 'IlonaKs@gmail.com', 30946525484,['leapsteak', 'magasine']),
    new Client(8,'Zakhar', 'Beliy', 'BeliyZ@gmail.com', 3098675643,['beer', 'magasine', 'pizza'])
]


// //Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
const sortOrder = emptyArr.sort ((a,b) => a.order.length - b.order.length)
console.log(sortOrder);

