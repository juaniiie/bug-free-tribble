import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    public size = 9;
    public mines = 10;

    constructor() {
    }

    public ngOnInit() {
    }

}
