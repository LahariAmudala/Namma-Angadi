import React, { useState } from 'react';

const ProductCard = ({ 
  image = "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product.png",
  name = "Green Apple",
  price = "14.99",
  originalPrice = "20.99",
  rating = 5,
  onSale = false,
  salePercent = "50"
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const renderStars = () => {
    return [...Array(5)].map((_, index) => (
      <img
        key={index}
        src={`https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/star-${index + 1}.png`}
        alt={`star-${index + 1}`}
        style={{ width: '12px', height: '12px' }}
      />
    ));
  };

  return (
    <div 
      style={{
        width: '100%',
        maxWidth: '264px',
        height: '327px',
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        position: 'relative',
        marginBottom: '20px',
        boxSizing: 'border-box'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {onSale && (
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          backgroundColor: '#ea4b48',
          borderRadius: '4px',
          padding: '3px 8px',
          display: 'flex',
          gap: '4px'
        }}>
          <span style={{
            color: '#ffffff',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400
          }}>Sale</span>
          <span style={{
            color: '#ffffff',
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 500
          }}>{salePercent}%</span>
        </div>
      )}

      <div style={{
        width: '100%',
        height: '240px',
        overflow: 'hidden'
      }}>
        <img 
          src={image} 
          alt={name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </div>

      {isHovered && (
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #f2f2f2',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/heart.png" alt="wishlist" style={{width: '20px', height: '20px'}}/>
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid #f2f2f2',
            backgroundColor: '#ffffff',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/eye-1.png" alt="quick view" style={{width: '20px', height: '20px'}}/>
          </button>
          <button style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#00b207',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/bag-10.png" alt="add to cart" style={{width: '20px', height: '20px'}}/>
          </button>
        </div>
      )}

      <div style={{
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <h3 style={{
            margin: 0,
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            color: '#4d4d4d'
          }}>{name}</h3>
          <div style={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center'
          }}>
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 500,
              color: '#1a1a1a'
            }}>${price}</span>
            {onSale && (
              <span style={{
                fontFamily: 'Poppins',
                fontSize: '16px',
                fontWeight: 400,
                color: '#999999',
                textDecoration: 'line-through'
              }}>${originalPrice}</span>
            )}
          </div>
        </div>
        <div style={{
          display: 'flex',
          gap: '2px'
        }}>
          {renderStars()}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

