import React from "react";

export default class Lift extends React.Component {
  state = {
    count: 0
  }
  handleAdd = () => {
    this.setState(
      {
        count: this.state.count + 1
      }
    )
  }
  handleClick() { }
  render() {
    return (
      <div style={{ padding: '50px' }}>
        <p>React 生命周期介绍</p>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count} </p>
      </div>
    )
  }
}