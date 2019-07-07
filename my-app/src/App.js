import React, {Component} from 'react';
import './App.css';
//import logo from './logo.svg';
//import './App.css';

class App extends Component {
constructor(props){
  super(props)
  this.state ={
    board:Array(9).fill(null)
  }
}

handleClick(index){
  let newBoard = this.state.board
  newBoard[index] ='X'
 this.setState ({
board:newBoard
 })
  console.log(this.state.board)
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
