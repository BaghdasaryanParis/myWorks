export class CanPlay {
    constructor(matrix, thisx, thisy, canx, cany, figure, order) {

        this.matrix = matrix;
        this.thisx = thisx;
        this.thisy = thisy;
        this.canx = canx;
        this.cany = cany;
        this.figure = figure;
        this.order = order;

    }
    canMove() {
        this.figure.can();
        if (this.figure.img.indexOf("king") !== -1) {
            if (this.poxatexum(this.figure.ifmove)) {
                return true;
            }
        }
        for (let i = 0; i < this.figure.canmovexy.length; i++) {
            if ((this.figure.canmovexy[i][0] === this.cany) && (this.figure.canmovexy[i][1] === this.canx)) {

                if (this.aftermove() === false) {
                    return false;
                }
                else {
                    if (this.figure.img.indexOf("king") !== -1) {
                        this.figure.ifmove = true;
                    }
                    if (this.figure.img.indexOf("rook") !== -1) {
                        this.figure.ifmove = true;

                    }
                    this.figure.thisy = this.cany;
                    this.figure.thisx = this.canx;
                    this.figure.canmovexy = [];
                    this.figure.can();
                    return true;
                }


            }
        }


    }
    change(matrix) {
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if (matrix[y][x].figure !== "none") {
                    matrix[y][x].figure.matrix = matrix;
                    matrix[y][x].figure.canmovexy = [];
                    matrix[y][x].figure.can();
                }
            }
        }
    }
    aftermove() {
        let matrixdupe = this.matrix;
        matrixdupe[this.cany][this.canx].figure = this.figure;
        matrixdupe[this.thisy][this.thisx].figure = "none";
        this.change(matrixdupe)
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if ((matrixdupe[y][x].figure !== "none") && (matrixdupe[y][x].figure.figure.indexOf(this.order) === -1)) {
                    if (matrixdupe[y][x].figure.shaxbool === true) {
                        matrixdupe[this.thisy][this.thisx].figure = this.figure;
                        matrixdupe[this.cany][this.canx].figure = "none";
                        this.change(matrixdupe)
                        return false;
                    }
                }
            }
        }
    }
    ifpox(xcan) {
        let matrixdupe = this.matrix;
        matrixdupe[this.thisy][xcan].figure = this.figure;
        matrixdupe[this.thisy][this.thisx].figure = "none";
        this.change(matrixdupe)
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if ((matrixdupe[y][x].figure !== "none") && (matrixdupe[y][x].figure.figure.indexOf(this.order) === -1)) {
                    if (matrixdupe[y][x].figure.shaxbool === true) {
                        matrixdupe[this.thisy][this.thisx].figure = this.figure;
                        matrixdupe[this.thisy][xcan].figure = "none";
                        this.change(matrixdupe)
                        return false;
                    }
                }
            }
        }
        matrixdupe[this.thisy][this.thisx].figure = this.figure;
        matrixdupe[this.thisy][xcan].figure = "none";
    }
    onshaxdontmove(){
        this.change(this.matrix)
        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {
                if ((this.matrix[y][x].figure !== "none") && (this.matrix[y][x].figure.figure.indexOf(this.order) === -1)) {
                    if (this.matrix[y][x].figure.shaxbool === true) {
                        return false;
                    }
                }
            }
        }
    }
    poxatexum(qayl) {
        if (this.figure.img.indexOf("king") !== -1) {
            if (qayl === false) {
                if ((Math.abs(this.thisx - this.canx)) === 2) {
                    if (this.canx > this.thisx) {

                        if (this.matrix[this.thisy][7].figure !== "none") {
                            if (this.matrix[this.thisy][7].figure.img.indexOf("rook") !== -1) {
                                if (this.matrix[this.thisy][7].figure.ifmove === false) {
                                    if ((this.matrix[this.thisy][this.thisx + 1].figure === "none") && this.matrix[this.thisy][this.thisx + 2].figure === "none") {
                                        if ((this.ifpox(this.thisx + 1) !== false)&&(this.ifpox((this.thisx + 2)) !== false)&&(this.onshaxdontmove() !== false)) {
                                                return true;
                                        }
                                    }
                                }
                            }
                        }

                    }
                    else if (this.canx < this.thisx) {

                        if (this.matrix[this.thisy][0].figure !== "none") {
                            if (this.matrix[this.thisy][0].figure.img.indexOf("rook") !== -1) {
                                if (this.matrix[this.thisy][0].figure.ifmove === false) {
                                    if ((this.matrix[this.thisy][this.thisx - 1].figure === "none") && this.matrix[this.thisy][this.thisx - 2].figure === "none") {
                                        if ((this.ifpox(this.thisx - 1) !== false) && (this.ifpox(this.thisx - 2) !== false)&&(this.onshaxdontmove() !== false)) {
                                            return true;
                                        }
                                    }
                                }
                            }
                        }

                    }
                }
            }
        }
    }
}

