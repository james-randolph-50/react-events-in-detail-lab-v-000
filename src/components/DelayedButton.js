import React from 'react';

class DelayedButton extends React.Component {
  handleClick = (event) => {
    event.persist();
    setTimeout(() => {
      event.persist();
      setTimeout(() => {
        this.props.onDelayedClick(event);
      }, this.props.delay);
    })
  }
}