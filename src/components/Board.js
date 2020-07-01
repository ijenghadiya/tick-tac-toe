import React, { useState } from 'react';
import Square from './Square';

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default function Board(props) {

    const[state, setstate]=useState({squares:Array(9).fill(null), xIsNext:true})
    const winner=calculateWinner(state.squares);
    let status;
    if(winner){
      status='Winner: ' + winner;
    }
    else{
      status='Next Player: ' + (state.xIsNext ? 'X' : '0');
    }

    function handleClick(i){
      const squares=state.squares.slice();
      if(calculateWinner(squares) || squares[i]) {
        return;
      }

      squares[i]=state.xIsNext ? 'X' : '0';
      setstate({
              squares:squares,
              xIsNext: !state.xIsNext,
              })
    }
    function renderSquare(i){
        return <Square value={state.squares[i]}
        onClick={()=>handleClick(i)}
      />;
    }
    return(
       <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>

    );

    
}
