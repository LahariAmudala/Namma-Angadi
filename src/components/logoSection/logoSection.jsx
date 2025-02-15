import React from 'react';

const LogoSection = ({ text = "Namma Angadi" }) => {
  const logoStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    minWidth: '248px',
    height: '38px',
    alignItems: 'center',
    justifyContent: 'center', // Center align the text
    padding: '0 16px'
  };

  const textStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '32px',
    fontWeight: 500,
    letterSpacing: '-0.96px',
    lineHeight: '38px',
    color: '#002603',
    margin: 0,
    whiteSpace: 'nowrap',
    textAlign: 'center' // Center align the text
  };

  return (
    <div style={logoStyle}>
      <h1 style={textStyle}>{text}</h1>
    </div>
  );
};

export default LogoSection;

