import { morseCode, english } from "./data.js";

/**
 * function to translate inputted english text to morse code, also detects if input is in morse and translates to english
 */
export const englishToMorse = (text) => {
    let inputText = text
        .toUpperCase()
        .split("")
        .map((letter) => morseCode[letter])
        .join(" ");
    return inputText;
};

/**
 * function to translate inputted morse code to english, also detects if input is in english and translates to morse code.
 */
export const morseToEnglish = (text) => {
    let inputText1 = text
        .split(" ")
        .map((letter) => english[letter])
        .join("");
    return inputText1;
};
