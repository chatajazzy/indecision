import React, { Component } from 'react';

export default class AddOption extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}
