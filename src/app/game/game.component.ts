import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';
import { GameStateService } from '../services/game-state';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public level: string;
    public levels: any = this.controls.getLevels();
    public showReset: boolean = false;

    constructor(private controls: GameControlsService,
                private game: GameStateService) {
    }

    public ngOnInit() {
        this.controls.getLevelChanges().subscribe((level) => {
            this.level = level;
        });
        this.game.getChanges().subscribe((state) => {
            if (state !== null) {
                this.showReset = state === 'end';
            } 
        });
    }

    public restartGame(): void {
        this.game.restart();
        this.showReset = false;
    }

}
