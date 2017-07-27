import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { GameControlsService } from '../services/game-controls';
import * as _ from 'lodash';

@Component({
    selector: 'app-level-select',
    templateUrl: './level-select.component.html',
    styleUrls: ['./level-select.component.css'],
    animations: [
        trigger('openState', [
            state('true', style({
                transform: 'translateY(0)',
                height: '100%',
                opacity: 1
            })),
            transition('void => true', [
                style({
                    transform: 'translateY(-10px)',
                    height: '0',
                    opacity: 0
                }),
                animate('200ms ease')
            ]),
            transition('true => void', [
                animate('200ms ease', style({
                    transform: 'translateY(-10px)',
                    height: '0',
                    opacity: 0
                }))
            ])
        ])
    ]
})
export class LevelSelectComponent implements OnInit {
    public current: string;
    public showOptions = false;
    public levels: any = this.control.getLevels();
    public levelIterable: any[] = _.map(this.levels, (val) => {
        return val;
    });

    constructor(private control: GameControlsService) {
    }

    /**
     * Subscribes to levelChanges
     * @name ngOnInit
     */
    public ngOnInit(): void {
        this.control.getLevelChanges().subscribe((level) => {
            this.current = level;
        });
    }

    /**
     * Toggles showOptions value
     * @name toggleOptionsMenu
     */
    public toggleOptionsMenu(): void {
        this.showOptions = !this.showOptions;
    }

    /**
     * Sets current level in GameControlsService
     * @name handleLevelSelect
     */
    public handleLevelSelect(): void {
        const level = this.levels[this.current];
        this.control.setLevel(level);
        this.current = level.title;
        this.showOptions = false;
    }
}
