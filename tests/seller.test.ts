import {Seller} from "../src/seller";

describe('seller', () => {
    it('Should be able to sell a seller', async () => {
        const seller: Seller = {
            id: 1,
            name: 'John Doe',
            description: '-',
        };

        console.info(seller);
    });
});