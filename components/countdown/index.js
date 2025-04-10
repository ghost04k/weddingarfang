import React from 'react';
const { useState, useEffect } = React;

const TimeCountDown = () => {
  // Fixer la date de fin du compte à rebours au 1er mai 2025
  const [countdownDate] = useState(new Date('2025-05-01T00:00:00').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNewTime();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // Ajouter un zéro devant les chiffres inférieurs à 10
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      setState({ days: `${days}`, hours: `${hours}`, minutes: `${minutes}`, seconds: `${seconds}` });
    }
  };

  return (
    <div>
      <div className='countdown-wrapper'>
        <div className='time-section'>
          <div className='time'>{state.days || '0'}</div>
          <small className="time-text">Days</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">Hours</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Min</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">Sec</small>
        </div>
      </div>
    </div>
  );
};

export default TimeCountDown;