// @flow
import React, {Component} from 'react';

import '../../styles/containers.css';
import './enter-subject.css';

class EnterSubject extends Component {
  input: HTMLInputElement;

  state = {
    value: "",
  };

  props: {
    onSubmit: () => mixed,
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
    this.props.onSubmit(this.state.value);
  }

  render() {
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
          </div>
    );
  }
}

export default EnterSubject;
