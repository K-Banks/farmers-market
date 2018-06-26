import React from 'react';
import PropTypes from 'prop-types';

function Produce(props){
  return(
    <ul className='theBorder'>
      <h3>{props.month}</h3>
      {props.selection.map((produce, index) =>
        <li id={index}>{produce}</li>
      )}
      <style jsx>{`.theBorder {
          border: 1px solid black;
        }
        .theBorder:nth-child(1) {
          grid-row: 1 / 2;
        }`}</style>
    </ul>
  );
}

Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;
