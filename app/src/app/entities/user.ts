import { Station } from './station';

export class User {
    id: number;
    name: string;
    nickname: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    stations: Station[];
}
