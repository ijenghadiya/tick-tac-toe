import React, { useState } from 'react';
import Square from './Square';

export default function Board(props) {
    const[state, setstate]=useState({squares:Array(9).fill(null)})
    const status='Next player:X';
    function handleClick(i){
      const squares=state.squares.slice();
      squares[i]='X';
      setstate({squares:squares})
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
