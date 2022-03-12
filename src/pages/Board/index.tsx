import React, { useState } from "react";
import styles from './index.less';
import Square from "../Square/index";
import { RouteComponentProps } from "react-router-dom";
import PubSub from "../PubSub";
import Wallet from "../Wallet";
import InterFace from "../InterFace";

export default (props: RouteComponentProps) => {
  const arr: string[] = new Array(9).fill(null);
  const [state, setState] = useState(arr);
  const [xIsNext, setxIsNext] = useState(true);

  const renderSquare = (i: number) => {
    return (
      <Square
        value={state[i]}
        handleClick={handleClick}
        index={i}
      />
    )
  }

  const handleClick = (i: number) => {
    const squares = state.slice();
    //  when have winner or square has a value ,doing nothing, just return
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? 'X' : 'O';
    setState(squares);
    setxIsNext(!xIsNext);
  }

  const winner = calculateWinner(state);
  let status;
  if (winner) {
    status = 'You win！'
  } else {
    status = 'Next piece：' + (xIsNext ? 'X' : 'O');
  }

  //calculateWinner function
  function calculateWinner(arr: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return arr[a];
      }
    }
    return null;
  }
  return (
    <div className={`${styles.kuan} ${styles.pinkBack}`}>
      <div className={styles.BoardContent}>
        <div className={styles.status}>{status}</div>
        <div className={styles.content}>
          <div className={styles.boardRow}>

            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div className={styles.boardRow}>
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
      </div>
      <div>
        <PubSub />
      </div>
      <div>
        <Wallet />
      </div>
      <div>
        <InterFace />
      </div>
    </div>
  )
}




