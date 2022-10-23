import { morseCode, english, regexEnglish, regexMorse } from "./data.js";

/**
 * function to translate inputted english text to morse code, also detects if input is in morse and translates to english
 */
export const englishToMorse = (text) => {
    if (regexEnglish.test(text) === true) {
        let inputText = text
            .toUpperCase()
            .split("")
            .map((letter) => morseCode[letter])
            .join(" ");
        return inputText;
    } else if (regexMorse.test(text) === true) {
        let inputText = text
            .split(" ")
            .map((letter) => english[letter])
            .join("");
        return inputText;
    } else {
        let inputText =
            "please enter valid characters: a-z, 0-9, and , ? ; : / '";
        return inputText;
    }
};
// bug- when pressing translate twice, message toggles between invalid input and translation after adding detection. tests failing as well.

/**
 * function to translate inputted morse code to english, also detects if input is in english and translates to morse code.
 */
export const morseToEnglish = (text) => {
    if (regexMorse.test(text) === true) {
        let inputText1 = text
            .split(" ")
            .map((letter) => english[letter])
            .join("");
        return inputText1;
    } else if (regexEnglish.test(text) === true) {
        let inputText1 = text
            .toUpperCase()
            .split("")
            .map((letter) => morseCode[letter])
            .join(" ");
        return inputText1;
    } else {
        let inputText1 = "please enter valid morse code";
        return inputText1;
    }
};
