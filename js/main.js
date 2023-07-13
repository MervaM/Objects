'use strict';

// 1. Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// - Метод, який виводить на екран інформацію про автомобіль.
// - Додавання ім’я водія у список
// - Перевірка водія на наявність його ім’я у списку
// - Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 
let auto = {
    name: "Nissan",
    model: "Juke",
    graduationYear: 2010,
    engine: 1.6,
    averangeSpeed: 90,
    fuelTank: 46,
    fuelConsumption: 6,
    drivers: null,
    
    sayHello() {
        alert(`Hello, human! I'm ${this.name}. You may call me ${this.model}. I was born in ${this.graduationYear} in Japan. All characteristics you can find in console =) `);
    },
    
}

console.log(auto);

let btnHello = document.querySelector('#btn_hello');
btnHello.addEventListener('click', () => {
    auto.sayHello();
} );

auto.drivers = "Maryana";
console.log(auto.drivers);

let identify = function() {
    let driverName = prompt("Please, enter your name and I could identify you.");
    for(let drivers in auto) {
        if(driverName === 'Maryana') {
            alert("Hello my human=)");
            break
        } else {
            alert(`You're not my human >_< ! Who do you want to fool?`);
            break;
        }
    }
}

let btnIdentify = document.querySelector('#btn_identify');
btnIdentify.addEventListener('click', identify);


let time = 0;
let timeAndGasoline = function() {
    let userDistance = prompt(`Please, enter the distance which we need to drive through.`);
    let gasoline = Math.round((userDistance * auto.fuelConsumption) / auto.averangeSpeed);

    time = time <= 4 ? Math.round(userDistance / auto.averangeSpeed) : Math.round((userDistance / auto.averangeSpeed) + 1);
    
    console.log(gasoline);
    console.log(time);
    alert(`In General: if we will drive ${userDistance} km we will spend ${gasoline} liters of gasoline and ${time} hours (after each 4 hours we need 1 hour of rest ;) )`);
}
// timeAndGasoline();

let btnMath = document.querySelector('#btn_matn');
btnMath.addEventListener('click', timeAndGasoline);


