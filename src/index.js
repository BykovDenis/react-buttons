import React, { Fragment, Component } from 'react';
import injectSheet from 'react-jss';

class ButtonBlue extends Component {

  render() {
    const styles = {
      styleButtonBlue: {
        border: 'none',
        backgroundColor: '#0000ff',
        color: '#ffffff',
        borderRadius: '5px'
      },
    };
    return (
      <Fragment>
        <button className={props.classes.styleButtonBlue}>
          Blue Button
        </button>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(ButtonBlue);
