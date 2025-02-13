document.addEventListener("DOMContentLoaded", function(){

// 1 задание

    let str ='abcde';
    
    console.log(str[0]);
    console.log(str[1]); 
    console.log(str[4]);

// 2 задание

    let a = 10;
    let b = 20;

    console.log(a > 0 || b > 0);


// 3 задание

let age = parseInt(prompt("Введите ваш возраст:"));
if (age >= 18) {
    console.log("Совершеннолетний");
} else {
    console.log("Несовершеннолетний");
}


})