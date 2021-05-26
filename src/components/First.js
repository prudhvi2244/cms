import React, { Component } from "react";

class First extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Welcome Visitor",
    };
  }
  subscribe()
  {
      this.setState({
          msg:'Thank You For Subscribing'
      })
  }
  render() {
    return (
      <div>
        <h4>{this.state.msg}</h4>
        <button onClick={()=>this.subscribe()}>Subscribe</button>
      </div>
    );
  }
}

export default First;
