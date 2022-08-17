export class Knight {
    constructor(matrix, thisx, thisy, figure, img) {
        this.matrix = matrix;
        this.thisx = thisx;
        this.thisy = thisy;
        this.img = img;
        this.figure = figure;
        this.canmovexy = [];
        this.shaxbool = false;
    }
    can() {
        this.shaxbool = false;
        if ((parseInt(this.thisy + 2) <= 7) && (parseInt(this.thisx + 1) <= 7)) {
            if ((this.matrix[this.thisy + 2][this.thisx + 1].figure === "none") || ((this.matrix[this.thisy + 2][this.thisx + 1].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + 2][this.thisx + 1].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy + 2, this.thisx + 1])
            }
            else if ((this.matrix[this.thisy + 2][this.thisx + 1].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + 2][this.thisx + 1].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }

        }
        if (((parseInt(this.thisy + 2) <= 7) && (parseInt(this.thisx - 1) >= 0))) {
            if ((this.matrix[this.thisy + 2][this.thisx - 1].figure === "none") || ((this.matrix[this.thisy + 2][this.thisx - 1].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + 2][this.thisx - 1].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy + 2, this.thisx - 1])
            }
            else if ((this.matrix[this.thisy + 2][this.thisx - 1].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + 2][this.thisx - 1].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }

        }


        if (((parseInt(this.thisy - 2) >= 0) && (parseInt(this.thisx + 1) <= 7))) {
            if ((this.matrix[this.thisy - 2][this.thisx + 1].figure === "none") || ((this.matrix[this.thisy - 2][this.thisx + 1].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - 2][this.thisx + 1].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy - 2, this.thisx + 1])
            }

            else if ((this.matrix[this.thisy - 2][this.thisx + 1].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - 2][this.thisx + 1].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }
        if ((parseInt(this.thisy - 2) >= 0) && (parseInt(this.thisx - 1) >= 0)) {

            if ((this.matrix[this.thisy - 2][this.thisx - 1].figure === "none") || ((this.matrix[this.thisy - 2][this.thisx - 1].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - 2][this.thisx - 1].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy - 2, this.thisx - 1])
            }
            else if ((this.matrix[this.thisy - 2][this.thisx - 1].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - 2][this.thisx - 1].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }


        if ((parseInt(this.thisy + 1) <= 7) && (parseInt(this.thisx + 2) <= 7)) {

            if ((this.matrix[this.thisy + 1][this.thisx + 2].figure === "none") || ((this.matrix[this.thisy + 1][this.thisx + 2].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + 1][this.thisx + 2].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy + 1, this.thisx + 2])
            }
            else if ((this.matrix[this.thisy + 1][this.thisx + 2].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + 1][this.thisx + 2].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }
        if ((parseInt(this.thisy + 1) <= 7) && (parseInt(this.thisx - 2) >= 0)) {

            if ((this.matrix[this.thisy + 1][this.thisx - 2].figure === "none") || ((this.matrix[this.thisy + 1][this.thisx - 2].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + 1][this.thisx - 2].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy + 1, this.thisx - 2])
            }
            else if ((this.matrix[this.thisy + 1][this.thisx - 2].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + 1][this.thisx - 2].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }


        if (((parseInt(this.thisy - 1) >= 0) && (parseInt(this.thisx - 2) >= 0))) {

            if ((this.matrix[this.thisy - 1][this.thisx - 2].figure === "none") || ((this.matrix[this.thisy - 1][this.thisx - 2].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - 1][this.thisx - 2].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy - 1, this.thisx - 2])
            }
            else if ((this.matrix[this.thisy - 1][this.thisx - 2].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - 1][this.thisx - 2].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }
        if ((parseInt(this.thisy - 1) >= 0) && (parseInt(this.thisx + 2) <= 7)) {
            if ((this.matrix[this.thisy - 1][this.thisx + 2].figure === "none") || ((this.matrix[this.thisy - 1][this.thisx + 2].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - 1][this.thisx + 2].figure.img.indexOf(this.figure) === -1))) {
                this.canmovexy.push([this.thisy - 1, this.thisx + 2])
            }

            else if ((this.matrix[this.thisy - 1][this.thisx + 2].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - 1][this.thisx + 2].figure.img.indexOf(this.figure) === -1)) {
                this.shaxbool = true;
            }
        }

    }
}