export class Bishop {
    constructor(matrix, thisx, thisy, figure, img) {
        this.matrix = matrix;
        this.thisx = thisx;
        this.thisy = thisy;
        this.img = img;
        this.figure = figure;
        this.canmovexy = [];
        this.dontmove = [];
        this.shaxbool = false;
    }
    can() {
        this.shaxbool = false;
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i < 8; i++) {
                if (j === 0) {

                    if (((this.thisy - i) < 0) || ((this.thisx - i) < 0)) {
                        break;
                    }
                    else if ((this.matrix[this.thisy - i][this.thisx - i].figure !== "none")) {
                        if ((this.matrix[this.thisy - (i)][this.thisx - (i)].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - (i)][this.thisx - (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.canmovexy.push([this.thisy - i, this.thisx - i]);
                            break;
                        }
                        else if ((this.matrix[this.thisy - (i)][this.thisx - (i)].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - (i)][this.thisx - (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.shaxbool = true;
                            break;
                        }
                        else{
                            break;
                        }
                    }
                    else {

                        let arr = [];
                        arr.push(this.thisy - i, this.thisx - i)
                        this.canmovexy.push(arr)

                    }

                }
                else if (j === 1) {
                    if (((this.thisy + i) > 7) || ((this.thisx + i) > 7)) {
                        break;
                    }
                    else if ((this.matrix[this.thisy + i][this.thisx + i].figure !== "none")) {
                        if ((this.matrix[this.thisy + (i)][this.thisx + (i)].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + (i)][this.thisx + (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.canmovexy.push([this.thisy + i, this.thisx + i])
                            break;
                        }
                        else if ((this.matrix[this.thisy + (i)][this.thisx + (i)].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + (i)][this.thisx + (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.shaxbool = true;
                            break;
                        }
                        else{
                            break;
                        }
                    }


                    else {
                        let arr = [];
                        arr.push(this.thisy + i, this.thisx + i)
                        this.canmovexy.push(arr)
                    }
                }
                else if (j === 2) {

                    if (((this.thisy - i) < 0) || ((this.thisx + i) > 7)) {
                        break;
                    }
                    else if ((this.matrix[this.thisy - i][this.thisx + i].figure !== "none")) {
                        if ((this.matrix[this.thisy - (i)][this.thisx + (i)].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy - (i)][this.thisx + (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.canmovexy.push([this.thisy - i, this.thisx + i]);
                            break;
                        }
                        else if ((this.matrix[this.thisy - (i)][this.thisx + (i)].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy - (i)][this.thisx + (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.shaxbool = true;
                            break;
                        }
                        else{
                            break;
                        }
                    }

                    else {
                        let arr = [];
                        arr.push(this.thisy - i, this.thisx + i)
                        this.canmovexy.push(arr)
                    }
                }
                else if (j === 3) {

                    if (((this.thisy + i) > 7) || ((this.thisx - i) < 0)) {
                        break;
                    }
                    else if ((this.matrix[this.thisy + i][this.thisx - i].figure !== "none")) {
                        if ((this.matrix[this.thisy + (i)][this.thisx - (i)].figure.img.indexOf("king") === -1) && (this.matrix[this.thisy + (i)][this.thisx - (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.canmovexy.push([this.thisy + i, this.thisx - i])
                            break;
                        }
                        else if ((this.matrix[this.thisy + (i)][this.thisx - (i)].figure.img.indexOf("king") !== -1) && (this.matrix[this.thisy + (i)][this.thisx - (i)].figure.img.indexOf(this.figure) === -1)) {
                            this.shaxbool = true;
                            break;
                        }
                        else{
                            break;
                        }
                    }

                    else {
                        let arr = [];
                        arr.push(this.thisy + i, this.thisx - i)
                        this.canmovexy.push(arr)



                    }
                }
            }

        }

    }

}