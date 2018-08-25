import React from 'react';

class CoordinatesButton extends Teact.Component {
  handleClick = (event) => {
    this.props.onReceiveCoordination([event.clientX, event.clientY]);
  }
  
  render() {
    return (
      <button onClick={this.handleClick}>Coordinates</button>
      );
  }
}

