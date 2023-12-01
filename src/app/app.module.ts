import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { MarvelAPIService } from './Service/marvel-api.service';
import { AllCharactersComponent } from './all-characters/all-characters.component';
import { ComicsComponent } from './comics/comics.component';
import { SeriesComponent } from './series/series.component';
import { BitacoraComponent } from './bitacora/bitacora.component';

@NgModule({
  declarations: [
    AppComponent,
    AllCharactersComponent,
    ComicsComponent,
    SeriesComponent,
    BitacoraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
