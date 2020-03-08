import React, { Component } from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class UncertaintyApp extends Component {
  constructor(props) {
    super(props);
    this.handlePick = this.handlePick.bind(this);
    this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: [],
      selectedOption: undefined
    };
  }

  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({
      selectedOption: this.state.options[randomNum].text
    }));
  }

  handleClearSelectedOption() {
    this.setState(() => ({ selectedOption: undefined }));
  }

  handleAddOption(option) {
    if (!option.text) {
      return 'Enter a valid value';
    } else if (
      this.state.options.findIndex(_option => _option.text === option.text) > -1
    ) {
      return 'This option already exists';
    }
    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  handleDeleteOption(optionId) {
    // Remove that option from an array
    this.setState(prevState => ({
      options: prevState.options.filter(option => option.id !== optionId)
    }));
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  componentDidMount() {
    // Fetch the data from localStorage
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);
    if (options) {
      this.setState(() => ({ options }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    }
  }

  render() {
    const description = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header description={description} />
        <main className='container'>
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          />
        </main>
      </div>
    );
  }
}

export default UncertaintyApp;
