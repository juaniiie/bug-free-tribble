import { Component, OnInit, Input } from '@angular/core';
import { Board } from "./board/board";

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    @Input() public size = 1;
    @Input() public mines = 0;
    private board = new Board(this.size, this.mines);

    constructor() {
    }

    public ngOnInit() {

    }

}
