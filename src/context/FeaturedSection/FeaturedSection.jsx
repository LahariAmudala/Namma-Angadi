const FeaturedSection = ({ features = defaultFeatures }) => {
    const containerStyle = {
      display: 'flex',
      flexDirection: 'row',
      gap: '61px',
      padding: '40px',
      backgroundColor: '#ffffff',
      borderRadius: '8px',
      justifyContent: 'space-between',
      alignItems: 'center'
    };
  
    const featureStyle = {
      display: 'flex',
      flexDirection: 'row',
      gap: '16px',
      alignItems: 'center'
    };
  
    const iconStyle = {
      width: '40px',
      height: '40px'
    };
  
    const infoStyle = {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    };
  
    const titleStyle = {
      fontFamily: 'Poppins',
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '120%',
      color: '#1a1a1a',
      margin: 0
    };
  
    const descriptionStyle = {
      fontFamily: 'Poppins',
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '150%',
      color: '#999999',
      margin: 0
    };
  
    return (
      <div style={containerStyle}>
        {features.map((feature, index) => (
          <div key={index} style={featureStyle}>
            <img 
              src={feature.icon} 
              alt={feature.title} 
              style={iconStyle}
            />
            <div style={infoStyle}>
              <h3 style={titleStyle}>{feature.title}</h3>
              <p style={descriptionStyle}>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  const defaultFeatures = [
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7B1x-epongUSRmN/delivery.png",
      title: "Free Shipping",
      description: "Free shipping on all your order"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7B1x-epongUSRmN/headphon.png",
      title: "Customer Support 24/7",
      description: "Instant access to Support"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7B1x-epongUSRmN/shopping.png",
      title: "100% Secure Payment",
      description: "We ensure your money is save"
    },
    {
      icon: "https://dashboard.codeparrot.ai/api/image/Z7B1x-epongUSRmN/package.png",
      title: "Money-Back Guarantee",
      description: "30 Days Money-Back Guarantee"
    }
  ];
  
  export default FeaturedSection;
  
  