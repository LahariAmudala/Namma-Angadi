import React from 'react';

const SpecialDealBanner = ({ 
  title = "Special Products Deal of the Month",
  subtitle = "Best Deal",
  buttonText = "Shop Now",
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z7BwneepongUSRmF/bg-2.png",
  arrowIcon = "https://dashboard.codeparrot.ai/api/image/Z7BwneepongUSRmF/group-3.png"
}) => {
  return (
    <div style={{
      width: '100%',
      maxWidth: '423px',
      height: 'auto',
      borderRadius: '10px',
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        width: '100%',
        paddingTop: '68%', // Aspect ratio for responsiveness
        background: `linear-gradient(rgba(0, 38, 3, 0.8), rgba(0, 38, 3, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        boxSizing: 'border-box',
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          alignItems: 'center',
        }}>
          <span style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            letterSpacing: '0.42px',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
            {subtitle}
          </span>
          <h2 style={{
            color: '#FFFFFF',
            fontFamily: 'Poppins',
            fontSize: '32px',
            fontWeight: 600,
            lineHeight: '120%',
            margin: 0,
            textAlign: 'center',
          }}>
            {title}
          </h2>
        </div>
        
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'transparent',
            border: 'none',
            color: '#00B207',
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '10px 20px',
            marginTop: '32px',
            transition: 'transform 0.2s',
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {buttonText}
          <img 
            src={arrowIcon} 
            alt="arrow" 
            style={{
              width: '15px',
              height: '12px',
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default SpecialDealBanner;

