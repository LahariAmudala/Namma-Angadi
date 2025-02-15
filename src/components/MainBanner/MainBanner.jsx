import React from 'react';

const MainBanner = ({
  title = "Get Groceries at Reasonable Prices",
  saleText = "Sale up to",
  discountPercent = "10% OFF",
  shippingText = "Free shipping on orders above 500",
  buttonText = "Shop now",
  backgroundImage = "https://dashboard.codeparrot.ai/api/image/Z7BwneepongUSRmF/bannar-b.png"
}) => {
  const bannerStyle = {
    width: '100%',
    minWidth: '320px',
    height: '600px',
    borderRadius: '10px',
    background: `linear-gradient(98.82deg, rgba(0,0,0,0.6) 10.4%, rgba(0,0,0,0) 59.43%), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  };

  const contentContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '28px',
    padding: '0 60px',
    maxWidth: '596px',
  };

  const titleStyle = {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '120%',
  };

  const saleContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '12px',
    alignItems: 'center',
  };

  const verticalLineStyle = {
    width: '2px',
    height: '65px',
    backgroundColor: '#84D187',
  };

  const saleInfoStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  };

  const saleRowStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '8px',
    alignItems: 'center',
  };

  const saleTextStyle = {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '150%',
  };

  const discountStyle = {
    backgroundColor: '#FF8A00',
    padding: '4px 12px',
    borderRadius: '5px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 600,
    lineHeight: '150%',
  };

  const shippingTextStyle = {
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '150%',
    opacity: 0.8,
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '15px',
    backgroundColor: '#FFFFFF',
    borderRadius: '53px',
    width: '191px',
    height: '51px',
    border: 'none',
    cursor: 'pointer',
    transition: 'transform 0.2s',
  };

  const buttonTextStyle = {
    color: '#00B207',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 600,
    lineHeight: '120%',
  };

  const handleButtonHover = (e) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={bannerStyle}>
      <div style={contentContainerStyle}>
        <h1 style={titleStyle}>{title}</h1>
        <div style={saleContainerStyle}>
          <div style={verticalLineStyle}></div>
          <div style={saleInfoStyle}>
            <div style={saleRowStyle}>
              <span style={saleTextStyle}>{saleText}</span>
              <span style={discountStyle}>{discountPercent}</span>
            </div>
            <span style={shippingTextStyle}>{shippingText}</span>
          </div>
        </div>
        <button 
          style={buttonStyle}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
        >
          <span style={buttonTextStyle}>{buttonText}</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BwneepongUSRmF/group.png" alt="arrow" width="15" height="12" />
        </button>
      </div>
    </div>
  );
};

export default MainBanner;

