import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './board/row/row.component';
import { ControlsService } from './services/game-controls';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      ControlsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
