import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public level: string;
    public levels: any = this.controls.getLevels();

    constructor(private controls: GameControlsService) {
    }

    public ngOnInit() {
        this.controls.getLevelChanges().subscribe((level) => {
            console.log('levels', this.levels);
            console.log('new level in game co', level);
            this.level = level;
        });
    }

}
