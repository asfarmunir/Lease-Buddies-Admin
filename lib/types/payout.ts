import { IUser } from "./user";

export interface IPayouts {
    _id?: string;
    user: IUser;
    booking: string;
    amount: number;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
    accountEmail: string;
    date: Date;
}