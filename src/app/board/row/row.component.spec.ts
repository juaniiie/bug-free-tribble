import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { RowComponent } from './row.component';
import { GameStateService } from '../../services/game-state';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('RowComponent', () => {
    let component: RowComponent;
    let fixture: ComponentFixture<RowComponent>;
    const mockStateService = {
        getChanges: () => {
            return new BehaviorSubject('in_progress');
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                RowComponent
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
        fixture = TestBed.createComponent(RowComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
