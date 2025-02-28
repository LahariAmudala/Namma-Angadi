import React, { useState } from 'react';

const Headingcomments = ({ title = 'Client Testimonials' }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex(prev => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentIndex(prev => prev + 1);
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1320px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <h1 style={{
        margin: 0,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '32px',
        fontWeight: 600,
        lineHeight: '120%',
        color: '#1a1a1a',
      }}>
        {title}
      </h1>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center'
      }}>
        <button
          onClick={handlePrevClick}
          style={{
            width: '45px',
            height: '45px',
            padding: 0,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/aoorw.png"
            alt="Previous"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </button>
        <button
          onClick={handleNextClick}
          style={{
            width: '45px',
            height: '45px',
            padding: 0,
            border: 'none',
            background: 'transparent',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={(e) => e.target.style.opacity = '0.7'}
          onMouseLeave={(e) => e.target.style.opacity = '1'}
        >
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/aoorw-2.png"
            alt="Next"
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Headingcomments;

