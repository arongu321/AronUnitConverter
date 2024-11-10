/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Get HTML elements
const numEl = document.getElementById("num-el");
const convertButton = document.getElementById("convert");
const lengthEl = document.getElementById("length-el");
const volumeEl = document.getElementById("volume-el");
const massEl = document.getElementById("mass-el");

convertButton.addEventListener("click", function() {
    let val = numEl.value;
    let meterVal = Math.round(val/3.281, 3);
    let feetVal = Math.round(val*3.281, 3);
    let literVal = Math.round(val/0.264, 3);
    let gallonVal = Math.round(val*0.264, 3);
    let poundVal = Math.round(val*2.204, 3);
    let kiloVal = Math.round(val/2.204, 3);

    lengthEl.textContent = `
    ${val} meters = ${feetVal} feet | ${val} feet = ${meterVal} meters
    `

    volumeEl.textContent = `
    ${val} liters = ${gallonVal} gallons | ${val} gallons = ${literVal} liters
    `

    massEl.textContent = `
    ${val} kilos = ${poundVal} pounds | ${val} pounds = ${kiloVal} kilos
    `
})


function checkNum(input) {
    if (input.value < 0) {
        input.value = 0;
    } else if (input.value > 100000000) {
        input.value = 100000000;
    }
}