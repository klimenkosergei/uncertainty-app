import React from 'react';
import uuidv4 from 'uuidv4';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };
  handleAddOption = e => {
    // Prevent Submit default behaviour
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
  };
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
