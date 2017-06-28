import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { StartComponent } from './start/start.component';
import {ProfileDetailsService} from "./profileDetails.service";
import { WallPostService } from "./wallPost.service"
import { HomeComponent } from './home/home.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    StartComponent,
    HomeComponent,
    ProfileDetailsComponent
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
        path: 'home',
        component: HomeComponent
      },
      {
        path: '',
        redirectTo: '/start',
        pathMatch: 'full'
      },
      {
        path: 'profileDetails',
        component: ProfileDetailsComponent
      }
    ])
  ],
  providers: [ ProfileDetailsService, WallPostService ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
