import React from 'react';

const Footer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '60px', minWidth: '1320px', backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 300px' }}>
      {/* Company and Navigation Links Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        {/* Company Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '336px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/plant-1.png" alt="Plant" style={{ width: '32px', height: '32px' }} />
            <span style={{ fontFamily: 'Poppins', fontSize: '32px', fontWeight: 500, letterSpacing: '-0.96px', color: '#fff' }}>
              Ecobazar
            </span>
          </div>
          
          {/* Description */}
          <p style={{ fontFamily: 'Poppins', fontSize: '14px', lineHeight: '150%', color: '#808080', margin: 0 }}>
            Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis dui, eget bibendum magna congue nec.
          </p>
          
          {/* Contact Info */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button style={{ padding: '6px', background: '#1a1a1a', border: 'none', color: '#fff', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500 }}>
              (219) 555-0114
            </button>
            <span style={{ color: '#808080', fontFamily: 'Poppins', fontSize: '16px' }}>or</span>
            <button style={{ padding: '6px', background: '#1a1a1a', border: 'none', color: '#fff', fontFamily: 'Poppins', fontSize: '14px', fontWeight: 500 }}>
              Proxy@gmail.com
            </button>
          </div>
        </div>

        {/* My Account Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500, color: '#fff', margin: 0 }}>My Account</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['My Account', 'Order History', 'Shoping Cart', 'Wishlist'].map((item, index) => (
              <a key={index} href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', color: item === 'Shoping Cart' ? '#fff' : '#999999', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Helps Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500, color: '#fff', margin: 0 }}>Helps</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Contact', 'Faqs', 'Terms & Condition', 'Privacy Policy'].map((item, index) => (
              <a key={index} href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#999999', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Proxy Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500, color: '#fff', margin: 0 }}>Proxy</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['About', 'Shop', 'Product', 'Track Order'].map((item, index) => (
              <a key={index} href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#999999', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>

        {/* Categories Links */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3 style={{ fontFamily: 'Poppins', fontSize: '16px', fontWeight: 500, color: '#fff', margin: 0 }}>Categories</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {['Fruit & Vegetables', 'Meat & Fish', 'Bread & Bakery', 'Beauty & Health'].map((item, index) => (
              <a key={index} href="#" style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#999999', textDecoration: 'none' }}>
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright and Payment Methods Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '24px', paddingBottom: '24px', flexWrap: 'wrap' }}>
        <p style={{ fontFamily: 'Poppins', fontSize: '14px', color: '#808080', margin: 0 }}>
          Ecobazar eCommerce © 2021. All Rights Reserved
        </p>
        
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {[
            { src: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/payment.png', alt: 'Apple Pay' },
            { src: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/payment-2.png', alt: 'Visa' },
            { src: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/payment-3.png', alt: 'Discover' },
            { src: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/payment-4.png', alt: 'Mastercard' }
          ].map((payment, index) => (
            <img key={index} src={payment.src} alt={payment.alt} style={{ width: '45px', height: '31.76px' }} />
          ))}
          
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            border: '1px solid #333333', 
            borderRadius: '5.29px', 
            padding: '4px 5px',
            gap: '2px'
          }}>
            <img src="https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/lock-1.png" alt="Lock" style={{ width: '11px', height: '11px' }} />
            <span style={{ fontFamily: 'Poppins', fontSize: '11px', color: '#fff' }}>Secure</span>
            <span style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 600, color: '#fff' }}>Payment</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

