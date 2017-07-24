import { Injectable } from '@angular/core';

@Injectable()
class ControlService {
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
        
    }
}