export interface Mworker {
    id?: number;
    surname: string;
    name: string;
    patronymic: string;
    phone: string;
    email: string;
    date: string;
    type: number;
}

export enum MWorkersType {
    programmer,
    sales,
    delivery,
    lawyers,
}