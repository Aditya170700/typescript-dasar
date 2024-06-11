import {process} from "../src/union"

describe('Union Type', () => {
    it('should support union type', () => {
        let sample : number | string | boolean = "Aditya";

        sample = 100;
        sample = true;

        console.info(sample);
    });

    it('should support typeof operator', () => {
        expect(process(100)).toBe(200);
        expect(process(true)).toBe(false);
        expect(process("aditya")).toBe("ADITYA");
    });
});