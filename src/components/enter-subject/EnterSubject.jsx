// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router';

import '../../styles/containers.css';
import './enter-subject.css';

class EnterSubject extends Component {
  input: HTMLInputElement;

  state = {
    value: "",
    redirect: false,
  };

  componentDidMount() {
    this.input.focus();
  }

  handleInput(input: EventTarget) {
    this.setState({
      value: this.input.value,
    })
  }

  handleSubmit(e: Event) {
    e.preventDefault();
    this.setState({
      redirect: true,
    })
  }

  render() {
    let redirectRoute = '';

    if (this.state.value !== '') {
      const i = this.state.value.replace(/\s+/g, '-').toLowerCase();
      redirectRoute = i;
    }

    return (
          <div className="wrapper">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <input
                className="hero-input"
                onChange={this.handleInput.bind(this)}
                placeholder="Who are you?"
                ref={el => {this.input = el}}
                tabIndex={0}
                value={this.state.value} />
            </form>
            {this.state.redirect && (
              <Redirect push to={`/${redirectRoute}`} />
            )}
          </div>
    );
  }
}

export default EnterSubject;
