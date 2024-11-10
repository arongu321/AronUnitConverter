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

// Event listener when convert button is clicked
convertButton.addEventListener("click", function() {

    // Retrieve input value
    let val = numEl.value;

    // Convert value to specified units

    // 1 meter = 3.281 feet
    let meterVal = Math.round(val/3.281, 3);
    let feetVal = Math.round(val*3.281, 3);

    // 1 liter = 0.264 gallon
    let literVal = Math.round(val/0.264, 3);
    let gallonVal = Math.round(val*0.264, 3);

    // 1 kilogram = 2.204 pound
    let poundVal = Math.round(val*2.204, 3);
    let kiloVal = Math.round(val/2.204, 3);

    // Update length element paragraph with specified unit conversions
    lengthEl.textContent = `
    ${val} meters = ${feetVal} feet | ${val} feet = ${meterVal} meters
    `
    // Update volume element paragraph with specified unit conversions
    volumeEl.textContent = `
    ${val} liters = ${gallonVal} gallons | ${val} gallons = ${literVal} liters
    `

    // Update mass element paragraph with specified unit conversions
    massEl.textContent = `
    ${val} kilos = ${poundVal} pounds | ${val} pounds = ${kiloVal} kilos
    `
})

// Function to check if input is lower than 0 and greater than 100000000
function checkNum(input) {
    if (input.value < 0) {
        input.value = 0;
    } else if (input.value > 100000000) {
        input.value = 100000000;
    }
}