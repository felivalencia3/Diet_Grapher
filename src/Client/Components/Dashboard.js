/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import { Line } from 'react-chartjs';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import LineGraph from './LineGraph';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/destructuring-assignment
      token: this.props.location.state.token,
      auth: false,
    };
  }

  componentDidMount() {
    const { token } = this.state;

    axios.get('http://127.0.0.1:8081/api/users/redirect', { headers: { Authorization: `Token ${token}` } })
      .then((response) => {
        if (response.data) {
          this.setState({ auth: true });
        }
      })
      .then((error) => {
        console.log(error);
      });
  }

  render() {
    const { auth, token } = this.state;
    if (auth) {
      return (
        <div>
          <h2>You are Authorized!</h2>
        </div>
      );
    }
    return (
      <h2>Authorization Failed...</h2>
    );
  }
}