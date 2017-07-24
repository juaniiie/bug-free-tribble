export class Cell {
    public value: number = 0;
    public visited: boolean = false;
    private coordinates = {
        x: 0,
        y: 0
    }
    private visible: boolean = false;
    private flagged: boolean = false;

    /**
     * Sets visited value to true
     * 
     * @name visit
     */
    public visit(): void {
        this.visited = true;
    }

    /**
     * Sets coordinates
     * 
     * @name setCoords
     * @param { number } x value
     * @param { number } y value
     */
    public setCoords(x, y): void {
        this.coordinates.x = x;
        this.coordinates.y = y;
    }

    /**
     * Gets coordinates
     * 
     * @name getCoords
     * @returns { any }
     */
    public getCoords(): any {
        return this.coordinates;
    }

    /**
     * Returns visible value
     * 
     * @name isVisible
     * @returns { boolean }
     */
    public isVisible(): boolean {
        return this.visible;
    }

    /**
     * Sets value to -1
     * 
     * @name setMine
     */
    public setMine(): void {
        this.value = -1;
    }

    /**
     * Returns wether value is -1
     * 
     * @name isMine
     * @returns { boolean }
     */
    public isMine(): boolean {
        return this.value === -1;
    }

    /**
     * Sets hidden value to false
     * 
     * @name show
     */
    public show(): void {
        this.visible = true;
    }

    /**
     * Increments value by param
     * 
     * @name incrementValueBy
     */
    public incrementValueBy(num): void {
        this.value = this.value + num;
    }

    /**
     * Resets class properties to default
     * 
     * @name reset
     */
    public reset(): void {
        this.value = 0;
        this.visible = false;
    }

    /**
     * Returns flagged value
     * 
     * @name isFlagged
     * @returns { boolean }
     */
    public isFlagged(): boolean {
        return this.flagged;
    }

    /**
     * Sets value of flagged
     * 
     * @name setFlag
     */
    public setFlag(val: boolean):void {
        this.flagged = val;
    }
}
