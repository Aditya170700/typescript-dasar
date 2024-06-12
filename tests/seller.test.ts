import {Seller} from "../src/seller";
import {Manager} from "../src/employee";

describe('seller', () => {
    it('Should be able to sell a seller', () => {
        const seller: Seller = {
            id: 1,
            name: 'John Doe',
            description: '-',
            nib: '912879812',
            npwp: '928719821'
        };

        console.info(seller);
    });

    it('Should support function iface', () => {
        interface AddFunction {
            (value1: number, value2: number): number;
        }

        const add: AddFunction = (value1, value2) => {
            return value1 + value2;
        }

        console.log(add(1, 2));
    });

    it('Should support indexable iface', () => {
        interface StringArray {
            [index: number]: string;
        }

        const names: StringArray = ['Aditya', 'John Doe'];

        console.info(names);
    });

    it('Should support indexable iface for non number index', () => {
        interface StringDictionary {
            [key: string]: string;
        }

        const dictionary: StringDictionary = {
            "name": "Aditya",
            "address": "Indonesia"
        }

        console.info(dictionary);
    });

    it('Should support extends interface', () => {
        const manager: Manager = {
            id: 1,
            name: 'John Doe',
            division: 'IT',
            numberOfEmployees: 10
        };

        console.info(manager);
    });

    it('Should support function in interface', () => {
        interface Person {
            name: string;
            sayHello(name: string): string;
        }

        const aditya: Person = {
            name: 'Aditya',
            sayHello: function (name: string): string {
                return `Hello ${name}, my name is ${this.name}`;
            }
        }

        console.info(aditya);
        console.info(aditya.name);
        console.info(aditya.sayHello('Erni Safitri'));
    });
});