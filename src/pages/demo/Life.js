import React from "react";
import { Button } from "antd";
import './style.less'
// import 'antd/dist/reset.css';

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
      <div className="container">
        <p>React 生命周期介绍</p>
        <Button type="primary" onClick={this.handleAdd}> antd 点击一下</Button>
        <button onClick={this.handleAdd}>点击一下</button>
        <button onClick={this.handleClick.bind(this)}>点击一下</button>
        <p>{this.state.count} </p>
      </div>
    )
  }
}