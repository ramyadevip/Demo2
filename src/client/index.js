import React from 'react';
import { render } from 'react-dom';
class App extends React.Component{
  state = {
    count : 20,
  };
  multiply =() => {
    const currentValue = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count : currentValue * 2,
    });
  }
  division =() => {
    const currentValue = this.state.count;
    this.setState({
      // eslint-disable-next-line no-magic-numbers
      count : currentValue / 2,
    });
  }
  render(){
    return <div>
      <h1>{this.state.count}</h1>
      <button onClick={this.multiply}>*</button>
      <button onClick={this.division}>/</button>
    </div>;
  }
}
render(<App />, document.getElementById('root'));