import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import '../styles/entry.css';

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  render() {
    return (
      <h1>not empty</h1>
    );
  }
}