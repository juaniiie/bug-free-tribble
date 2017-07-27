import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameStateService {
    private gameStatus: string = null;
    private gameChange: BehaviorSubject<string> = new BehaviorSubject(this.gameStatus);

    /**
     * Returns game changes behavior subject
     * @name getChanges
     * @returns { BehaviorSubject<string>}
     */
    public getChanges(): BehaviorSubject<string> {
        return this.gameChange;
    }

    /**
     * Returns current game status
     * @name getStatus
     * @returns { string }
     */
    public getStatus(): string {
        return this.gameStatus;
    }

    /**
     * Sets game status, broadcasts status change
     * @name start
     */
    public start(): void {
        this.gameStatus = 'in_progress';
        this.gameChange.next(this.gameStatus);
    }

    /**
     * Sets game status, broadcasts status change
     * @name end
     */
    public end(): void {
        this.gameStatus = 'end';
        this.gameChange.next(this.gameStatus);
    }

    /**
     * Sets game status, broadcasts status change
     * @name restart
     */
    public restart(): void {
        this.gameStatus = 'reset';
        this.gameChange.next(this.gameStatus);
    }

    /**
     * Sets game status, broadcasts status change
     * @name win
     */
    public win(): void {
        this.gameStatus = 'win';
        this.gameChange.next(this.gameStatus);
    }
}
