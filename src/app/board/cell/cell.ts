export class Cell {
    private value = 0;
    private hidden = true;
    
    public isHidden() {
        return this.hidden;
    }

    public isMine() {
        return this.value === -1;
    }

    public show() {
        this.hidden = false;
    }

    public setValue(value) {
        this.value = value;
    }

    public reset() {
        this.value = 0;
        this.hidden = true;
    }

}