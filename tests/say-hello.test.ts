import {sayHello} from "../src/say-hello";

describe("say-hello", () => {
    it('should return hello aditya', () => {
        expect(sayHello('aditya')).toBe('Hello aditya');
    });
});