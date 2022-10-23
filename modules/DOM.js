import { englishToMorse, morseToEnglish } from "./logic.js";

const button = document.getElementById("submitEnglish");
const englishtext = document.getElementById("englishInput");
const morsetext = document.getElementById("morseOutput");
button.addEventListener("click", () => {
    console.log(englishtext.value);
    let translatedtext = englishToMorse(englishtext.value);
    console.log(translatedtext);
    morsetext.value = translatedtext;
});

const morseButton = document.getElementById("submitMorse");

morseButton.addEventListener("click", () => {
    console.log(morsetext.value);
    let englishtranslation = morseToEnglish(morsetext.value);
    console.log(englishtranslation);
    englishtext.value = englishtranslation;
});
