import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameStateService {
    private gameStatus: string = null;
    private gameChange: BehaviorSubject<string> = new BehaviorSubject(this.gameStatus);

    public getChanges(): BehaviorSubject<string> {
        return this.gameChange
    }

    public getStatus(): string {
        return this.gameStatus;
    }

    public start(): void {
        this.gameStatus = 'in_progress';
        this.gameChange.next(this.gameStatus);
    }

    public end(): void {
        this.gameStatus = 'end';
        this.gameChange.next(this.gameStatus);
    }

    public restart(): void {
        this.gameStatus = 'reset';
        this.gameChange.next(this.gameStatus);
    }

    public win(): void {
        this.gameStatus ='win';
        this.gameChange.next(this.gameStatus);
    }
}