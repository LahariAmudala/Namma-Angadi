import React from 'react';

const Button = ({ text = 'Shop Now', icon = 'https://dashboard.codeparrot.ai/api/image/Z7Lvv6WN819FoZfO/group.png', onClick }) => {
  const buttonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '12px',
    padding: '14px 32px',
    minWidth: '162px',
    height: '45px',
    backgroundColor: '#ffffff',
    borderRadius: '43px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const textStyle = {
    color: '#00b207',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '14px',
    fontWeight: 600,
    lineHeight: '120%',
    margin: 0,
  };

  const iconStyle = {
    width: '15px',
    height: '12.05px',
    objectFit: 'contain',
  };

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
    e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 178, 7, 0.2)';
  };

  const handleHoverEnd = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
  };

  return (
    <button
      style={buttonStyle}
      onClick={handleClick}
      onMouseEnter={handleHover}
      onMouseLeave={handleHoverEnd}
    >
      <span style={textStyle}>{text}</span>
      {icon && <img src={icon} alt="" style={iconStyle} />}
    </button>
  );
};

export default Button;

