import React, { Component } from "react";

class Notes extends Component {
  render() {
    return (
      <div className="note" onDelete={this.onDelete}>
        {this.props.text}
      </div>
    );
  }
}

export default Notes;
