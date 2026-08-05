const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function calculateAverage() {
    const rl = readline.createInterface({ input, output });

    // Collect 4 user inputs
    const grade1 = await rl.question('Enter a grade: ');
    const grade2 = await rl.question('Enter a grade: ');
    const grade3 = await rl.question('Enter a grade: ');
    const grade4 = await rl.question('Enter a grade: ');

    // Create average
    const average = (Number(grade1) + Number(grade2) + Number(grade3) + Number(grade4)) / 4;

    // Output the average
    console.log("Average: " + average);

  rl.close();
}

calculateAverage();