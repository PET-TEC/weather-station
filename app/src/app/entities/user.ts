import { Station } from './station';

export class User {
    id: string;
    name: string;
    nickname: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    stations: Station[];
}
