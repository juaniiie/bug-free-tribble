import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../services/game-state';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public second = '000';
    public totalSeconds = 0;
    public interval: any;

    constructor(private game: GameStateService) {
    }

    /**
     * Subscribes to game changes
     * @name ngOnInit
     */
    public ngOnInit(): void {
        this.game.getChanges().subscribe((state) => {
            if (state === 'reset') {
                this.second = '000';
                this.totalSeconds = 0;
                this.stopTimer();
            } else if (state === 'in_progress') {
                this.resetTimer();
            } else if (state === 'end' || state === 'win') {
                this.stopTimer();
            }
        });
    }
    
    /**
     * Starts timer
     * @name resetTimer
     */
    private resetTimer(): void {
        this.interval = setInterval(() => {
            this.totalSeconds++;
            if (this.totalSeconds === 999) {
                this.stopTimer();
            } else {
                const s = this.totalSeconds.toString();
                this.second = s.length === 1 ? `00${s}` : s.length === 2 ? `0${s}` : `${s}`;
            }
        }, 1000);
    }

    /**
     * Stops setInterval time, clears cache
     * @name stopTimer
     */
    private stopTimer(): void {
        clearInterval(this.interval);
    }

}
