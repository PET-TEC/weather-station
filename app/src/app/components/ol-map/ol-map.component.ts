import { Component, OnInit, AfterViewInit, ElementRef, Input } from '@angular/core';

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import XYZ from 'ol/source/XYZ';
import { OSM } from 'ol/source';
import * as Proj from 'ol/proj';
import {
  defaults as defaultControls,
  Control
} from 'ol/control';
import { LoadingController } from '@ionic/angular';

export const DEFAULT_HEIGHT = '500px';
export const DEFAULT_WIDTH = '500px';

@Component({
  selector: 'app-ol-map',
  templateUrl: './ol-map.component.html',
  styleUrls: ['./ol-map.component.scss'],
})
export class OlMapComponent implements OnInit, AfterViewInit {

  @Input() lat: number;
  @Input() lon: number;
  @Input() zoom: number;
  @Input() width: string | number = DEFAULT_WIDTH;
  @Input() height: string | number = DEFAULT_HEIGHT;

  public map: Map;

  private mapElement: HTMLElement;
  constructor(
    private elementRef: ElementRef) { }

  ngOnInit() {
    this.mapElement = this.elementRef.nativeElement.querySelector('#map');
    this.setSize();
  }
  async ngAfterViewInit() {
    this.map = await new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new XYZ({
            url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          })
        })
      ],
      view: new View({
        center: Proj.fromLonLat([this.lon, this.lat]),
        zoom: this.zoom
      }),
      controls: defaultControls().extend([]),
    });
  }

  private setSize(): void {
    if (this.mapElement) {
      const styles = this.mapElement.style;
      styles.height = coerceCssPixelValue(this.height) || DEFAULT_HEIGHT;
      styles.width = coerceCssPixelValue(this.width) || DEFAULT_WIDTH;
    }
  }
}

const cssUnitsPattern = /([A-Za-z%]+)$/;
function coerceCssPixelValue(value: any): string {
  if (value == null) {
    return '';
  }
  return cssUnitsPattern.test(value) ? value : `${value}px`;
}


