import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { AngularFireModule } from '@angular/fire';
import { AngularFireFunctionsModule, 
  //USE_EMULATOR as USE_FUNCTIONS_EMULATOR, 
  //ORIGIN as FUNCTIONS_ORIGIN, NEW_ORIGIN_BEHAVIOR 
} from '@angular/fire/functions';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],

  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireFunctionsModule,],

  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //{provide: NEW_ORIGIN_BEHAVIOR, useValue: true },
    //{provide: FUNCTIONS_ORIGIN, useFactory: () => isDevMode() ? undefined : location.origin },
    //{provide: USE_FUNCTIONS_EMULATOR, useValue: environment.useEmulators ? ['localhost', 5001] : undefined }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
