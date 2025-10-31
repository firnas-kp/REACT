import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  // This lifecycle method decides whether component should re-render or not
  ShouldComponentUpdate(nextProps, nextState) {
    console.log("Current State:", this.state.count);
    console.log("Next State:", nextState.count);

    // allow re-render only if count changes
    if (this.state.count !== nextState.count) {
      return true;   // Re-render
    }
    return false;    // Skip render
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    console.log("Component Rendered");
    return (
      <div>
        <h2>Count: {this.state.count}</h2>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;