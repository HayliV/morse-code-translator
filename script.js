const morseCode = {
    A: ".-",
    B: "-...",
    C: "-.-.",
    D: "-..",
    E: ".",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    O: "---",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    ";": "-.-.-.",
    ":": "---...",
    "-": "-....-",
    "/": "-..-.",
    "'": ".----.",
    "'": ".-..-.",
};

const english = {
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
};

const englishToMorse = (text) => {
    let inputText = text
        .toUpperCase()
        .split("")
        .map((letter) => morseCode[letter])
        .join(" ");
    return inputText;
};

const morseToEnglish = (text) => {
    let inputText1 = text
        .split(" ")
        .map((letter) => english[letter])
        .join("");
    return inputText1;
};

console.log(morseToEnglish(".... . -.--"));

const button = document.getElementById("submitEnglish");
const englishtext = document.getElementById("englishInput");
const morsetext = document.getElementById("morseOutput");
button.addEventListener("click", () => {
    console.log(englishtext.value);
    let translatedtext = englishToMorse(englishtext.value);
    console.log(translatedtext);
    morsetext.value = translatedtext;
});
