import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { GameComponent } from './game.component';
import { GameControlsService } from '../services/game-controls';
import { GameStateService } from '../services/game-state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('GameComponent', () => {
    let component: GameComponent;
    let fixture: ComponentFixture<GameComponent>;
    const mockControlService = {
        getLevels: () => {
            return {
                beginner: {
                    height: 9,
                    width: 9,
                    mines: 10
                }
            };
        },
        getLevelChanges: () => {
            return new BehaviorSubject('beginner');
        }
    };
    const mockStateService = {
        getChanges: () => {
            return new BehaviorSubject('in_progress');
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                GameComponent
            ],
            providers: [
                {
                    provide: GameControlsService,
                    useValue: mockControlService
                },
                {
                    provide: GameStateService,
                    useValue: mockStateService
                }
            ],
            schemas: [
                NO_ERRORS_SCHEMA
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(GameComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
