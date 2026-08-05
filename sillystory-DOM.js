function playStory() {
    // Collect 4 user inputs
    const noun = document.getElementById("noun").value;
    const verb = document.getElementById("verb").value;
    const adjective = document.getElementById("adjective").value;
    const place = document.getElementById("place").value;

    // Create story paragraphs
    const paragraph1 = "Yesterday, a " + adjective + " " + noun + " decided to invade " + place + "!";
    const paragraph2 = "Fortunately, I " + verb + " the " + noun + " using its own " + adjective + " head.";

    // Output the generated story
    let p1 = document.getElementById("paragraph1");
    let p2 = document.getElementById("paragraph2");
    p1.textContent = paragraph1;
    p2.textContent = paragraph2;
}