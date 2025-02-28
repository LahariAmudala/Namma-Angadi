import React from 'react';

const CategoryCard = ({ name = 'Category Name', image = 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1.png' }) => {
  const cardStyle = {
    width: '200px',
    minWidth: '200px',
    backgroundColor: '#ffffff',
    borderRadius: '5px',
    border: '1px solid #e6e6e6',
    padding: '16px 0 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    cursor: 'pointer',
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out'
  };

  const imageStyle = {
    width: '190px',
    height: '130px',
    margin: '0 auto',
    borderRadius: '5px',
    objectFit: 'cover'
  };

  const textStyle = {
    fontFamily: 'Poppins',
    fontWeight: 500,
    fontSize: '18px',
    lineHeight: '150%',
    color: '#1a1a1a',
    margin: 0,
    textAlign: 'center',
    padding: '0 8px'
  };

  const hoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
  };

  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      style={{
        ...cardStyle,
        ...(isHovered ? hoverStyle : {})
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src={image} 
        alt={name} 
        style={imageStyle}
      />
      <p style={textStyle}>{name}</p>
    </div>
  );
};

export default CategoryCard;

