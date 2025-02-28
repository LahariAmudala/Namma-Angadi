const InstagramGallery = ({ images = [
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr.png',
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr-2.png',
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr-3.png',
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr-4.png',
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr-5.png',
    'https://dashboard.codeparrot.ai/api/image/Z7RdajO_YEiK211a/instagr-6.png'
  ] }) => {
    const containerStyle = {
      width: '100%',
      maxWidth: '1320px',
      margin: '0 auto',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '32px'
    };
  
    const titleStyle = {
      fontFamily: 'Poppins, sans-serif',
      fontSize: '32px',
      fontWeight: 600,
      color: '#1a1a1a',
      lineHeight: '120%',
      margin: 0
    };
  
    const galleryStyle = {
      display: 'flex',
      gap: '24px',
      justifyContent: 'center'
    };
  
    const imageStyle = {
      width: '200px',
      height: '200px',
      borderRadius: '10px',
      objectFit: 'cover',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    };
  
    const handleImageHover = (e) => {
      e.target.style.transform = 'scale(1.05)';
    };
  
    const handleImageLeave = (e) => {
      e.target.style.transform = 'scale(1)';
    };
  
    const handleImageClick = (index) => {
      // Handle image click - could open modal or navigate to Instagram
      console.log(`Clicked image ${index + 1}`);
    };
  
    return (
      <div style={containerStyle}>
        <h2 style={titleStyle}>Follow us on Instagram</h2>
        <div style={galleryStyle}>
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Instagram post ${index + 1}`}
              style={imageStyle}
              onMouseEnter={handleImageHover}
              onMouseLeave={handleImageLeave}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default InstagramGallery;
  