import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StartComponent } from './start/start.component';
import {PostService} from "./post.service";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
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
  providers: [ PostService ],
  bootstrap: [AppComponent],
  exports: [ RouterModule ]
})
export class AppModule { }
