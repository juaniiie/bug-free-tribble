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
    }
    private level: string = 'beginner';
    private levelChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.level);

    public getLevelChanges(): BehaviorSubject<any> {
        return this.levelChanges;
    }

    public setLevel(level, height, width): void {
        this.level = level;

        if (level === 'custom') {
            this.levels.custom.height = height;
            this.levels.custom.width - width;
        }

        this.levelChanges.next(this.level);
    }

    // public getCurrentLevel(): string {
    //     return this.level;
    // }

    public getLevels(): any {
        return this.levels;
    }
}