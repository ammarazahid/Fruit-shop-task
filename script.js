let appleCost = 0;

function applePlusBtn() {
  
   appleCost += 1;
   document.querySelector("#price-btn1").innerHTML = appleCost; 
   bill();      

}

function appleMinusBtn() {
    appleCost -= 1;
    document.querySelector("#price-btn1").innerHTML = appleCost;
    bill();       
 
 
 }


 let orangeCost = 0;

function orangePlusBtn() {
   orangeCost += 1;
   document.querySelector("#price-btn2").innerHTML = orangeCost;
   bill();       

}

function orangeMinusBtn() {
    orangeCost -= 1;
    document.querySelector("#price-btn2").innerHTML = orangeCost;
    bill();       
 
 
 }


 let bananaCost = 0;

function bananaPlusBtn() {
   bananaCost += 1;
   document.querySelector("#price-btn3").innerHTML = bananaCost; 
   bill();
}

function bananaMinusBtn() {
    bananaCost -= 1;
    document.querySelector("#price-btn3").innerHTML = bananaCost;
    bill();
 
 
 }

// making bills


/*
total fruits ki price ko total-rupees me show kena hai

*/
let totalCost = document.querySelector("#total").value;
function bill(){
    const totalAppleCost = appleCost * 10;
    const totalOrangeCost = orangeCost * 15;
    const totalBananaCost = bananaCost * 7;


 totalCost = totalAppleCost + totalOrangeCost + totalBananaCost;
 document.querySelector("#total").value = totalCost;

  
let pocketAmount = document.getElementById("have-rs").value;

if (pocketAmount < totalCost) {
   alert("you do not have money");
}
}
// } else{
//    alert("Thanks for shopping");
// }




/*
agr totalCost pocket rs se zyada hojae to alert warna nhi

*/



// let totalCost = document.querySelector("#total").value;




