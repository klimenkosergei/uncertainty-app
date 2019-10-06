import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className='widget__header'>
      <h3>Your Options</h3>
      <button className='btn btn--link' onClick={props.handleDeleteOptions}>
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className='widget__info'>No options yet.</p>
    )}
    <ul>
      {// Key should be unique and MUST be passed to Option component
      props.options.map((option, index) => (
        <Option
          key={option.id}
          id={option.id}
          optionText={option.text}
          index={index}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </ul>
  </div>
);

export default Options;
