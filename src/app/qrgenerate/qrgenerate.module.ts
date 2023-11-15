import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrgeneratePageRoutingModule } from './qrgenerate-routing.module';

import { QrgeneratePage } from './qrgenerate.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrgeneratePageRoutingModule,
    QrCodeModule
  ],
  declarations: [QrgeneratePage]
})
export class QrgeneratePageModule {}
