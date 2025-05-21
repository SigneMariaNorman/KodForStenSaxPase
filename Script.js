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

/* alternativ är att man skriver:
const selectedComputerWeapon = computerWeapons[randomNumber];, och sen return selectedComputerWeapon; 
ska bli samma princip utan att hålla på med if-satser. 
Förslag på en sådan kod från co-pilot: */
// Användaren väljer sitt vapen via en prompt
const userChoice = prompt('Välj vapen: sten, sax eller påse').toLowerCase();

// Array med möjliga datorvapen
const computerWeapons = ['sten', 'sax', 'påse'];

// Funktion som genererar datorns val slumpmässigt
function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * computerWeapons.length);
    const selectedComputerWeapon = computerWeapons[randomNumber];
    return selectedComputerWeapon;
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





// Följande kod ska undvika if-satser helt:
// Användaren väljer sitt vapen
const userChoice = prompt('Välj vapen: sten, sax eller påse');

// Array med datorns möjliga val
const computerWeapons = ['sten', 'sax', 'påse'];

// Funktion som slumpmässigt väljer datorns vapen
function selectComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * computerWeapons.length);//ska slumpvässigt välja ett element här genom length.
    return computerWeapons[randomNumber]; // Ingen if-sats behövs!
}

// Tilldela datorns val från funktionen
const computerChoice = selectComputerWeapon();

// Lookup-tabell för vinnande regler
const rules = {
    sten: "sax",    // Sten vinner över sax
    sax: "påse",    // Sax vinner över påse
    påse: "sten"    // Påse vinner över sten
};

// Funktion för att bestämma vinnaren (ingen if-sats!)
function determineWinner(userChoice, computerChoice) {
    return userChoice === computerChoice ? "Oavgjort!" :
           rules[userChoice] === computerChoice ? "Du vann!" :
           "Datorn vann!";
}

// Skriva ut resultaten
console.log("Användarens val:", userChoice);
console.log("Datorns val:", computerChoice);
console.log(determineWinner(userChoice, computerChoice));//Vem som vinner skrivs ut.



