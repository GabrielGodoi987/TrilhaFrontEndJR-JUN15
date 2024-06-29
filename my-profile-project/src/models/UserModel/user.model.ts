export interface UserModel{
    uid: string;
    name: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date | string | number;
}