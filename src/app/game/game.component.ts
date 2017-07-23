import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
    @Input() public size = 1;
    @Input() public mines = 0;
    private board = [];

    constructor() {

    }

    public ngOnInit() {

    }

    private randomIndex() {
        return Math.floor(Math.random() * this.size);
    }

    private populateAdjacentCells() {
        
    }

    private setMines() {
        let minesToSet = this.mines;

        while (minesToSet > 0) {
            let row = this.randomIndex();
            let col = this.randomIndex();

            if (this.board[row][col] !== -1) {
                this.board[row][col] = -1;
                minesToSet--;
            }
        }
    }

    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            let row = new Array(this.size);
            row.fill(0);                                         
            this.board.push(row);
        }
    }

}
