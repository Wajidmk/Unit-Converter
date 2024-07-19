/*
1 meter = 3.2808 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

const convertBtn = document.getElementById("convert-btn")
const resetBtn = document.getElementById("reset-btn")

const inputEl = document.getElementById("input-el")
const convertText1 = document.getElementById("convert-text-1")
const convertText2 = document.getElementById("convert-text-2")
const convertText3 = document.getElementById("convert-text-3")


convertBtn.addEventListener("click",function(){
  if(inputEl.value !=""){
    convertText1.innerHTML = 
    `
     ${inputEl.value} meters = ${(inputEl.value*3.2808).toFixed(3)} feet |  ${inputEl.value} feet = ${(inputEl.value/3.2808).toFixed(3)} meters
    `
  convertText2.innerHTML = 
  `
    ${inputEl.value} liters = ${(inputEl.value*0.264172).toFixed(3)} gallons |  ${inputEl.value} gallons = ${(inputEl.value/0.264172).toFixed(3)} liters
  `
  convertText3.innerHTML = 
  `
    ${inputEl.value} kilos = ${(inputEl.value*2.20462).toFixed(3)} pounds |  ${inputEl.value} pounds = ${(inputEl.value/2.20462).toFixed(3)} kilos
  `
  }
})

resetBtn.addEventListener("click",function(){
  window.location.reload();
})