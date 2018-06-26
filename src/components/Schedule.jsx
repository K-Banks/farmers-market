import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return(
    <div className='paddington'>
      <h3>{props.day}</h3>
      {props.location}
      <br></br>
      {props.hours}
      <br></br>
      {props.booth}
      <style jsx>{`.paddington{
        padding: 10px;
      }`}</style>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
