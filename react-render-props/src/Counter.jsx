import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render() {
    const { render } = this.props;
    const { count } = this.state;

    return(
      <>
        {
          render({
            increment: this.increment,
            decrement: this.decrement,
            count,
          })
        }
      </>
    )
  }
}

export default Counter;
