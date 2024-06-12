export enum Role {
    ADMIN = 'Admin',
    USER = 'User'
}

export type User = {
    id: number;
    name: string;
    role: Role;
}