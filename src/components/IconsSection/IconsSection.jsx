import React from 'react';

const IconsSection = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'row', 
      gap: '16px',
      alignItems: 'center',
      minWidth: '191px',
      height: '34px',
      padding: '0 16px',
      
      
    }}>
      {/* Heart Icon */}
      <img 
        src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/heart.png"
        alt="Wishlist"
        style={{ 
          width: '32px',
          height: '32px',
          cursor: 'pointer'
        }}
        onClick={() => console.log('Heart clicked')}
      />

      {/* Divider */}
      <div style={{
        width: '1px',
        height: '24px',
        backgroundColor: '#cccccc'
      }} />

      {/* Shopping Cart Section */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '12px',
        alignItems: 'center'
      }}>
        {/* Cart Icon with Badge */}
        <div style={{ position: 'relative' }}>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/bag.png"
            alt="Shopping Cart"
            style={{ 
              width: '34px',
              height: '34px',
              cursor: 'pointer'
            }}
            onClick={() => console.log('Cart clicked')}
          />
          <div style={{
            position: 'absolute',
            top: '-2px',
            right: '-2px',
            width: '18px',
            height: '18px',
            backgroundColor: '#2c742f',
            border: '1px solid #ffffff',
            borderRadius: '16px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '10px',
              fontWeight: 500,
              color: '#ffffff',
              lineHeight: '10px'
            }}>2</span>
          </div>
        </div>

        {/* Cart Info */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '7px'
        }}>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '11px',
            fontWeight: 400,
            color: '#4d4d4d',
            lineHeight: '120%'
          }}>Shopping cart:</span>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500,
            color: '#1a1a1a',
            lineHeight: '100%'
          }}>$57.00</span>
        </div>
      </div>
    </div>
  );
};

export default IconsSection;

