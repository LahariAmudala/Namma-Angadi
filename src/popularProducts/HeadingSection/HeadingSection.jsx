import React from 'react';

const HeadingSection = ({ title = "Popular Products" }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1320px',
      minHeight: '38px',
      padding: '10px 20px',
      boxSizing: 'border-box',
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'Poppins',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '120%',
        color: '#1A1A1A',
      }}>
        {title}
      </h1>
      
      <button 
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '12px',
          padding: '4px 12px',
          background: 'transparent',
          border: 'none',
          borderRadius: '43px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#f5f5f5';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'transparent';
        }}
      >
        <span style={{
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 500,
          lineHeight: '150%',
          color: '#00B207',
        }}>
          View All
        </span>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/group.png" 
          alt="arrow"
          style={{
            width: '15px',
            height: '12.05px',
            objectFit: 'contain',
          }}
        />
      </button>
    </div>
  );
};

export default HeadingSection;

