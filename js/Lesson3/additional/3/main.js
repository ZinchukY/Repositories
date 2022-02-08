// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//     d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let array = [];

//a
// for (let i = 1; i <=100; i++){
//     if (i%2 === 0){
//         console.log(array[i]=i)
//     }
// }

//d
// for (let i = 1; i <=100; i++){
//     if (i%2 !== 0){
//         console.log(array[i]=i)
//     }
// }


//c
for ( i = 0; i < 20; i++ ) {

    array.push( Math.round( Math.random() * 100 ));

} document.write(array);


//d
function between(min, max) {
    return Math.floor(
        Math.random() * (max - min) + min
    )
}
for (i = 0; i < 20; i++){
    console.log(
        between(8, 732)
    )
}