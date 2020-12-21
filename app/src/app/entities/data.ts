import { Station } from './station';

export class Data {
    id: string;
    stationId: string;
    temperature: number;
    humidity: number;
    rain: boolean;
    soilMoisture: number;
    createdAt: Date;
    updatedAt: Date;
    station: Station;
}
