import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { BoardComponent } from './board/board.component';
import { RowComponent } from './board/row/row.component';
import { GameControlsService } from './services/game-controls';
import { CellColorDirective } from './board/row/color-directive/color.directive';
import { TimerComponent } from './timer/timer.component';
import { GameStateService } from './services/game-state';
import { LevelSelectComponent } from './level-select/level-select.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    BoardComponent,
    RowComponent,
    CellColorDirective,
    TimerComponent,
    LevelSelectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
      GameControlsService,
      GameStateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
