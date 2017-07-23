import { Component, OnInit, Input } from '@angular/core';
import { Cell } from './cell/cell';
import * as _ from 'lodash';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() private size;
    @Input() private mines;
    private board = [];

    constructor() {
    }

    public ngOnInit() {
        this.generateBoard();
        this.setMines();
        console.log('this.board', this.board);
    }

    private randomIndex() {
        return Math.floor(Math.random() * this.size);
    }

    private coordDefined(x, y) {
        return this.board[x] && this.board[x][y];
    }

    private modifyAdjacentCells(x, y, callback) {
        let rotation = new Set([
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1] 
        ]);

        // rotation.forEach((coord) => {
        //     if (this.coordDefined(coord[0], coord[y]) && )


        //     console.log('coord', coord);
        //     console.log('thisvalue', this.board[coord[0]][coord[1]]);
        //     if (this.board[coord[0]] && this.board[coord[0]][coord[1]] && this.board[coord[0]][coord[1]] !== -1) {
        //         console.log('thisvalue', this.board[coord[0]][coord[1]]);
        //         this.board[coord[0]][coord[1]] = callback(this.board[coord[0]][coord[1]]);
        //     }
        // });
    }

    private setMines() {
        let minesToSet = this.mines;

        while (minesToSet > 0) {
            let x = this.randomIndex();
            let y = this.randomIndex();

            if (!this.board[x][y].isMine()) {
                this.board[x][y].setValue(-1);
                minesToSet--;
            }
        }
    }

    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            let row = new Array(this.size);
            row.fill(new Cell());                                         
            this.board.push(row);
        }
    }

}
