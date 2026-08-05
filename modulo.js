function calculateModulo() {
    // Collect 1 user inputs
    const numberToCheck = document.getElementById("num").value;
    
    // Check odd or even
    let mod = numberToCheck % 2;
    let result = "";

    if (mod == 0) {
        result = "The number " + numberToCheck + " is EVEN.";
    }
    else {
        result = "The number " + numberToCheck + " is ODD.";
    }
    

    // Output the average
    let p1 = document.getElementById("result");
    p1.textContent = result;
}
