import { Component } from '@angular/core';
import { Barcode, BarcodeScanner, BarcodeFormat } from '@capacitor-mlkit/barcode-scanning';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  barcodes: any[] | undefined;

  constructor(private alertController: AlertController) { }

  async scan(): Promise<any[]> {
    const { barcodes } = await BarcodeScanner.scan({
      formats: [BarcodeFormat.QrCode],
    });
    this.showScanResultAlert();
    return barcodes;
  }

  async showScanResultAlert() {
    const alert = await this.alertController.create({
      header: 'Escaneo exitoso',
      message: 'El código QR se ha escaneado correctamente.',
      buttons: ['OK']
    });

    await alert.present();
  }

}
