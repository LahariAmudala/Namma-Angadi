import React, { useState } from 'react';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    // Handle subscription logic here
    console.log('Subscribing with email:', email);
  };

  const socialMediaLinks = [
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/facebook.png', bg: '#00b207', alt: 'Facebook' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/twitter.png', bg: '#F7F7F7', alt: 'Twitter' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/pinteres.png', bg: '#F7F7F7', alt: 'Pinterest' },
    { icon: 'https://dashboard.codeparrot.ai/api/image/Z7RgPjO_YEiK211o/instagra.png', bg: '#F7F7F7', alt: 'Instagram' }
  ];

  return (
    <div style={{
      width: '100%',
      minHeight: '162px',
      backgroundColor: '#f7f7f7',
      padding: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1320px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Left Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          maxWidth: '448px'
        }}>
          <h2 style={{
            margin: 0,
            fontFamily: 'Poppins',
            fontSize: '24px',
            fontWeight: 600,
            lineHeight: '150%',
            color: '#1A1A1A'
          }}>
            Subcribe our Newsletter
          </h2>
          <p style={{
            margin: 0,
            fontFamily: 'Poppins',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '150%',
            color: '#999999'
          }}>
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Middle Section - Subscribe Form */}
        <div style={{
          display: 'flex',
          gap: '10px',
          maxWidth: '536px',
          flexGrow: 1
        }}>
          <div style={{
            display: 'flex',
            flex: 1,
            position: 'relative',
            maxWidth: '444px'
          }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                width: '100%',
                height: '52px',
                padding: '14px 24px',
                borderRadius: '46px',
                border: '1px solid #E6E6E6',
                backgroundColor: '#FFFFFF',
                fontFamily: 'Poppins',
                fontSize: '16px',
                color: '#808080',
                outline: 'none'
              }}
            />
          </div>
          <button
            onClick={handleSubscribe}
            style={{
              padding: '16px 40px',
              backgroundColor: '#00B207',
              border: 'none',
              borderRadius: '43px',
              color: '#FFFFFF',
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'background-color 0.3s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#009706'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#00B207'}
          >
            Subscribe
          </button>
        </div>

        {/* Right Section - Social Media */}
        <div style={{
          display: 'flex',
          gap: '8px'
        }}>
          {socialMediaLinks.map((social, index) => (
            <div
              key={index}
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                backgroundColor: social.bg,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                transition: 'transform 0.3s'
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
            >
              <img
                src={social.icon}
                alt={social.alt}
                style={{
                  width: '18px',
                  height: '18px'
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;

