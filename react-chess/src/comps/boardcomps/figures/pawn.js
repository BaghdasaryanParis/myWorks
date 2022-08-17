export class Pawn {
    constructor(matrix, thisx, thisy, figure, img) {
        this.matrix = matrix;
        this.thisx = thisx;
        this.thisy = thisy;
        this.figure = figure;
        this.img = img;
        this.canmovexy = [[0,0]];
        this.shaxbool = false;
    }
    can() {
        this.shaxbool = false;
        if (this.figure === "white") {
            // spitak 
            if (((this.thisy - 1) >= 0)) {
                if (this.matrix[this.thisy - 1][this.thisx].figure === "none") {
                    this.canmovexy.push([this.thisy - 1, this.thisx])
                    if (((this.thisy - 2) >= 0)) {
                        if (this.matrix[this.thisy - 2][this.thisx].figure === "none") {
                            if (this.thisy === 6) {

                                this.canmovexy.push([this.thisy - 2, this.thisx])
                            }
                        }
                    }
                }


            }
            if (((this.thisy - 1) >= 0) && ((this.thisx - 1) >= 0)) {
                if ((this.matrix[this.thisy - 1][this.thisx - 1].figure !== "none" && (this.matrix[this.thisy - 1][this.thisx - 1].figure.img.indexOf(this.figure) === -1))) {
                    if ((this.matrix[this.thisy - 1][this.thisx - 1].figure.img.indexOf("king") !== -1)) {
                        this.shaxbool = true;
                    }
                    else {
                        this.canmovexy.push([this.thisy - 1, this.thisx - 1])
                    }


                }
            }

            if (((this.thisy - 1) >= 0) && ((this.thisx + 1) < 8)) {
                if ((this.matrix[this.thisy - 1][this.thisx + 1].figure !== "none" && (this.matrix[this.thisy - 1][this.thisx + 1].figure.img.indexOf(this.figure) === -1))) {
                    if ((this.matrix[this.thisy - 1][this.thisx + 1].figure.img.indexOf("king") !== -1)) {
                        this.shaxbool = true;
                    }
                    else {
                        this.canmovexy.push([this.thisy - 1, this.thisx + 1])
                    }

                }
            }


        }
        if (this.figure === "black") {
            // sev 
            if (((this.thisy + 1) < 8)) {
                if (this.matrix[this.thisy + 1][this.thisx].figure === "none") {
                    this.canmovexy.push([this.thisy + 1, this.thisx])
                    if (((this.thisy + 2) < 8)) {
                        if (this.matrix[this.thisy + 2][this.thisx].figure === "none") {
                            if (this.thisy === 1) {
                                this.canmovexy.push([this.thisy + 2, this.thisx])
                            }
                        }
                    }
                }
            }
            if (((this.thisy + 1) < 8) && ((this.thisx - 1) >= 0)) {
                if ((this.matrix[this.thisy + 1][this.thisx - 1].figure !== "none" && (this.matrix[this.thisy + 1][this.thisx - 1].figure.img.indexOf(this.figure) === -1))) {
                    if ((this.matrix[this.thisy + 1][this.thisx - 1].figure.img.indexOf("king") !== -1)) {
                        this.shaxbool = true;
                    }
                    else {
                        this.canmovexy.push([this.thisy + 1, this.thisx - 1])
                    }


                }
            }

            if (((this.thisy + 1) < 8) && ((this.thisx + 1) < 8)) {
                if ((this.matrix[this.thisy + 1][this.thisx + 1].figure !== "none" && (this.matrix[this.thisy + 1][this.thisx + 1].figure.img.indexOf(this.figure) === -1))) {
                    if ((this.matrix[this.thisy + 1][this.thisx + 1].figure.img.indexOf("king") !== -1)) {
                        this.shaxbool = true;
                    }
                    else {
                        this.canmovexy.push([this.thisy + 1, this.thisx + 1])
                    }

                }
            }
        }
    }
}