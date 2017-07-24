import { Injectable } from '@angular/core';

@Injectable()
export class ControlsService {
    private flagOn: boolean = false;
    private unFlagOn: boolean = false;
    private currentLevel: number = 9;

    public clickUnFlag(): void {
        this.unFlagOn = !this.unFlagOn;

        if (this.unFlagOn && this.flagOn) {
            this.flagOn = false;
        }
    }

    public clickFlag(): void {
        this.flagOn = !this.flagOn;

        if (this.flagOn && this.unFlagOn) {
            this.unFlagOn = false;
        }
    }

    public isFlagOn(): boolean {
        console.log('flag on in cell', this.flagOn);
        return this.flagOn;
    }

    public isUnFlagOn(): boolean {
        return this.unFlagOn;
    }

    
}