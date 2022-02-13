import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GeneraSalva01Component } from './genera-salva01/genera-salva01.component';
import { GeneraSalva02Component } from './genera-salva02/genera-salva02.component';
import { GeneraSalva03Component } from './genera-salva03/genera-salva03.component';


@NgModule({
  declarations: [
    AppComponent,
    GeneraSalva01Component,
    GeneraSalva02Component,
    GeneraSalva03Component

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
