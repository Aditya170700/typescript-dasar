import {Seller} from "../src/seller";

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
    })
});