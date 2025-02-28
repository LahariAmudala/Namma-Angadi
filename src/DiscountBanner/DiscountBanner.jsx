const DiscountBanner = ({
    backgroundImage = 'https://dashboard.codeparrot.ai/api/image/Z7ROkqWN819FoZlb/discount.png',
    discountText = '37% OFF',
    saleText = 'Summer Sale',
    descriptionText = 'Free on all your order, Free Shipping and 30 days money-back guarantee',
    buttonText = 'Shop Now',
    buttonIcon = 'https://dashboard.codeparrot.ai/api/image/Z7ROkqWN819FoZlb/group.png'
  }) => {
    const containerStyle = {
      width: '1220px',
      height: 'auto',
      borderRadius: '10px',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      padding: '60px',
      position: 'relative',
      display: 'flex',
      justifyContent: 'flex-end'
    };
  
    const infoContainerStyle = {
      width: '441px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    };
  
    const titleContainerStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    };
  
    const summerSaleStyle = {
      color: '#FFFFFF',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 500,
      letterSpacing: '0.32px',
      lineHeight: '100%',
      textTransform: 'uppercase'
    };
  
    const discountStyle = {
      color: '#FFFFFF',
      fontFamily: 'Poppins',
      fontSize: '56px',
      fontWeight: 600,
      lineHeight: '120%'
    };
  
    const descriptionStyle = {
      color: '#FFFFFF',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 400,
      lineHeight: '150%',
      opacity: 0.7
    };
  
    const buttonStyle = {
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      padding: '16px 40px',
      backgroundColor: '#00B207',
      borderRadius: '43px',
      border: 'none',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      marginTop: '16px'
    };
  
    const buttonTextStyle = {
      color: '#FFFFFF',
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '120%'
    };
  
    const arrowIconStyle = {
      width: '15px',
      height: '12.05px'
    };
  
    const handleHover = (e) => {
      e.currentTarget.style.backgroundColor = '#009706';
    };
  
    const handleLeave = (e) => {
      e.currentTarget.style.backgroundColor = '#00B207';
    };
  
    return (
      <div style={containerStyle}>
        <div style={infoContainerStyle}>
          <div style={titleContainerStyle}>
            <span style={summerSaleStyle}>{saleText}</span>
            <span style={discountStyle}>{discountText}</span>
          </div>
          <p style={descriptionStyle}>
            {descriptionText}
          </p>
          <button 
            style={buttonStyle}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
          >
            <span style={buttonTextStyle}>{buttonText}</span>
            <img 
              src={buttonIcon} 
              alt="arrow" 
              style={arrowIconStyle}
            />
          </button>
        </div>
      </div>
    );
  };
  
  export default DiscountBanner;
  