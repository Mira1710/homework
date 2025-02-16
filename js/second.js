document.addEventListener("DOMContentLoaded", function(){
    
    // 1 задание
    
    let age = parseInt(prompt("Введите ваш возраст:"));
    if (age >= 65) {
        console.log("Вам ещё рано на пенсию");
    } else {
        console.log("Поздравляем с пенсионным возрастом!");
    }
    

// 2 задание

    let a = 20;
    let b = 10;

    if ( a >= b) {
        console.log("Первое число больше");
    } else {
        console.log("Второе число больше");
    }


// 3 задание

const number = parseInt(prompt("Введите число:"));

if (number % 2 === 0) {
    console.log("Это чётное число");
} else {
    console.log("Это нечётное число");
}



    



})