import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';

@Component({
    selector: 'app-level-select',
    templateUrl: './level-select.component.html',
    styleUrls: ['./level-select.component.css']
})
export class LevelSelectComponent implements OnInit {
    public current: string = this.control.getCurrentLevel();
    public showOptions: boolean = false;
    private options: any;

    constructor(private control: GameControlsService) {
    }

    public ngOnInit(): void {
        this.control.getLevelChanges().subscribe((levels) => {
            this.options = levels;
        });
    }

    public toggleOptionsMenu(): void {
        this.showOptions = !this.showOptions;
    }

}
