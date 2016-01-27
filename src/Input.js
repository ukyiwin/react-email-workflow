import React, { Component, PropTypes } from 'react';
import { Block, Flex } from 'jsxstyle';
import L from './LayoutConstants';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      focused: false
    };
  }

  handleOnFocus() {
    this.setState({focused: true});
  }

  handleOnBlur() {
    this.setState({focused: false});
  }

  render() {
    const { style, ...rest } = this.props;
    const border = this.state.focused ? '1px solid #999' : '1px solid #ccc';
    const inputStyle = {...style,
      fontFamily: L.sans,
      transition: '.25s border ease',
      border: border,
      fontSize: '1rem',
      outline: 'none !important',
      padding: L.gridUnit,
      WebkitAppearance: 'none',
    };
    return (
      this.props.rows ? <textarea
        rows="4"
        onFocus={this.handleOnFocus.bind(this)}
        onBlur={this.handleOnBlur.bind(this)}
        style={inputStyle}
        {...rest}/> : <input
                   onFocus={this.handleOnFocus.bind(this)}
                   onBlur={this.handleOnBlur.bind(this)}
                   style={inputStyle}
                   {...rest}/>
    );
  }
}


export default Input;
