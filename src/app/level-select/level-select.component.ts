import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';
import * as _ from 'lodash';

@Component({
    selector: 'app-level-select',
    templateUrl: './level-select.component.html',
    styleUrls: ['./level-select.component.css']
})
export class LevelSelectComponent implements OnInit {
    public current: string;
    public showOptions: boolean = false;
    public levels: any = this.control.getLevels();
    public levelKeys: any[] = _.map(this.levels, (val, key) => {
        return key;
    });

    constructor(private control: GameControlsService) {
    }

    public ngOnInit(): void {
        this.control.getLevelChanges().subscribe((level) => {
            this.current = level;
        });
    }

    public toggleOptionsMenu(): void {
        this.showOptions = !this.showOptions;
    }

}
