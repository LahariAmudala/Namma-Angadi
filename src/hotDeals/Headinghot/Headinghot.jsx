import React from 'react';

const Headinghot = ({ title = "Hot Deals" }) => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      minWidth: '320px',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '120%',
        color: '#1A1A1A'
      }}>
        {title}
      </h1>
      
      <button 
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'Poppins, sans-serif',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '150%',
          color: '#00B207',
          transition: 'opacity 0.2s ease'
        }}
        onMouseOver={(e) => e.target.style.opacity = '0.8'}
        onMouseOut={(e) => e.target.style.opacity = '1'}
      >
        <span>View All</span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/group.png" 
          alt="arrow" 
          style={{
            width: '15px',
            height: '12.05px',
            objectFit: 'contain'
          }}
        />
      </button>
    </div>
  );
};

export default Headinghot;

