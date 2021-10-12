import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { AlertComponent } from './alert/alert.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

// import { SharedPageRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    // SharedPageRoutingModule
  ],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    CommonModule
  ]
})
export class SharedPageModule {}
