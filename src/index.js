import React, { Fragment, Component } from 'react';

class ButtonBlue extends Component {
  render() {

    const styleButtonBlue = {
      border: 'none',
      backgroundColor: '#0000ff',
      color: '#ffffff',
      borderRadius: '5px'
    };

    return (
      <Fragment>
        <button className={styleButtonBlue}>
          Blue Button
        </button>
      </Fragment>
    );
  }
}

export default ButtonBlue;
