import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../services/game-state';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public second: any = '000';
    public totalSeconds: number = 0;
    public interval: any;

    constructor(private game: GameStateService) {
    }

    public ngOnInit(): void {
        this.game.getChanges().subscribe((state) => {
            if (state === 'in_progress') {
                this.second = '000';
                this.resetTimer();
            } else if (state === 'end') {
                this.stopTimer();
            }
        });
    }

    private resetTimer(): void {
        this.interval = setInterval(() => {
            this.totalSeconds++;
            if (this.totalSeconds === 999) {
                this.stopTimer()
            } else {
                let s = this.totalSeconds.toString()
                this.second = s.length === 1 ?`00${s}` : s.length === 2 ? `0${s}` : `${s}`;
            }
        }, 1000);
    }

    private stopTimer(): void {
        clearInterval(this.interval);
    }

}
