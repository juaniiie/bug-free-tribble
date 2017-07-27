import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { BoardComponent } from './board.component';
import { GameStateService } from '../services/game-state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('BoardComponent', () => {
    let component: BoardComponent;
    let fixture: ComponentFixture<BoardComponent>;
    const mockStateService = {
        getChanges: () => {
            return new BehaviorSubject('in_progress');
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                BoardComponent
            ],
            providers: [
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
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
