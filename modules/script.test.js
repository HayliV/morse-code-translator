import { englishToMorse, morseToEnglish } from "./logic";
import { jest } from "@jest/globals";
import { describe, it, expect } from "@jest/globals";

describe("translates english to morse", () => {
    it("correctly translates english to morse", () => {
        expect(englishToMorse("a")).toStrictEqual(".-");
        expect(englishToMorse("hello")).toStrictEqual(".... . .-.. .-.. ---");
        expect(englishToMorse("?")).toStrictEqual("..--..");
        expect(englishToMorse("hi,")).toStrictEqual(".... .. --..--");
    });
    // failing some tests due to toggling between invalid input message and translation..

    it("detects if input is in morse and translates to english", () => {
        expect(englishToMorse(".... . .-.. .-.. ---")).toStrictEqual("hello");
        expect(englishToMorse(".----")).toStrictEqual("1");
    });

    it("detects if input is valid", () => {
        expect(englishToMorse("!")).toStrictEqual(
            "please enter valid characters: a-z, 0-9, and , ? ; : / '"
        );
        expect(englishToMorse("hello!")).toStrictEqual(
            "please enter valid characters: a-z, 0-9, and , ? ; : / '"
        );
    });
});

// bug- when pressing translate twice, message toggles between invalid input and translation after adding detection. tests failing as well.

describe("translates morse to english", () => {
    it("correctly translates morse code to english", () => {
        expect(morseToEnglish(".-")).toStrictEqual("a");
        expect(morseToEnglish(".... . .-.. .-.. ---")).toStrictEqual("hello");
        expect(morseToEnglish(".... .. --..--")).toStrictEqual("hi,");
    });

    it("detects if input is in english and translates to morse", () => {
        expect(morseToEnglish("hello")).toStrictEqual(".... . .-.. .-.. ---");
        expect(morseToEnglish("1")).toStrictEqual(".----");
    });

    it("detects if input is valid", () => {
        expect(morseToEnglish("!")).toStrictEqual(
            "please enter valid morse code"
        );
        expect(morseToEnglish("hello!")).toStrictEqual(
            "please enter valid morse code"
        );
    });
});
