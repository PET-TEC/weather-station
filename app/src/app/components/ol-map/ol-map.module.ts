import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { OlMapComponent } from './ol-map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LeafletModule
  ],
  declarations: [OlMapComponent],
  exports: [OlMapComponent]
})
export class OlMapComponentModule {}
