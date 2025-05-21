// Användaren väljer sitt vapen via en prompt
const userChoice = prompt('Välj vapen: sten, sax eller påse').toLowerCase();//prompt blir den där tomma rutan man kan fylla i.

// Funktion som genererar datorns val slumpmässigt
function selectComputerWeapon() {
    const choices = ['sten', 'sax', 'påse'];
    const randomNumber = Math.floor(Math.random() * choices.length);/* rendomNumber genererar ett random number mellan 0-1. 
    Choices length multiplicerar med antal element som finns i arrayen choices. 
    Eftersom det är tre element multiplicerar den då med något mellan 0 och nästan 3. Math.floor avrundar nedåt till närmaste heltal. 
    Och detta fungerar eftersom det första elementet är 0, så de är 0, 1, 2 och 3. 
    Datorn fattar genom att vi har .length inblandat att 0 = sten osv. */
    return choices[randomNumber];
}

// Tilldela datorns val från funktionen
const computerChoice = selectComputerWeapon();

// Funktion för att avgöra vinnaren
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Oavgjort!";
    } else if (
        (userChoice === "sten" && computerChoice === "sax") ||
        (userChoice === "sax" && computerChoice === "påse") ||
        (userChoice === "påse" && computerChoice === "sten")
    ) {
        return "Du vann!";
    } else {
        return "Datorn vann!";
    }
}

// Logga valen och resultatet i konsolen
console.log("Användarens val:", userChoice);
console.log("Datorns val:", computerChoice);
console.log(determineWinner(userChoice, computerChoice));

