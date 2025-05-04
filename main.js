const gifts = ["Muñeca", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];


function findGift(gifts, giftName, index = 0) {
    
    if (index === gifts.length) {
        return `${giftName} no está en la lista.`;
    } else if (gifts[index] === giftName) {
        return `${giftName} está en la posición ${index}.`;
    } else {
        return findGift(gifts, giftName, index + 1);
    }

}
// Casos de ejemplo:

let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));


// Caso cuando el regalo no está en la lista
let giftToFindFalse = "Camión";

console.log(findGift(gifts, giftToFindFalse));