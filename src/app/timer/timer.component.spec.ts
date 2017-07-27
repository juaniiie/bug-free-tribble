import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';
import { GameStateService } from '../services/game-state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('TimerComponent', () => {
    let component: TimerComponent;
    let fixture: ComponentFixture<TimerComponent>;
    const mockStateService: any = {
        getChanges: () => {
            return new BehaviorSubject('in_progress');
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                TimerComponent
            ],
            providers: [
                {
                    provide: GameStateService,
                    useValue: mockStateService
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TimerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('component should be created', () => {
        expect(component).toBeTruthy();
    });
});
