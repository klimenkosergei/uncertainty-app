import React from 'react';

const Option = props => (
  <div>
    <li className='widget__item'>
      <p>
        {props.index + 1}. {props.optionText}
      </p>
      <button
        className='btn btn--link'
        onClick={() => {
          props.handleDeleteOption(props.id);
        }}
      >
        Remove
      </button>
    </li>
  </div>
);

export default Option;
