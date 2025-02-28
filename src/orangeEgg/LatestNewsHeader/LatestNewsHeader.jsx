import React from 'react';

const LatestNewsHeader = ({ style }) => {
  const defaultStyle = {
    fontSize: '32px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    color: '#1a1a1a',
    lineHeight: '120%',
    textAlign: 'center',
    minWidth: '194px',
    height: '38px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'default',
    userSelect: 'none',
    transition: 'color 0.2s ease',
    width: '100%',
    maxWidth: '194px',
    margin: '0 auto',
  };

  const combinedStyle = { ...defaultStyle, ...style };

  return (
    <div style={combinedStyle}>
      Latest News
    </div>
  );
};

LatestNewsHeader.defaultProps = {
  style: {},
};

export default LatestNewsHeader;

