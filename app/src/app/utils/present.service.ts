import { Injectable } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PresentService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  public async presentAlert(title, text) {
    const alert = await this.alertController.create({
      header: title,
      message: text,
      buttons: ['OK']
    });
    return await alert.present();
  }

  public async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Carregando...',
      duration: 0,
      showBackdrop: true,
      backdropDismiss: true
    });
    return await loading.present();
  }

  public async presentToast(text: string) {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000
      });
      toast.present();
  }
}
