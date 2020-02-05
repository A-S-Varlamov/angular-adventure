import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AreaComponent } from './area/area.component';
import { TendersComponent } from './tenders/tenders.component';
import { WorldComponent } from './world/world.component';


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    AreaComponent,
    TendersComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
