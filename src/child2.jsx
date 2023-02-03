import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
// import shallowCompare from 'react-addons-shallow-compare';

// eslint-disable-next-line react/prefer-stateless-function
export default class Child2 extends Component {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return shallowCompare(this, nextProps, nextState);
  //   // if (this.props !== nextProps || this.state !== nextState) {
  //   //   return true;
  //   // }
  //   // return false;
  // }

  constructor(props) {
    super(props);

    this.controler = new AbortController();
  }

  async componentDidMount() {
    document.addEventListener('mousemove', this.mouseMove);
    setInterval(() => {
      console.log('Interval');
    }, 1000);

    await fetch('https://jsonplaceholder.typicode.com/todos/1', {
      signal:this.controler.signal,
    });
  }

  // use to remove all async code from the component
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.mouseMove);
    clearInterval(this.setInterval);

    this.controler.abort();
  }

  mouseMove = () => {
    console.log(this);
    console.log('MouseOver');
  };

  render() {
    console.log('child2 render');
    const { count } = this.props;
    return (
      <div>
        <h1>Child 2</h1>
        <p>{count}</p>
      </div>
    );
  }
}
