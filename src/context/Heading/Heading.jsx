import React from 'react';

const Heading = ({ title = 'Popular Categories', buttonText = 'View All' }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1320px',
      margin: '0 auto',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{
        margin: 0,
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '120%',
        color: '#1A1A1A'
      }}>
        {title}
      </h2>
      
      <button style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '8px 16px',
        backgroundColor: 'transparent',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: 500,
        lineHeight: '150%',
        color: '#00B207',
        transition: 'opacity 0.2s ease'
      }}
      onMouseOver={(e) => e.currentTarget.style.opacity = '0.8'}
      onMouseOut={(e) => e.currentTarget.style.opacity = '1'}>
        <span>{buttonText}</span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/group.png" 
          alt="arrow" 
          style={{
            width: '15px',
            height: '12.05px'
          }}
        />
      </button>
    </div>
  );
};

export default Heading;

