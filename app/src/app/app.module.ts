import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MenuComponent } from './components/menu/menu.component';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';


@NgModule({
  declarations: [AppComponent, MenuComponent],
  entryComponents: [MenuComponent],
  exports: [MenuComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    HttpClient,
    HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
