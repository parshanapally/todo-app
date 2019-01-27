import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    noteText: ""
  };

  updateNoteText = e => {
    this.setState({ noteText: e.target.value });
  };

  handleKeyPress = () => {};
  render() {
    return (
      <div className="container">
        <div className="header">React ToDo Application</div>
        <div className="btn">+</div>
        <input
          type="text"
          className="text-input"
          ref={input => {
            this.textInput = input;
          }}
          value={this.state.noteText}
          onChange={noteText => this.updateNoteText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
