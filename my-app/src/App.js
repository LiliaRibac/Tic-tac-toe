import React, {Component} from 'react';
import './App.css';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state ={
    board:Array(9).fill(null),
    player : 'X'
  }
}

handleClick(index){
  let newBoard = this.state.board
  newBoard[index] = this.state.player
 let  newPlayer =this.state.player === 'X' ? '0' : 'X'
 this.setState ({
board:newBoard,
player:newPlayer
 })
  //console.log(this.state.board)
  //console.log(index)
}

render (){
  const Box = this.state.board.map((box,index) => <div className ="box"key={index} onClick={()=> this.handleClick(index)}>{box}</div>)
  return (  

    <div className="container">
      <h1>Tic tac-toe app</h1>
      <div className="board">
      {Box}
    </div>
    
    </div>
  );
  } 
}

export default App;
