import { Component } from "react";

export default class App extends Component{
  state={
    count:0
  }
  increment =()=>{
    const num = this.select.value*1
    const count = this.state.count
    this.setState({count:count+num})
  }
  decrement=()=>{
    const num = this.select.value*1
    const count = this.state.count
    this.setState({count:count-num})
  }
  incrementIfOdd=()=>{
    const num = this.select.value*1
    const count = this.state.count
    if(count%2===1)
      this.setState({count:count+num})
  }
  incrementAsync=()=>{
    const num = this.select.value*1
    const count = this.state.count
    setTimeout(()=>{
      this.setState({count:count+num})
    },1000)
  }
  render(){
    const {count} = this.state
    return (
      <div>
        <p>click {count} times</p>
        <div>
          <select ref={select=>this.select=select}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>&nbsp;
          <button onClick={this.increment}>+</button>&nbsp;
          <button onClick={this.decrement}>-</button>&nbsp;
          <button onClick={this.incrementIfOdd}>increment if odd</button>&nbsp;
          <button onClick={this.incrementAsync}>increment anync</button>
        </div>
      </div>
    )
  }
}