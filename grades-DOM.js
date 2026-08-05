function calculateAverage() {
    // Collect 4 user inputs
    const grade1 = document.getElementById("grade1").value;
    const grade2 = document.getElementById("grade2").value;
    const grade3 = document.getElementById("grade3").value;
    const grade4 = document.getElementById("grade4").value;

    // Create average
   const average = (Number(grade1) + Number(grade2) + Number(grade3) + Number(grade4)) / 4;

    // Output the average
    let p1 = document.getElementById("result");
    p1.textContent = "Average: " + average;
}
