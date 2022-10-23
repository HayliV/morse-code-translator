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
});

describe("translates morse to english", () => {
    it("correctly translates morse code to english", () => {
        expect(morseToEnglish(".-")).toStrictEqual("a");
        expect(morseToEnglish(".... . .-.. .-.. ---")).toStrictEqual("hello");
        expect(morseToEnglish(".... .. --..--")).toStrictEqual("hi,");
    });
});
