import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit{

  userLat: number;
  userLon: number;
  stringLat: string;
  stringLon: string;

  constructor(
    public alertController: AlertController,
    public menuController: MenuController,
    public geoLocation: Geolocation
  ) { }

  ngAfterViewInit(){
    this.geoLocation.getCurrentPosition().then(
      resp => {
        this.userLat = resp.coords.latitude;
        this.userLon = resp.coords.longitude;
        this.stringLat = this.userLat.toString();
        this.stringLon = this.userLon.toString();
      }).catch(error => {
        console.log('ERR getting user geolocation', error);
      });
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

}
