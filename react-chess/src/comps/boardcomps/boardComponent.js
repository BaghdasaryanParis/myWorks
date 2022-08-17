import "../place/place.css"
import { useState } from "react";
import { CanPlay } from "./canPlay";
import { Bishop } from "./figures/bishop";
import { Rook } from "./figures/rook";
import { Queen } from "./figures/queen";
import { Knight } from "./figures/knight";

function BoardComponent(props) {
    

    const [selectedFigure, setSelectedFigure] = useState({ x: 0, y: 0, figure: "" });
    const [order, setOrder] = useState(props.order);
    const [chooseFigure, setChooseFigure] = useState({ x: 0, y: 0, bool: true });


    function chooseF(e) {
        const section = document.querySelector(`#choosefigure .${order}_figure`);
        props.board.matrix[chooseFigure.y][chooseFigure.x].figure = "none";
        if (e.target.classList[0] === "bishop") {
            props.board.matrix[chooseFigure.y][chooseFigure.x].figure = new Bishop( props.board.matrix, chooseFigure.x, chooseFigure.y, order, `${order}-bishop`);
        }
        else if (e.target.classList[0] === "rook") {
            props.board.matrix[chooseFigure.y][chooseFigure.x].figure = new Rook( props.board.matrix, chooseFigure.x, chooseFigure.y, order, `${order}-rook`);
        }
        else if (e.target.classList[0] === "queen") {
            props.board.matrix[chooseFigure.y][chooseFigure.x].figure = new Queen( props.board.matrix, chooseFigure.x, chooseFigure.y, order, `${order}-queen`);
        }
        else if (e.target.classList[0] === "knight") {
            props.board.matrix[chooseFigure.y][chooseFigure.x].figure = new Knight( props.board.matrix, chooseFigure.x, chooseFigure.y, order, `${order}-knight`);
        }
        setChooseFigure({ x: 0, y: 0, bool: true });
        section.style.cssText = "display:none;"
        if (order === "white") {
            setOrder("black")
        }
        else if (order === "black") {
            setOrder("white");
        }
        //poxancel app.js in vor tpi popoxutyuny
        props.setBoard(props.board);
        //
        setSelectedFigure({ ...selectedFigure, figure: "" })
    }


    function asd(e) {

        for (let y = 0; y < 8; y++) {
            for (let x = 0; x < 8; x++) {

                if (((props.board.matrix[y][x].id === e.target.parentElement.id) && (props.board.matrix[y][x].figure.figure === order)) && chooseFigure.bool) {

                    let a = document.querySelector("#board .choose")
                    if (a !== null) {
                        a.classList.remove("choose");
                    }


                    setSelectedFigure({ x, y, figure: props.board.matrix[y][x].figure });

                    e.target.parentElement.classList.add("choose");




                }
                else if ((props.board.matrix[y][x].id === e.target.id) || ((props.board.matrix[y][x].id === e.target.parentElement.id) && (props.board.matrix[y][x].figure.figure !== order))) {
                    if (selectedFigure.figure !== "") {
                        let canplay = new CanPlay(props.board.matrix, selectedFigure.x, selectedFigure.y, x, y, selectedFigure.figure, order);
                        if (canplay.canMove()) {//(canplay.canMove())

                            if ((selectedFigure.figure.img.indexOf("king") !== -1) && ((Math.abs(selectedFigure.x - x)) === 2)) {

                                if (selectedFigure.x < x) {
                                    //texadrel figury yntrvac texum 
                                    props.board.matrix[selectedFigure.y][5].figure = props.board.matrix[selectedFigure.y][7].figure;
                                    props.board.matrix[selectedFigure.y][5].figure.thisx = 5;
                                    //texadrvac figuri hin texy jnjel
                                    props.board.matrix[selectedFigure.y][7].figure = "none";
                                }
                                else if (selectedFigure.x > x) {
                                    //texadrel figury yntrvac texum 
                                    props.board.matrix[selectedFigure.y][3].figure = props.board.matrix[selectedFigure.y][0].figure;
                                    props.board.matrix[selectedFigure.y][3].figure.thisx = 3;
                                    //texadrvac figuri hin texy jnjel
                                    props.board.matrix[selectedFigure.y][0].figure = "none";
                                }
                                //texadrel figury yntrvac texum 
                                props.board.matrix[y][x].figure = selectedFigure.figure;
                                //texadrvac figuri hin texy jnjel
                                props.board.matrix[selectedFigure.y][selectedFigure.x].figure = "none";


                                // jnjel classy
                                let a = document.querySelector("#board .choose");
                                a.classList.remove("choose");

                                // posxel hertakanutyuny
                                if (order === "white") {
                                    setOrder("black")
                                }
                                else if (order === "black") {
                                    setOrder("white");
                                }
                                //tal bolor figurnerin nor matrican
                                canplay.change(props.board.matrix)

                                //poxancel app.js in vor tpi popoxutyuny
                                props.setBoard(props.board);
                                // matricum poxel dirqy
                              


                                setSelectedFigure({ ...selectedFigure, figure: "" })


                            }
                            else if ((selectedFigure.figure.img.indexOf("pawn") !== -1) && ((y === 0) || (y === 7))) {
                                const section = document.querySelector(`#choosefigure .${order}_figure`);
                                section.style.cssText = "display:flex;"
                                //texadrel figury yntrvac texum 
                                props.board.matrix[y][x].figure = selectedFigure.figure;
                                //texadrvac figuri hin texy jnjel
                                props.board.matrix[selectedFigure.y][selectedFigure.x].figure = "none";

                                setChooseFigure({ x, y, bool: false });

                            }
                            else {
                                //texadrel figury yntrvac texum 
                                props.board.matrix[y][x].figure = selectedFigure.figure;
                                //texadrvac figuri hin texy jnjel
                                props.board.matrix[selectedFigure.y][selectedFigure.x].figure = "none";


                                // jnjel classy
                                let a = document.querySelector("#board .choose");
                                a.classList.remove("choose");

                                // posxel hertakanutyuny
                                if (order === "white") {
                                    setOrder("black")
                                }
                                else if (order === "black") {
                                    setOrder("white");
                                }
                                //tal bolor figurnerin nor matrican
                                canplay.change(props.board.matrix)

                                //poxancel app.js in vor tpi popoxutyuny
                                props.setBoard(props.board);
                                // matricum poxel dirqy
                    


                                setSelectedFigure({ ...selectedFigure, figure: "" })
                            }
                            canplay.change(props.board.matrix)
                        }
                    }
                }
            }
        }
    }

    return (
        <section id="board">
            <section id="choosefigure">
                <div className="white_figure">
                    <img onClick={chooseF} className="bishop" src={require("../img/white-bishop.png")} alt="img" />
                    <img onClick={chooseF} className="knight" src={require("../img/white-knight.png")} alt="img" />
                    <img onClick={chooseF} className="rook" src={require("../img/white-rook.png")} alt="img" />
                    <img onClick={chooseF} className="queen" src={require("../img/white-queen.png")} alt="img" />
                </div>
                <div className="black_figure">
                    <img onClick={chooseF} className="bishop" src={require("../img/black-bishop.png")} alt="img" />
                    <img onClick={chooseF} className="knight" src={require("../img/black-knight.png")} alt="img" />
                    <img onClick={chooseF} className="rook" src={require("../img/black-rook.png")} alt="img" />
                    <img onClick={chooseF} className="queen" src={require("../img/black-queen.png")} alt="img" />
                </div>
            </section>
            {
                props.board.matrix.map((key) => {
                    return key.map((value) => {
                        return <div onClick={asd} className={value.color} id={value.id} key={value.id}>{props.board.figuresOnBoard(key, value, props.board.matrix)}</div>
                    })
                })
            }
        </section>
    )
}
export default BoardComponent;