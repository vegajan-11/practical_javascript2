const totalAmount = document.getElementById("totalAmount");
const bananaIncrementButton = document.getElementById('bananaIncrementButton');
const bananaDecrementButton = document.getElementById('bananaDecrementButton');
const bananaCounterDisplay = document.getElementById('bananaCounter');
let bananaCounter = 0;
const orangeIncrementButton = document.getElementById('orangeIncrementButton');
const orangeDecrementButton = document.getElementById('orangeDecrementButton');
const orangeCounterDisplay = document.getElementById('orangeCounter');
let orangeCounter = 0;
const melonIncrementButton = document.getElementById('melonIncrementButton');
const melonDecrementButton = document.getElementById('melonDecrementButton');
const melonCounterDisplay = document.getElementById('melonCounter');
let melonCounter = 0;
const carrotIncrementButton = document.getElementById('carrotIncrementButton');
const carrotDecrementButton = document.getElementById('carrotDecrementButton');
const carrotCounterDisplay = document.getElementById('carrotCounter');
let carrotCounter = 0;
const lemonIncrementButton = document.getElementById('lemonIncrementButton');
const lemonDecrementButton = document.getElementById('lemonDecrementButton');
const lemonCounterDisplay = document.getElementById('lemonCounter');
let lemonCounter = 0;
const appleIncrementButton = document.getElementById('appleIncrementButton');
const appleDecrementButton = document.getElementById('appleDecrementButton');
const appleCounterDisplay = document.getElementById('appleCounter');
let appleCounter = 0;
const avocadoIncrementButton = document.getElementById('avocadoIncrementButton');
const avocadoDecrementButton = document.getElementById('avocadoDecrementButton');
const avocadoCounterDisplay = document.getElementById('avocadoCounter');
let avocadoCounter = 0;
const cucumberIncrementButton = document.getElementById('cucumberIncrementButton');
const cucumberDecrementButton = document.getElementById('cucumberDecrementButton');
const cucumberCounterDisplay = document.getElementById('cucumberCounter');
let cucumberCounter = 0;
const mangoIncrementButton = document.getElementById('mangoIncrementButton');
const mangoDecrementButton = document.getElementById('mangoDecrementButton');
const mangoCounterDisplay = document.getElementById('mangoCounter');
let mangoCounter = 0;
const pineappleIncrementButton = document.getElementById('pineappleIncrementButton');
const pineappleDecrementButton = document.getElementById('pineappleDecrementButton');
const pineappleCounterDisplay = document.getElementById('pineappleCounter');
let pineappleCounter = 0;
const detailToggleButton = document.getElementById('detailToggleButton');
const orderDetail = document.getElementById('orderDetail');

const bananaCostDisplay = document.getElementById('bananaCostDisplay');
const orangeCostDisplay = document.getElementById('orangeCostDisplay');
const lemonCostDisplay = document.getElementById('lemonCostDisplay');
const carrotCostDisplay = document.getElementById('carrotCostDisplay');
const melonCostDisplay = document.getElementById('melonCostDisplay');
const appleCostDisplay = document.getElementById('appleCostDisplay');
const avocadoCostDisplay = document.getElementById('avocadoCostDisplay');
const cucumberCostDisplay = document.getElementById('cucumberCostDisplay');
const mangoCostDisplay = document.getElementById('mangoCostDisplay');
const pineappleCostDisplay = document.getElementById('pineappleCostDisplay');

const placeOrderButton = document.getElementById('placeOrderButton');
const customerName = document.getElementById('customerName');
const resetButton = document.getElementById('resetButton');


let bananaCost = 0;
let orangeCost = 0;
let lemonCost = 0;
let carrotCost = 0;
let melonCost = 0;
let appleCost = 0;
let avocadoCost = 0;
let cucumberCost = 0;
let mangoCost = 0;
let pineappleCost = 0;
let totalCost = 0;

function updateTotalAmount(){

totalCost = bananaCost + orangeCost + lemonCost + carrotCost + melonCost + appleCost + avocadoCost + cucumberCost + mangoCost + pineappleCost;
totalAmount.textContent = totalCost;
};


bananaIncrementButton.addEventListener('click', function(){
bananaCounter++;
bananaCounterDisplay.textContent = bananaCounter;
bananaCost = bananaCounter *15;
bananaCostDisplay.textContent = bananaCost;
updateTotalAmount();
});
bananaDecrementButton.addEventListener('click', function(){
if(!bananaCounter <=0){
bananaCounter--;
}   
bananaCounterDisplay.textContent = bananaCounter;
bananaCost = bananaCounter *15;
bananaCostDisplay.textContent = bananaCost;
updateTotalAmount();
});

orangeIncrementButton.addEventListener('click', function(){
orangeCounter++;
orangeCounterDisplay.textContent = orangeCounter;
orangeCost = orangeCounter * 20;
orangeCostDisplay.textContent = orangeCost;
updateTotalAmount();
});
orangeDecrementButton.addEventListener('click', function(){
if(!orangeCounter <=0){
orangeCounter--;
}   
orangeCounterDisplay.textContent = orangeCounter;
orangeCost = orangeCounter * 20;
orangeCostDisplay.textContent = orangeCost;
updateTotalAmount();

});

melonIncrementButton.addEventListener('click', function(){
melonCounter++;
melonCounterDisplay.textContent = melonCounter;
melonCost = melonCounter * 25;
melonCostDisplay.textContent = melonCost;
updateTotalAmount();
});
melonDecrementButton.addEventListener('click', function(){
if(!melonCounter <=0){
melonCounter--;
}   
melonCounterDisplay.textContent = melonCounter;
melonCost = melonCounter * 25;
melonCostDisplay.textContent = melonCost;
updateTotalAmount();
});

carrotIncrementButton.addEventListener('click', function(){
carrotCounter++;
carrotCounterDisplay.textContent = carrotCounter;
carrotCost = carrotCounter * 15;
carrotCostDisplay.textContent = carrotCost;
updateTotalAmount();
});
carrotDecrementButton.addEventListener('click', function(){
if(!carrotCounter <=0){
carrotCounter--;
}   
carrotCounterDisplay.textContent = carrotCounter;
carrotCost = carrotCounter * 15;
carrotCostDisplay.textContent = carrotCost;
updateTotalAmount();
});

lemonIncrementButton.addEventListener('click', function(){
lemonCounter++;
lemonCounterDisplay.textContent = lemonCounter;
lemonCost = lemonCounter * 15;
lemonCostDisplay.textContent = lemonCost;
updateTotalAmount();
});
lemonDecrementButton.addEventListener('click', function(){
if(!lemonCounter <=0){
lemonCounter--;
}   
lemonCounterDisplay.textContent = lemonCounter;
lemonCost = lemonCounter * 15;
lemonCostDisplay.textContent = lemonCost;
updateTotalAmount();
});

appleIncrementButton.addEventListener('click', function(){
appleCounter++;
appleCounterDisplay.textContent = appleCounter;
appleCost = appleCounter * 20;
appleCostDisplay.textContent = appleCost;
updateTotalAmount();
});
appleDecrementButton.addEventListener('click', function(){
if(!appleCounter <=0){
appleCounter--;
}   
appleCounterDisplay.textContent = appleCounter;
appleCost = appleCounter * 20;
appleCostDisplay.textContent = appleCost;
updateTotalAmount();
});

avocadoIncrementButton.addEventListener('click', function(){
avocadoCounter++;
avocadoCounterDisplay.textContent = avocadoCounter;
avocadoCost = avocadoCounter * 40
avocadoCostDisplay.textContent = avocadoCost;
updateTotalAmount();
});
avocadoDecrementButton.addEventListener('click', function(){
if(!avocadoCounter <=0){
avocadoCounter--;
}   
avocadoCounterDisplay.textContent = avocadoCounter;
avocadoCost = avocadoCounter * 40
avocadoCostDisplay.textContent = avocadoCost;
updateTotalAmount();
});

cucumberIncrementButton.addEventListener('click', function(){
cucumberCounter++;
cucumberCounterDisplay.textContent = cucumberCounter;
cucumberCost = cucumberCounter * 15;
cucumberCostDisplay.textContent = cucumberCost;
updateTotalAmount();
});
cucumberDecrementButton.addEventListener('click', function(){
if(!cucumberCounter <=0){
cucumberCounter--;
}   
cucumberCounterDisplay.textContent = cucumberCounter;
cucumberCost = cucumberCounter * 15;
cucumberCostDisplay.textContent = cucumberCost;
updateTotalAmount();
});

mangoIncrementButton.addEventListener('click', function(){
mangoCounter++;
mangoCounterDisplay.textContent = mangoCounter;
mangoCost = mangoCounter * 30;
mangoCostDisplay.textContent = mangoCost;
updateTotalAmount();
});
mangoDecrementButton.addEventListener('click', function(){
if(!mangoCounter <=0){
mangoCounter--;
}   
mangoCounterDisplay.textContent = mangoCounter;
mangoCost = mangoCounter * 30;
mangoCostDisplay.textContent = mangoCost;
updateTotalAmount();
});

pineappleIncrementButton.addEventListener('click', function(){
pineappleCounter++;
pineappleCounterDisplay.textContent = pineappleCounter;
pineappleCost = pineappleCounter * 20;
pineappleCostDisplay.textContent = pineappleCost;
updateTotalAmount();
});
pineappleDecrementButton.addEventListener('click', function(){
if(!pineappleCounter <=0){
pineappleCounter--;
}   
pineappleCounterDisplay.textContent = pineappleCounter;
pineappleCost = pineappleCounter * 20;
pineappleCostDisplay.textContent = pineappleCost;
updateTotalAmount();
});

detailToggleButton.addEventListener('click', function () {
    if(orderDetail.style.display === 'none'){
        orderDetail.style.display ='block';
        detailToggleButton.textContent = 'Hide details';
    } else{
        orderDetail.style.display = 'none';
        detailToggleButton.textContent = 'Show details';
    }
});

// function to check if the input contains valid name 

function isValidName(name){
    const namePattern = /^[a-zA-Z]+$/;
return namePattern.test(name);
}

placeOrderButton.addEventListener('click', function (){
const username = customerName.value.trim();
    if(!totalCost<=0){
        if (username === ""){
            alert("Please enter your name.");
        } else if(!isValidName(username)){
            alert("Please enter letters only.");
        } else{
                alert(`Hello, ${username}! Your order has been successfully placed.`);
                location.reload();
        
        }
    } else{
        alert("Please pick at least 1 fruit.");
    }
});

resetButton.addEventListener('click', function(){
      location.reload();
});


