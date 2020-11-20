import { Component } from "react";
import PropTypes from 'prop-types'

export default class Counter extends Component{
  static propTypes ={
    count:PropTypes.number.isRequired,
    increment:PropTypes.func.isRequired,
    decrement:PropTypes.func.isRequired
  }
  state={
    count:0
  }
  increment =()=>{
    const num = this.select.value*1
    this.props.increment(num)
  }
  decrement=()=>{
    const num = this.select.value*1
    this.props.decrement(num)
  }
  incrementIfOdd=()=>{
    const num = this.select.value*1
    const count = this.props.count
    if(count%2===1)
      this.props.increment(num)
  }
  incrementAsync=()=>{
    const num = this.select.value*1
    setTimeout(()=>{
      this.props.increment(num)
    },1000)
  }
  render(){
    const count = this.props.count
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


