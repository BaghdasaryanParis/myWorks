import React from 'react';
import { Bishop } from '../boardcomps/figures/bishop';
import { King } from '../boardcomps/figures/king';
import { Knight } from "../boardcomps/figures/knight";
import { Pawn } from "../boardcomps/figures/pawn";
import { Queen } from "../boardcomps/figures/queen";
import { Rook } from "../boardcomps/figures/rook";
import { Cale } from './cale';
export class Place extends React.Component {



    constructor(props) {
        super(props);
        this.matrix = [];

    }
    stexcel() {
        for (let y = 0; y < 8; y++) {
            let arr = [];
            for (let x = 0; x < 8; x++) {
                if ((x + y) % 2 === 0) {
                    arr.push(new Cale(x, y, "none", "white"))
                }
                else {
                    arr.push(new Cale(x, y, "none", "black"))
                }
            }
            this.matrix.push(arr);
        }

    }

    phix() {
        // sev
        this.matrix[0][2].figure = new Bishop(this.matrix, 2, 0, "black", "black-bishop");
        this.matrix[0][5].figure = new Bishop(this.matrix, 5, 0, "black", "black-bishop");
        // spitak 
        this.matrix[7][2].figure = new Bishop(this.matrix, 2, 7, "white", "white-bishop");
        this.matrix[7][5].figure = new Bishop(this.matrix, 5, 7, "white", "white-bishop");
    }
    arqa() {
        // sev
        this.matrix[0][4].figure = new King(this.matrix, 4, 0, "black", "black-king");

        // spitak 
        this.matrix[7][4].figure = new King(this.matrix, 4, 7, "white", "white-king");
    }
    dzi() {
        // sev
        this.matrix[0][1].figure = new Knight(this.matrix, 1, 0, "black", "black-knight");
        this.matrix[0][6].figure = new Knight(this.matrix, 6, 0, "black", "black-knight");;
        // spitak 
        this.matrix[7][1].figure = new Knight(this.matrix, 1, 7, "white", "white-knight");
        this.matrix[7][6].figure = new Knight(this.matrix, 6, 7, "white", "white-knight");
    }
    zinvor() {
        for (let i = 0; i < 8; i++) {
            // sev
            this.matrix[1][i].figure = new Pawn(this.matrix, i, 1, "black", "black-pawn");
            // spitak 
            this.matrix[6][i].figure = new Pawn(this.matrix, i, 6, "white", "white-pawn");
        }
    }
    taguhi() {
        // sev
        this.matrix[0][3].figure = new Queen(this.matrix, 3, 0, "black", "black-queen");
        // spitak 
        this.matrix[7][3].figure = new Queen(this.matrix, 3, 7, "white", "white-queen");
    }
    navak() {
        // sev
        this.matrix[0][0].figure = new Rook(this.matrix, 0, 0, "black", "black-rook");
        this.matrix[0][7].figure = new Rook(this.matrix, 7, 0, "black", "black-rook");
        // spitak 
        this.matrix[7][0].figure = new Rook(this.matrix, 0, 7, "white", "white-rook");
        this.matrix[7][7].figure = new Rook(this.matrix, 7, 7, "white", "white-rook");
    }
    figures() {
        this.navak();
        this.taguhi();
        this.zinvor();
        this.dzi();
        this.phix();
        this.arqa();
    }

    figuresOnBoard(x, y, s) {
        let coords = s[s.indexOf(x)][x.indexOf(y)];


        if (coords.figure !== "none") {
            return <img src={require(`../img/${coords.figure.img}.png`)} alt="img" />
        }
    }
}
