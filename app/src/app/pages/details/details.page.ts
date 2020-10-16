import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Data } from 'src/app/entities/data';
import { Station } from 'src/app/entities/station';
import { DataService } from 'src/app/services/data.service';
import { StationService } from 'src/app/services/station.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements AfterViewInit {

  stationData: Data;
  station: Station;
  stationId: number;
  updateDate: string;
  createDate: string;
  showMap = false;
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private stationService: StationService
  ) {
    this.station = new Station();
    this.stationData = new Data();
    this.stationData.createdAt = new Date();
    this.stationData.updatedAt = new Date();
  }

  ngAfterViewInit() {
    // tslint:disable-next-line: radix
    this.stationId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.getDataById(this.stationId);
    this.getStationById(this.stationId);
    setTimeout(() => {
      this.showMap = true;
    }, 1000);
  }

  getDataById(id) {
    this.dataService.getDataById(id).subscribe(
      response => {
        this.stationData = response;
        console.log('debug: data = ', this.stationData);
      },
      error => {
        console.log('ERR from getDataById: ', error);
      }
    );
  }

  getStationById(id) {
    this.stationService.getStationById(id).subscribe(
      (response: any) => {
        this.station = response;
        this.station.createdAt = new Date(this.station.createdAt);
        this.station.updatedAt = new Date(this.station.updatedAt);
        this.createDate = `${this.pad(this.station.createdAt.getDate())}/${this.pad(this.station.createdAt.getMonth())}/${this.pad(this.station.createdAt.getFullYear())} - ${this.pad(this.station.createdAt.getHours())}:${this.pad(this.station.createdAt.getMinutes())}`;
        this.updateDate = `${this.pad(this.station.updatedAt.getDay())}/${this.pad(this.station.updatedAt.getMonth())}/${this.pad(this.station.updatedAt.getFullYear())} - ${this.pad(this.station.updatedAt.getHours())}:${this.pad(this.station.updatedAt.getMinutes())}`;
      },
      error => {
        console.log('ERR from getStationById: ', error);
      }
    );
  }

  pad(num: number): string {
    if (num < 10) {
      return ('0' + num);
    } else {
      return (num + '');
    }
  }

}
