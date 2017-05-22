import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StartComponent } from './start/start.component';
import {ProfileDetailsService} from "./profileDetails.service";


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'start',
        component: StartComponent
      },
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
      }
    ])
  ],
  providers: [ ProfileDetailsService ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
