import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class GameControlsService {
    private levels: any = {
        beginner: {
            height: 9,
            width: 9,
            mines: 10
        },
        intermediate: {
            height: 16,
            width: 16,
            mines: 40
        },
        expert: {
            height: 16,
            width: 30,
            mines: 99
        },
        custom: {
            height: 20,
            width: 30,
            mines: 145
        }
    }
    private level: string = 'beginner';
    private levelChanges: BehaviorSubject<any> = new BehaviorSubject<any>(this.levels[this.level]);
    // private flagOn: boolean = false;
    // private unFlagOn: boolean = false;
    // private currentLevel: number = 9;

    // public clickUnFlag(): void {
    //     this.unFlagOn = !this.unFlagOn;

    //     if (this.unFlagOn && this.flagOn) {
    //         this.flagOn = false;
    //     }
    // }

    // public clickFlag(): void {
    //     this.flagOn = !this.flagOn;

    //     if (this.flagOn && this.unFlagOn) {
    //         this.unFlagOn = false;
    //     }
    // }

    // public isFlagOn(): boolean {
    //     return this.flagOn;
    // }

    // public isUnFlagOn(): boolean {
    //     return this.unFlagOn;
    // }

    public getLevelChanges(): BehaviorSubject<any> {
        return this.levelChanges;
    }

    
}