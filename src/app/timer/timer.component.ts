import { Component, OnInit } from '@angular/core';
import { GameStateService } from '../services/game-state';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
    public hour: any = '00';
    public minute: any = '00';
    public second: any = '00';
    public totalMilliSeconds: number = 0;
    public interval: any;

    constructor(private game: GameStateService) {
    }

    public ngOnInit(): void {
        this.game.getChanges().subscribe((state) => {
            if (state === 'in_progress') {
                this.resetTimer();
            } else if (state === 'end') {
                this.stopTimer();
            }
        });
    }

    private resetTimer(): void {
        this.interval = setInterval(() => {
            this.totalMilliSeconds++;
            let conversion = this.totalMilliSeconds / 1000;
            this.second = conversion % 60;
            conversion /= 60;
            this.minute = conversion % 60;
            conversion /= 60;
            this.hour = conversion % 24;
        }, 1000);
    }

    private stopTimer(): void {
        clearInterval(this.interval);
        this.hour = '00';
        this.second = '00';
        this.minute = '00';
    }

}
