import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();

    // Remove leading and trailing spaces
    const option = {
      id: uuidv4(),
      text: e.target.elements.option.value.trim()
    };
    const error = this.props.handleAddOption(option);

    // Update error
    this.setState(() => ({ error }));

    if (!error) {
      // Clear the input
      e.target.elements.option.value = '';
    }
  }

  render() {
    return (
      <div className='widget__form'>
        {this.state.error && (
          <p className='widget__error'>{this.state.error}</p>
        )}
        <form onSubmit={this.handleAddOption}>
          <input type='text' name='option' autoComplete='off' />
          <button className='btn btn--cta' type='submit'>
            Add Option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
