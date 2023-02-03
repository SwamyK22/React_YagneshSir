/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Child1 from './child1';
import Child2 from './child2';

export default class Test extends Component {
  // state = {
  //   count: 0,
  //   name: 'swamy',
  // };

  // based on props define state value
  // bind the method
  // analytic
  // it call only once when creating instance
  constructor(props) {
    super(props);
    console.log('constructor');
    // states are mutable
    this.state = {
      count: props.count,
      name: 'Swamy',
    };

    // this.increment = this.increment.bind(this);
    // this.decrement = this.decrement.bind(this);
    // analytic logic here
    // server call and pass info
  }

  // it call every time prop or state change
  static getDerivedStateFromProps(props, state) {
    if (state.count === 0) {
      return {
        count: props.count,
      };
    }
    return null;
  }

  // manipulate dom element
  // register an event
  // load the data on page load
  async componentDidMount() {
    console.log('componentDidMount');
    // document.getElementById('test').style.backgroundColor = 'gold';
    document.addEventListener('copy', () => {
      console.log('Copied');
    });
    try {
      const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const json = await data.json();
      this.setState({ name: json.title });
    } catch (error) {}
  }

  // use method as Arrow fn exept lifecycle methods
  increment = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  decrement = () => {
    this.setState((state) => ({
      count: state.count - 1,
    }));
  };

  render() {
    // console.log('render');
    const { count, name } = this.state;
    return (
      <div id="test">
        <p>{name}</p>
        <button
          type="button"
          onClick={this.increment}
        >
          +
        </button>
        <p>{count}</p>
        <button
          type="button"
          onClick={this.decrement}
        >
          -

        </button>
        <div>
          <Child1 />
          {count < 12 && <Child2 count={count} />}
        </div>
        <button
          type="button"
          onClick={() => {
            this.setState({ name: 'Virat' });
          }}
        >
          change name

        </button>
      </div>
    );
  }
}
