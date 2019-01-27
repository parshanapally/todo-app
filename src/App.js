import React, { Component } from "react";
import Notes from "./components/Notes";
import "./App.css";

class App extends Component {
  state = {
    noteText: "",
    notes: []
  };

  updateNoteText = e => {
    this.setState({ noteText: e.target.value });
  };

  handleKeyPress = e => {
    if (e.key === "Enter") {
      let notesArr = this.state.notes;
      notesArr.push(this.state.noteText);
      this.setState({ noteText: "" });
    }
  };

  handleAddition = () => {
    if (this.state.noteText === "") return false;
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: "" });
    this.textInput.focus();
  };

  handleDelete = index => {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  };
  render() {
    let notes = this.state.notes.map((val, key) => {
      return (
        <Notes key={key} text={val} onDelete={() => this.handleDelete(key)} />
      );
    });
    return (
      <div className="container">
        <div className="header">To Do Application</div>
        {notes}
        <div className="btn" onClick={this.handleAddition.bind(this)}>
          +
        </div>
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
