import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, MenuController } from '@ionic/angular';
import { Data } from '../entities/data';
import { Station } from '../entities/station';
import { DataService } from '../services/data.service';
import { StationService } from '../services/station.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  userLat: number;
  userLon: number;
  nearestStationId: number;
  nearestData: Data;
  stringLat: string;
  stringLon: string;
  showMap = false;

  constructor(
    public alertController: AlertController,
    public menuController: MenuController,
    public geoLocation: Geolocation,
    public stationService: StationService,
    public dataService: DataService
  ) { }

  ngAfterViewInit(){
    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.userLat = resp.coords.latitude;
        this.userLon = resp.coords.longitude;
        this.stringLat = this.userLat.toString();
        this.stringLon = this.userLon.toString();
        this.getNearestStation();
      }).catch(error => {
        console.log('ERR getting user geolocation', error);
      });
    setTimeout(() => {
      this.showMap = true;
    }, 1000);
  }

  async viewAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Sua Localização',
      message: `<strong>Latitude:</strong> ${this.userLat}`  + '<br/>' + `<strong>Longitude:</strong> ${this.userLon}`,
      buttons: ['OK']
    });

    await alert.present();
  }

  toogleMenu() {
    this.menuController.toggle();
  }

  getNearestStation() {
    /*this.stationService.getNearestStation(this.userLat, this.userLon).subscribe(
      (response: any) => {
        this.nearestStation = response;
        this.getNearestData();
      }, (error) => {
        console.log('ERR getting nearest station', error);
      }
    );*/
    this.nearestStationId = 1;
    this.getNearestData();
  }

  getNearestData() {
    this.dataService.getDataById(this.nearestStationId).subscribe(
      (response: any) => {
        this.nearestData = response;
      }, (error) => {
        console.log('ERR getting nearest station data', error);
      }
    );
  }

}
