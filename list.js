let groceryList = [];
function addItem() {
    // Collect 2 user inputs
    const item = document.getElementById("newItem");
    const nextItem = item.value;
    
    // Check if item is already in the list
    if (groceryList.includes(nextItem)) {
        return
    }
    
    // Append item
    groceryList.push(nextItem);

    // Sort list
    groceryList.sort();

    // Create a string
    let displayString = "";
    for (let index = 0; index < groceryList.length; index++) {
        currentElement = groceryList[index];
        displayString += currentElement + "<br>";
    }

    // Output the list
    let p1 = document.getElementById("listDisplay");
    p1.innerHTML = displayString;

    // Clear textbox
    item.value = "";
}
