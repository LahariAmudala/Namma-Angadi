import React from 'react';

const NavLinks = () => {
  const navLinkStyle = {
    color: '#999999',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '150%',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    cursor: 'pointer',
  };

  const activeNavLinkStyle = {
    ...navLinkStyle,
    color: '#FFFFFF',
  };

  const containerStyle = {
    backgroundColor: '#333333',
    padding: '16px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minWidth: '320px',
    height: '60px',
    boxSizing: 'border-box',
  };

  const navLinksGroupStyle = {
    display: 'flex',
    gap: '32px',
    alignItems: 'center',
  };

  const phoneStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#FFFFFF',
    fontFamily: 'Poppins',
    fontSize: '14px',
    fontWeight: 500,
    lineHeight: '150%',
  };

  return (
    <div style={containerStyle}>
      <div style={navLinksGroupStyle}>
        <div style={activeNavLinkStyle}>
          <span>Home</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/chevron.png" alt="chevron" width="16" height="16" />
        </div>
        <div style={navLinkStyle}>
          <span>Shop</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/chevron-2.png" alt="chevron" width="16" height="16" />
        </div>
        <div style={navLinkStyle}>
          <span>Pages</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/chevron-3.png" alt="chevron" width="16" height="16" />
        </div>
        <div style={navLinkStyle}>
          <span>Blog</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/chevron-4.png" alt="chevron" width="16" height="16" />
        </div>
        <div style={navLinkStyle}>
          <span>About Us</span>
        </div>
        <div style={navLinkStyle}>
          <span>Contact Us</span>
        </div>
      </div>
      <div style={phoneStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/phone-cal.png" alt="phone" width="28" height="28" />
        <span>(219) 555-0114</span>
      </div>
    </div>
  );
};

export default NavLinks;

