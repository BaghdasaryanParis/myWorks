import {useState } from "react";
import BoardComponent from "./comps/boardcomps/boardComponent";
import { Place } from "./comps/place/place";
import "./index.css";
function App() {
  let firstOrder = "white";
  let myboard = new Place();
  myboard.stexcel();
  myboard.figures();
  const [board, setBoard] = useState(myboard);
  function watchClick() {
    let myboard = new Place();
    myboard.stexcel();
    myboard.figures();
    setBoard(myboard);
    firstOrder = "white";
  }

  return (
    <>
      <section id="chess">
        <div className="newgame">
          <button onClick={watchClick}>New Game</button>
        </div>
        <BoardComponent board={board} setBoard={setBoard} order={firstOrder}/>
      </section>

    </>
  );
}

export default App;
