import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaceholderTextComponent } from './components/placeholder-text/placeholder-text.component';
import { PlaceholderContactInfoComponent } from './components/placeholder-contact-info/placeholder-contact-info.component';
import { PlaceholderLocationInfoComponent } from './components/placeholder-location-info/placeholder-location-info.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LeaderboardPlayerComponent } from './components/leaderboard-player/leaderboard-player.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PlaceholderTextComponent,
    PlaceholderContactInfoComponent,
    PlaceholderLocationInfoComponent,
    LeaderboardComponent,
    LeaderboardPlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
