// declare variables
var calc = document.querySelector("#calcBtn");
var resetBtn = document.querySelector("#resetBtn");
var tipDisplay = document.querySelector("h3");
var noSelection = document.getElementById("serviceSelect").getElementsByTagName("option")[0];
var excellent = document.getElementById("serviceSelect").getElementsByTagName("option")[1];
var good = document.getElementById("serviceSelect").getElementsByTagName("option")[2];
var fair = document.getElementById("serviceSelect").getElementsByTagName("option")[3];
var poor = document.getElementById("serviceSelect").getElementsByTagName("option")[4];

// calculate button
calc.addEventListener("click", function() {
    var num = document.getElementById("amount").value
    var mult = 0;
    var result = 0;
    // no option is chosen
    if(noSelection.selected === true) {
        alert("Please select an option");
    } 
    // excellent option
    if(excellent.selected === true) {
        console.log(excellent);
        mult = 0.18;
    } 
    // good option   
    if(good.selected === true) {
        console.log(good);
        mult = 0.15;
    }
    // fair option
    if(fair.selected === true) {
        console.log(fair);
        mult = 0.12;
    }
    // poor option
    if(poor.selected === true) {
        console.log(poor);
        mult = 0.10;
    }
    // convert string to float
    num = parseFloat(num);
    // round total to 2 decimal places
    result = (num * mult).toFixed(2);
    // display total amount 
    tipDisplay.textContent = "$ " + result;
    tipDisplay.style.backgroundColor = "#AC4635"
});

// reset button
// function used for practice    
function reset() {
    resetBtn.addEventListener("click", function() {
        tipDisplay.textContent = "$";
        noSelection = document.getElementById("serviceSelect").getElementsByTagName("option")[0];
        excellent = document.getElementById("serviceSelect").getElementsByTagName("option")[1];
        good = document.getElementById("serviceSelect").getElementsByTagName("option")[2];
        fair = document.getElementById("serviceSelect").getElementsByTagName("option")[3];
        poor = document.getElementById("serviceSelect").getElementsByTagName("option")[4];
        document.getElementById("amount").value = "";
        tipDisplay.style.backgroundColor = "#899E99";
    });
}

// call function
reset();