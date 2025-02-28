import React from 'react';

const BlogCard = ({ 
  style,
  imageSrc = 'https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/image.png',
  date = { day: '18', month: 'Nov' },
  category = 'Food',
  title = 'Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum.',
  author = 'Admin',
  comments = '65 Comments'
}) => {
  const cardStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '424px',
    minWidth: '320px',
    height: 'auto',
    backgroundColor: 'inherit',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    overflow: 'hidden',
    ...style
  };

  const imageContainerStyle = {
    position: 'relative',
    width: '100%',
    height: '324px',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const dateStyle = {
    position: 'absolute',
    left: '16px',
    bottom: '16px',
    width: '58px',
    height: '58px',
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dayStyle = {
    fontFamily: 'Poppins',
    fontSize: '20px',
    fontWeight: 500,
    lineHeight: '150%',
    color: '#1A1A1A',
  };

  const monthStyle = {
    fontFamily: 'Poppins',
    fontSize: '12px',
    fontWeight: 500,
    letterSpacing: '0.36px',
    color: '#808080',
    textTransform: 'uppercase',
  };

  const infoContainerStyle = {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    backgroundColor: '#FFFFFF',
    border: '1px solid #E6E6E6',
  };

  const metaInfoStyle = {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
  };

  const metaItemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#4D4D4D',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 400,
  };

  const titleStyle = {
    fontFamily: 'Poppins',
    fontSize: '18px',
    fontWeight: 500,
    lineHeight: '150%',
    color: '#1A1A1A',
    marginTop: '8px',
  };

  const readMoreStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    color: '#00B207',
    fontFamily: 'Poppins',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    border: 'none',
    background: 'none',
    padding: 0,
  };

  return (
    <div style={cardStyle}>
      <div style={imageContainerStyle}>
        <img src={imageSrc} alt="Blog" style={imageStyle} />
        <div style={dateStyle}>
          <span style={dayStyle}>{date.day}</span>
          <span style={monthStyle}>{date.month}</span>
        </div>
      </div>
      <div style={infoContainerStyle}>
        <div>
          <div style={metaInfoStyle}>
            <div style={metaItemStyle}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/tag-1.png" alt="Category" width="20" height="20" />
              <span>{category}</span>
            </div>
            <div style={metaItemStyle}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/user-3-1.png" alt="Author" width="20" height="20" />
              <span>By {author}</span>
            </div>
            <div style={metaItemStyle}>
              <img src="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/chat-cent.png" alt="Comments" width="18" height="18" />
              <span>{comments}</span>
            </div>
          </div>
          <h3 style={titleStyle}>{title}</h3>
        </div>
        <button style={readMoreStyle}>
          Read More
          <img src="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/arrow.png" alt="Arrow" width="15" height="12" />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;

