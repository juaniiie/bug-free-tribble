import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { LevelSelectComponent } from './level-select.component';
import { GameControlsService } from '../services/game-controls';
import { GameStateService } from '../services/game-state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('LevelSelectComponent', () => {
    let component: LevelSelectComponent;
    let fixture: ComponentFixture<LevelSelectComponent>;
    const mockControlService = {
        getLevels: () => {
            return {};
        },
        getLevelChanges: () => {
            return new BehaviorSubject('custom');
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                LevelSelectComponent
            ],
            providers: [
                {
                    provide: GameControlsService,
                    useValue: mockControlService
                },
                {
                    provide: GameStateService,
                    useValue: {}
                }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LevelSelectComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
