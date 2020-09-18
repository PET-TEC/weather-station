import { Data } from './data';
import { User } from './user';

export class Station {
    id: string;
    name: string;
    userId: string;
    createdAt: Date;
    updateAt: Date;
    lat: number;
    lon: number;
    acuracy: number;
    user: User;
    data: Data[];
}