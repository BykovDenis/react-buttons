import React, { Fragment, Component } from 'react';
import injectSheet from 'react-jss';

const styles = {
  styleButtonBlue: {
    position: 'relative',
    border: 'none',
    backgroundColor: '#0000ff',
    color: '#ffffff',
    borderRadius: '5px'
  },
};

class ButtonBlue extends Component {

  render() {
    return (
      <Fragment>
        <button className={this.props.classes.styleButtonBlue}>
          Blue Button
        </button>
      </Fragment>
    );
  }
}

export default injectSheet(styles)(ButtonBlue);
