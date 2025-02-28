import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate = new Date().getTime() + 172800000 }) => { // Default 2 days from now
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({
        days: days.toString().padStart(2, '0'),
        hours: hours.toString().padStart(2, '0'),
        minutes: minutes.toString().padStart(2, '0'),
        seconds: seconds.toString().padStart(2, '0')
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    minWidth: '290px',
    height: '52px',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Poppins, sans-serif',
    backgroundColor: '#1E90FF', // Assuming a blue background
    borderRadius: '6px',
    padding: '8px'
  };

  const timeBlockStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
    width: '56px',
    alignItems: 'center'
  };

  const numberStyle = {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '150%',
    color: '#FFFFFF',
    textAlign: 'center'
  };

  const labelStyle = {
    fontSize: '12px',
    fontWeight: 400,
    letterSpacing: '0.36px',
    color: '#FFFFFFCC',
    textTransform: 'uppercase',
    lineHeight: '100%',
    textAlign: 'center'
  };

  const separatorStyle = {
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: '150%',
    color: '#FFFFFF99',
    marginTop: '-8px'
  };

  return (
    <div style={containerStyle}>
      <div style={timeBlockStyle}>
        <span style={numberStyle}>{timeLeft.days}</span>
        <span style={labelStyle}>Days</span>
      </div>
      <span style={separatorStyle}>:</span>
      <div style={timeBlockStyle}>
        <span style={numberStyle}>{timeLeft.hours}</span>
        <span style={labelStyle}>Hours</span>
      </div>
      <span style={separatorStyle}>:</span>
      <div style={timeBlockStyle}>
        <span style={numberStyle}>{timeLeft.minutes}</span>
        <span style={labelStyle}>Mins</span>
      </div>
      <span style={separatorStyle}>:</span>
      <div style={timeBlockStyle}>
        <span style={numberStyle}>{timeLeft.seconds}</span>
        <span style={labelStyle}>Secs</span>
      </div>
    </div>
  );
};

export default CountdownTimer;

