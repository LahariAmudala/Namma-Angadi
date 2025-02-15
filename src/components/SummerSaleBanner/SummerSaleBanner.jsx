import React from 'react';



const SummerSaleBanner = () => {
  return (
    <div style={{
      width: '100%',
      minWidth: '320px',
      height: '288px',
      borderRadius: '10px',
      overflow: 'hidden',
      
      
      
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      padding: '32px',
      boxSizing: 'border-box',
      justifyContent:'flex-start'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        
        gap: '24px',
        maxWidth: '50%',
      }}>

        
        <div style={{
          display: 'flex',
          justifyContent:'flex-end',
          flexDirection: 'column',
          gap: '12px',
        }}>
            
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
          }}>
            
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '100%',
              letterSpacing: '0.42px',
              textTransform: 'uppercase',
              color: '#1A1A1A',
              
              
              
              
              
            }}>
              Summer Sale
            </span>


            <span style={{
              fontFamily: 'Poppins',
              fontSize: '32px',
              fontWeight: 600,
              lineHeight: '120%',
              color: '#1A1A1A',
            }}>
              75% OFF
            </span>

            




          </div>
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '150%',
            color: '#666666',
            
          }}>
            Only Fruit & Vegetable
          </span>




          




        </div>
        
        <button 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onClick={() => console.log('Shop Now clicked')}
        >
          <span style={{
            fontFamily: 'Poppins',
            fontSize: '16px',
            fontWeight: 600,
            lineHeight: '120%',
            color: '#00B207',
            
          }}>
            Shop Now
            
          </span>
          <img 
            src="https://dashboard.codeparrot.ai/api/image/Z7BwneepongUSRmF/group-2.png" 
            
            alt="arrow" 
            style={{
              width: '15px',
              height: '12.05px',
              
            }}
          />
        </button>
        
        
      </div>
      
    </div>
  );
  
};

export default SummerSaleBanner;

