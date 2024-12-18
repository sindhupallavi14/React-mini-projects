import { useEffect, useState } from "react"
import "./tictactoe.css"
function Square({value,onClick})
{
    return <button onClick={onClick} className="square">{value}</button>
}

export function TicTacToe()
{
    const [squares,setSquares]=useState(Array(9).fill(""));
    console.log(squares);  
    const [isXTurn,setIsXTurn]=useState(true);
    const [status,setStatus]=useState("");

    function handleOnClick(getCrntSqIdx)
    {
       let cpysqrs=[...squares];
       if(getWinner(squares) || squares[getCrntSqIdx]) return;
       cpysqrs[getCrntSqIdx]=isXTurn ? "X" :"O";
       setIsXTurn(!isXTurn);
       setSquares(cpysqrs)
    }

    function handleRestart()
    {
        setSquares(Array(9).fill(''));
        setIsXTurn(true)
    }

    function getWinner(squares)
    {
       const winningpatterns=[
           [0,1,2],
           [3,4,5],
           [6,7,8],
           [0,4,8],
           [2,4,6],
           [0,3,6],
           [1,4,7],
           [2,5,8]
       ];

       for(let i=0;i<winningpatterns.length;i++)
       {
          const [x,y,z]=winningpatterns[i];
          if(squares[x] && squares[x]===squares[y] && squares[y]===squares[z])
          {
            return squares[x];
          }
       }
       return null;
    }

    useEffect(()=>
    {
        if(!getWinner(squares) && squares.every(item=> item !== ""))
        {
            setStatus(`This is a draw ! please Restart the Game`)
        }
        else if(getWinner(squares))
        {
            setStatus(`The Winner is ${getWinner(squares)}`)
        }
        else{
            setStatus(`Next Player is ${isXTurn ? "X" :"O"}`)
        }
    },[squares,isXTurn])


    return(
        <div className="tic-tac-toe-container">
            <h1>TIC TAC TOE</h1>
            <div className="row">
               <Square value={squares[0]} onClick={()=>handleOnClick(0)}/>
               <Square value={squares[1]}  onClick={()=>handleOnClick(1)}/>
               <Square value={squares[2]} onClick={()=>handleOnClick(2)}/>
            </div>
            <div className="row">
               <Square value={squares[3]} onClick={()=>handleOnClick(3)}/>
               <Square value={squares[4]} onClick={()=>handleOnClick(4)}/>
               <Square value={squares[5]} onClick={()=>handleOnClick(5)}/>
            </div>
            <div className="row">
               <Square value={squares[6]} onClick={()=>handleOnClick(6)}/>
               <Square value={squares[7]} onClick={()=>handleOnClick(7)}/>
               <Square value={squares[8]} onClick={()=>handleOnClick(8)}/>
            </div>
            <h1>{status}</h1>
            <button className="restart" onClick={handleRestart}>Restart</button>
        </div>
    )
}