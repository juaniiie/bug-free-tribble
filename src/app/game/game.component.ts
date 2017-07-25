import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public level: any;
    public size = 9;
    public mines = 10;

    constructor(private controls: GameControlsService) {
    }

    public ngOnInit() {
        this.controls.getLevelChanges().subscribe((level) => {
            this.level = level;
        });
    }

}
