describe('function', () => {
    it('returns true when no arguments', () => {
        function sayHello(name: string): string {
            return `Hello ${name}`;
        }

        expect(sayHello('Aditya')).toBe('Hello Aditya');
    })
})