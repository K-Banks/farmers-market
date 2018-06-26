import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return(
    <div>
      <h3>{props.month}</h3>
      <ul>
        {props.selection.map((produce, index) =>
          <li id={index}>{produce}</li>
        )}
      </ul>
    </div>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
