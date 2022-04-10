import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceholderTextComponent } from './components/placeholder-text/placeholder-text.component';
import { PlaceholderContactInfoComponent } from './components/placeholder-contact-info/placeholder-contact-info.component';
import { PlaceholderLocationInfoComponent } from './components/placeholder-location-info/placeholder-location-info.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderTextComponent,
    PlaceholderContactInfoComponent,
    PlaceholderLocationInfoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
