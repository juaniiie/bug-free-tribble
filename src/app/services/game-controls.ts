import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameControlsService {
    private levels: any = {
        beginner: {
            title: 'beginner',
            height: 9,
            width: 9,
            mines: 10
        },
        intermediate: {
            title: 'intermediate',
            height: 16,
            width: 16,
            mines: 40
        },
        expert: {
            title: 'expert',
            height: 16,
            width: 30,
            mines: 99
        },
        custom: {
            title: 'custom',
            height: 20,
            width: 30,
            mines: 145
        }
    };
    private level = 'beginner';
    private levelChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.level);

    /**
     * Returns levelChanges Behavior Subject
     * @name getLevelChanges
     * @returns { BehaviorSubject<any> }
     */
    public getLevelChanges(): BehaviorSubject<any> {
        return this.levelChanges;
    }

    /**
     * Sets level value and broadcasts level change
     * @name setLevel
     * @param { any } level
     */
    public setLevel(level): void {
        this.level = level.title;
        if (level.title === 'custom') {
            this.levels.custom = level;
        }
        this.levelChanges.next(this.level);
    }

    /**
     * Returns levels value
     * @name getLevels
     * @returns any
     */
    public getLevels(): any {
        return this.levels;
    }
}
