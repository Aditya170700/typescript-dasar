describe('function', () => {
    it('should support function', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Aditya')).toBe('Hello Aditya');
    });

    it('should support function default value', () => {
        function sayHello(name: string = 'Guest'): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Aditya')).toBe('Hello Aditya');
        expect(sayHello()).toBe('Hello Guest');
    });

    it('should rest params', () => {
        function sum(...values: number[]): number {
            let total = 0;

            for (const value of values) {
                total += value;
            }

            return total;
        }

        expect(sum(1, 2, 3, 4, 5)).toBe(15);
    });

    it('should support function overloading', () => {
        function callMe(value: number): number;
        function callMe(value: string): string;
        function callMe(value: any): any {
            if (typeof value === 'number') {
                return value * 10;
            } else if (typeof value === 'string') {
                return value.toUpperCase();
            }
        }

        expect(callMe(10)).toBe(100);
        expect(callMe('aditya')).toBe('ADITYA');
    });

    it('should support function as parameter', () => {
        function sayHello(name: string, filter: (name: string) => string) {
            return `Hello ${filter(name)}`;
        }

        function toUpper(name: string): string {
            return name.toUpperCase();
        }

        expect(sayHello('aditya', toUpper)).toBe('Hello ADITYA');
    });
});