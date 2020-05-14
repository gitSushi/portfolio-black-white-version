import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
      msg: "show me"
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log(this.state.msg);
    this.setState({ isToggleOn: !this.state.isToggleOn });
  }
  render() {
    return (
      <button style={{ marginTop: "100px" }} onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}

export default Toggle;
