import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeoLocationService {

  constructor(private geoLocation: Geolocation) {
    this.getPosition();
  }

  latitude: number;
  longitude: number;

  getPosition(){
    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.latitude = resp.coords.latitude;
        console.log("latitude:", this.latitude);
        
        this.longitude = resp.coords.longitude;
        console.log("longitude:", this.longitude);
      }).catch(error => {
        console.log('ERR getting user geolocation', error);
      });
  }

  getLatitude(){
    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.latitude = resp.coords.latitude;
        console.log("latitude:", this.latitude);
        return this.latitude;
      }).catch(error => {
        console.log('ERR getting user geolocation', error);
      });
  }

  getLongitude() {
    return this.longitude;
  }
}
