export class King {
    constructor(matrix, thisx, thisy, figure, img) {
        this.matrix = matrix;
        this.thisx = thisx;
        this.thisy = thisy;
        this.img = img;
        this.figure = figure;
        this.canmovexy = [];
        this.ifmove = false;
    }
    can() {
        if (((this.thisx + 1) < 8)) {
            if (this.matrix[this.thisy][this.thisx + 1].figure !== "none") {
                if ((this.matrix[this.thisy][this.thisx + 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy, this.thisx + 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy, this.thisx + 1])
            }

        }
        if (((this.thisx - 1) >= 0)) {
            if (this.matrix[this.thisy][this.thisx - 1].figure !== "none") {
                if ((this.matrix[this.thisy][this.thisx - 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy, this.thisx - 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy, this.thisx - 1])
            }

        }
        if (((this.thisy + 1) < 8)) {
            if (this.matrix[this.thisy + 1][this.thisx].figure !== "none") {
                if ((this.matrix[this.thisy + 1][this.thisx].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy + 1, this.thisx])
                }
            }
            else {
                this.canmovexy.push([this.thisy + 1, this.thisx])
            }

        }
        if (((this.thisy - 1) >= 0)) {
            if (this.matrix[this.thisy - 1][this.thisx].figure !== "none") {
                if ((this.matrix[this.thisy - 1][this.thisx].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy - 1, this.thisx])
                }
            }
            else {
                this.canmovexy.push([this.thisy - 1, this.thisx])
            }

        }

        if (((this.thisy + 1) < 8) && ((this.thisx - 1) >= 0)) {
            if (this.matrix[this.thisy + 1][this.thisx - 1].figure !== "none") {
                if ((this.matrix[this.thisy + 1][this.thisx - 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy + 1, this.thisx - 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy + 1, this.thisx - 1])
            }

        }
        if ((((this.thisy + 1) < 8) && ((this.thisx + 1) < 8))) {
            if (this.matrix[this.thisy + 1][this.thisx + 1].figure !== "none") {
                if ((this.matrix[this.thisy + 1][this.thisx + 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy + 1, this.thisx + 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy + 1, this.thisx + 1])
            }

        }
        if ((((this.thisy - 1) >= 0) && ((this.thisx + 1) < 8))) {
            if (this.matrix[this.thisy - 1][this.thisx + 1].figure !== "none") {
                if ((this.matrix[this.thisy - 1][this.thisx + 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy - 1, this.thisx + 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy - 1, this.thisx + 1])
            }

        }
        if ((((this.thisy - 1) >= 0) && ((this.thisx - 1) >= 0))) {
            if (this.matrix[this.thisy - 1][this.thisx - 1].figure !== "none") {
                if ((this.matrix[this.thisy - 1][this.thisx - 1].figure.img.indexOf(this.figure) === -1)) {
                    this.canmovexy.push([this.thisy - 1, this.thisx - 1])
                }
            }
            else {
                this.canmovexy.push([this.thisy - 1, this.thisx - 1])
            }
          
        }
    }
}