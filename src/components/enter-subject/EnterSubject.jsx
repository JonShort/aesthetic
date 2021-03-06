// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router';

import '../../styles/containers.css';
import './enter-subject.css';

type Props = {};

type State = {
  value: string,
  redirect: boolean,
};

class EnterSubject extends Component<Props, State> {
  input: ?HTMLInputElement;

  state = {
    value: "",
    redirect: false,
  };

  componentDidMount() {
    this.input && this.input.focus();
  }

  handleInput = () => {
    this.input &&
    this.setState({
      value: this.input.value,
    })
  }

  handleSubmit = (e: Event) => {
    e.preventDefault();
    this.setState({
      redirect: true,
    })
  }

  render() {
    let redirectRoute: string = '';
    const currentRoute: string = window.location.pathname;
    const currentSearch: string = window.location.search;

    if (this.state.value !== '') {
      const i: string = this.state.value.replace(/[^\w\d]/g, '-').toLowerCase();
      // If at root & entered value is not aesthetic
      if (currentRoute === '/' && this.state.value !== 'aesthetic') {
        redirectRoute = i;
      } else if (this.state.value === 'aesthetic') {
        redirectRoute = currentRoute + i;
      } else {
        redirectRoute = currentRoute + i;
      }
    }

    if (currentSearch) {
      const array: string[] = currentSearch.split('/');
      const path: string = array[1];
      this.setState({
        value: path,
        redirect: true,
      });
    }

    return (
          <div className="wrapper">
            <form onSubmit={this.handleSubmit}>
              <input
                className="hero-input"
                onChange={this.handleInput}
                placeholder="Who are you?"
                ref={el => {this.input = el}}
                tabIndex={0}
                value={this.state.value} />
              <span className="bar" />
            </form>
            {this.state.redirect && (
              <Redirect push to={`${redirectRoute}`} />
            )}
          </div>
    );
  }
}

export default EnterSubject;
