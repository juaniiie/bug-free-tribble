import { Component, OnInit, Input } from '@angular/core';
import { Cell } from '../board/row/cell';
import * as _ from 'lodash';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
    @Input() private size: number;
    @Input() private mines: number;
    private board: any[] = [];

    /**
     * Initializes board
     * @name ngOnInit
     */
    public ngOnInit(): void {
        this.generateBoard();
        this.setMines();
    }

    /**
     * Generates random number from 0 to size,
     * inclusive
     * @name randomIndex
     * @returns { number }
     */
    private randomIndex(): number {
        return Math.floor(Math.random() * this.size);
    }

    /**
     * Checks if x and y point to defined cell
     * in board
     * @name cellIsDefined
     * @param { number } x
     * @param { number } x
     * @returns { boolean }
     */
    private cellIsDefined(x, y): boolean {
        return this.board[x] && this.board[x][y];
    }

    /**
     * Returns corresponding rotation
     * x and y values derived from coordinate
     * passed in
     * @name getRotationSet
     * @param { number } x
     * @param { number } y
     * @returns { Set<any[]> }
     */
    private getRotationSet(x, y): Set<any[]> {
        return new Set([
            [x - 1, y - 1],
            [x - 1, y],
            [x - 1, y + 1],
            [x, y - 1],
            [x, y + 1],
            [x + 1, y - 1],
            [x + 1, y],
            [x + 1, y + 1]
        ]);
    }

    /**
     * Modifies values in the 8 cells that surround the
     * cell identified by the passed in x and y
     * @name modifyAdjacentCells
     * @param { number } x
     * @param { number } y
     */
    private modifyAdjacentCells(x, y): void {
        const rotation = this.getRotationSet(x, y);

        rotation.forEach((cellCoords: any[]) => {
            const i = cellCoords[0];
            const j = cellCoords[1];

            if (this.cellIsDefined(i, j) && !this.board[i][j].isMine()) {
                this.board[i][j].incrementValueBy(1);
            }
        });
    }

    /**
     * Sets mines in randomized cells in board
     * @name setMines
     */
    private setMines(): void {
        let minesToSet: number = this.mines;

        while (minesToSet > 0) {
            const x: number = this.randomIndex();
            const y: number = this.randomIndex();

            if (!this.board[x][y].isMine()) {
                this.board[x][y].setMine();
                this.modifyAdjacentCells(x, y);
                minesToSet--;
            }
        }
    }

    /**
     * Generates row arrays and cells
     * @name generateBoard
     */
    private generateBoard() {
        for (let i = 0; i < this.size; i++) {
            const row: any[] = [];
            for (let j = 0; j < this.size; j++) {
                row.push(new Cell());
            }
            this.board.push(row);
        }
    }

}
