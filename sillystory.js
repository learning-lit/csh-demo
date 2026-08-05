const readline = require('readline/promises');
const { stdin: input, stdout: output } = require('process');

async function playStory() {
    const rl = readline.createInterface({ input, output });

    // Collect 4 user inputs
    const noun = await rl.question('Enter a noun: ');
    const verb = await rl.question('Enter a verb (past tense): ');
    const adjective = await rl.question('Enter an adjective: ');
    const place = await rl.question('Enter a place: ');

    // Create story paragraphs
    const paragraph1 = "Yesterday, a " + adjective + " " + noun + " decided to invade " + place + "!";
    const paragraph2 = "Fortunately, I " + verb + " the " + noun + " using its own " + adjective + " head.";

    // Output the generated story
    console.log(paragraph1);
    console.log(paragraph2);

  rl.close();
}

playStory();