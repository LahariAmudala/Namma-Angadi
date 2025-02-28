
import React, { useState } from 'react';

const ProductCards = ({ 
  image = "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product.png",
  name = "Product Name",
  price = "12.00",
  originalPrice,
  rating = 5,
  onAddToCart = () => {},
  style = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '264px',
        height: '327px',
        backgroundColor: '#ffffff',
        border: '1px solid #e6e6e6',
        boxSizing: 'border-box',
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', height: '240px' }}>
        <img 
          src={image} 
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
      
      <div style={{ 
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        flex: 1
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <span style={{
            fontSize: '14px',
            fontFamily: 'Poppins',
            color: '#4d4d4d',
            lineHeight: '150%'
          }}>{name}</span>
          
          <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
            <span style={{
              fontSize: '16px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              color: '#1a1a1a',
              lineHeight: '150%'
            }}>${price}</span>
            {originalPrice && (
              <span style={{
                fontSize: '16px',
                fontFamily: 'Poppins',
                color: '#999999',
                textDecoration: 'line-through',
                lineHeight: '150%'
              }}>${originalPrice}</span>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '2px' }}>
          {[...Array(5)].map((_, i) => (
            <img
              key={i}
              src={`https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/star-${i + 1}.png`}
              alt={`Star ${i + 1}`}
              style={{ width: '12px', height: '12px' }}
            />
          ))}
        </div>
      </div>

      <button
        onClick={onAddToCart}
        style={{
          position: 'absolute',
          bottom: '12px',
          right: '12px',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: '#f2f2f2',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'background-color 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#e6e6e6';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#f2f2f2';
        }}
      >
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/bag.png"
          alt="Add to cart"
          style={{ width: '20px', height: '20px' }}
        />
      </button>
    </div>
  );
};

const BigProductCard = ({
  image = "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/image.png",
  name = "Product Name",
  price = "12.00",
  originalPrice,
  rating = 5,
  feedbackCount = 0,
  onAddToCart = () => {},
  style = {}
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 23,
    minutes: 34,
    seconds: 57
  });

  return (
    <div 
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '528px',
        height: 'auto',
        backgroundColor: '#ffffff',
        border: '1px solid #2c742f',
        boxSizing: 'border-box',
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', height: 'auto', maxHeight: '448px' }}>
        <img 
          src={image}
          alt={name}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        
        <div style={{
          position: 'absolute',
          top: '25px',
          left: '25px',
          display: 'flex',
          gap: '8px'
        }}>
          <div style={{
            padding: '3px 8px',
            backgroundColor: '#ea4b48',
            borderRadius: '4px',
            display: 'flex',
            gap: '4px'
          }}>
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'Poppins',
              lineHeight: '150%'
            }}>Sale</span>
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'Poppins',
              fontWeight: 500,
              lineHeight: '150%'
            }}>50%</span>
          </div>
          
          <div style={{
            padding: '3px 8px',
            backgroundColor: '#2388ff',
            borderRadius: '4px'
          }}>
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'Poppins',
              lineHeight: '150%'
            }}>Best Sale</span>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          padding: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/wishlist.png"
              alt="Add to wishlist"
              style={{ width: '100%', height: '100%' }}
            />
          </button>

          <button
            onClick={onAddToCart}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 32px',
              backgroundColor: '#00b207',
              border: 'none',
              borderRadius: '43px',
              cursor: 'pointer'
            }}
          >
            <span style={{
              color: '#ffffff',
              fontSize: '14px',
              fontFamily: 'Poppins',
              fontWeight: 600,
              lineHeight: '120%'
            }}>Add to Cart</span>
            <div style={{
              width: '15px',
              height: '15px',
              border: '1.3px solid #ffffff'
            }} />
          </button>

          <button
            style={{
              width: '46px',
              height: '46px',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <img 
              src="https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/quick-vi.png"
              alt="Quick view"
              style={{ width: '100%', height: '100%' }}
            />
          </button>
        </div>
      </div>

      <div style={{
        padding: '6px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        <h2 style={{
          fontSize: '18px',
          fontFamily: 'Poppins',
          color: '#2c742f',
          textAlign: 'center',
          lineHeight: '150%',
          margin: 0
        }}>{name}</h2>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '4px',
          alignItems: 'center'
        }}>
          <span style={{
            fontSize: '24px',
            fontFamily: 'Poppins',
            fontWeight: 500,
            color: '#1a1a1a',
            lineHeight: '150%'
          }}>${price}</span>
          {originalPrice && (
            <span style={{
              fontSize: '24px',
              fontFamily: 'Poppins',
              color: '#999999',
              textDecoration: 'line-through',
              lineHeight: '150%'
            }}>${originalPrice}</span>
          )}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', gap: '2px' }}>
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={`https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/star-${i + 1}-11.png`}
                alt={`Star ${i + 1}`}
                style={{ width: '18px', height: '18px' }}
              />
            ))}
          </div>
          {feedbackCount > 0 && (
            <span style={{
              fontSize: '12px',
              fontFamily: 'Poppins',
              color: '#808080',
              lineHeight: '130%'
            }}> ({feedbackCount} Feedback)</span>
          )}
        </div>
      </div>

      <div style={{
        padding: '18px 0 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        alignItems: 'center'
      }}>
        <span style={{
          fontSize: '14px',
          fontFamily: 'Poppins',
          color: '#999999',
          lineHeight: '18px'
        }}>Hurry up! Offer ends In:</span>

        <div style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center'
        }}>
          {Object.entries(timeLeft).map(([unit, value]) => (
            <React.Fragment key={unit}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60px'
              }}>
                <span style={{
                  fontSize: '18px',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  color: '#1a1a1a',
                  lineHeight: '150%'
                }}>{value.toString().padStart(2, '0')}</span>
                <span style={{
                  fontSize: '10px',
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  color: '#999999',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                  lineHeight: '100%'
                }}>{unit}</span>
              </div>
              {unit !== 'seconds' && (
                <span style={{
                  fontSize: '20px',
                  fontFamily: 'Poppins',
                  color: '#808080',
                  lineHeight: '27px'
                }}>:</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export { ProductCards, BigProductCard };

