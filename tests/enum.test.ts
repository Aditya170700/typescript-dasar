import {Role, User} from "../src/enum";

describe('Enum', () => {
    it('Should return true', () => {
        const user: User = {
            id: 1,
            name: "John",
            role: Role.USER,
        }

        const admin: User = {
            id: 2,
            name: "Doe",
            role: Role.ADMIN,
        }

        console.info(user);
        console.info(admin);
    })
})