function loginButton() {
    // Collect 2 user inputs
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    
    // Define correct login info
    const correctUsername = "user123";
    const correctPassword = "password123";
    let result = "";

    // Check username and password
    if (username == correctUsername && password == correctPassword) {
        result = "Correct!";
    }
    else {
        result = "Incorrect. Try again."
    }

    // Output the average
    let p1 = document.getElementById("result");
    p1.textContent = result;
}
