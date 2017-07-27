import { Component, OnInit } from '@angular/core';
import { GameControlsService } from '../services/game-controls';
import { GameStateService } from '../services/game-state';
import { trigger, state, style, animate, transition, group } from '@angular/animations';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css'],
    animations: [
        trigger('showMessage', [
            state('true', style({
                transform: 'translateX(0)'
            })),
            transition('void => true', [
                style({
                    transform: 'translateX(-100%)'
                }),
                animate('0.2s ease-in-out')
            ]),
            transition('true => void', [
                animate('0.2s ease-in-out', style({
                    transform: 'translateX(100%)'
                }))
            ])
        ])
    ]
})
export class GameComponent implements OnInit {
    public level: string;
    public levels: any = this.controls.getLevels();
    public showReset: boolean = false;
    public showMsg: boolean = false;
    public message: string = '';
    private interval: any;


    constructor(private controls: GameControlsService,
                private game: GameStateService) {
    }

    public ngOnInit() {
        this.controls.getLevelChanges().subscribe((level) => {
            this.level = level;
        });
        this.game.getChanges().subscribe((state) => {
            if (state !== null) {
                this.showReset = state === 'end' || state === 'win';
            }
            if (state === 'end') {
                this.triggerMessage('You Lose :( !');
            }
            if (state === 'win') {
                this.triggerMessage('You Win :) !');
            }
        });
    }

    public triggerMessage(msg): void {
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.message = msg;
        this.showMsg = true;
        this.interval = setTimeout(() => {
            this.showMsg = false;
        }, 1000);
    }

    public restartGame(): void {
        this.game.restart();
        this.showReset = false;
    }

}
