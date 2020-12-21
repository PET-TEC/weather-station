import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Station } from 'src/app/entities/station';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  devices: Station[];
  userId: number;


  constructor(
    private stationService: StationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.devices = new Array<Station>();
   }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // tslint:disable-next-line: radix
    this.userId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDevices();
  }

  getDevices() {
    this.stationService.getStationByUserId(this.userId)
      .subscribe((response: Station[]) => {
        console.log('debug: getDevices: response = ', response);
        this.devices = response;
      });
  }
  navigateToDevice(station: Station) {
    console.log('navigation to ', station.id);
    this.router.navigateByUrl(`/details/${station.id}`);
  }

}
