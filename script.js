let appleCost = 0;

function applePlusBtn() {
   appleCost += 10;
   document.querySelector("#price-btn1").innerHTML = appleCost; 
   bill();      

}

function appleMinusBtn() {
    appleCost -= 10;
    document.querySelector("#price-btn1").innerHTML = appleCost;
    bill();       
 
 
 }


 let orangeCost = 0;

function orangePlusBtn() {
   orangeCost += 15;
   document.querySelector("#price-btn2").innerHTML = orangeCost;
   bill();       

}

function orangeMinusBtn() {
    orangeCost -= 15;
    document.querySelector("#price-btn2").innerHTML = orangeCost;
    bill();       
 
 
 }


 let bananaCost = 0;

function bananaPlusBtn() {
   bananaCost += 7;
   document.querySelector("#price-btn3").innerHTML = bananaCost; 
   bill();
}

function bananaMinusBtn() {
    bananaCost -= 7;
    document.querySelector("#price-btn3").innerHTML = bananaCost;
    bill();
 
 
 }

// making bills


/*
total fruits ki price ko total-rupees me show kena hai

*/

function bill(){
    const totalAppleCost = appleCost * 10;
    const totalOrangeCost = orangeCost * 15;
    const totalBananaCost = bananaCost * 7;
let totalCost = document.querySelector("#total").Value;

 totalCost = totalAppleCost + totalOrangeCost + totalBananaCost;
 document.querySelector("#total").value = totalCost;
}