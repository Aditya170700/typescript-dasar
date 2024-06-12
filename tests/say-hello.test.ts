import {sayHello} from "../src/say-hello";

describe("say-hello", () => {
    it('should return hello aditya', () => {
        expect(sayHello('aditya')).toBe('Hello aditya');
        expect(sayHello()).toBe('Hello');
        expect(sayHello(null)).toBe('Hello');
    });
});