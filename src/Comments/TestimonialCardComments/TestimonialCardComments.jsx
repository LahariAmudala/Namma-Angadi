import React from 'react';

const TestimonialCardComments = ({
  customerName = "Robert Fox",
  customerType = "Customer",
  testimonial = "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
  customerImage = "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/image.png",
  rating = 5,
  starImages = [
    "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/star-6.png",
    "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/star-7.png", 
    "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/star-8.png",
    "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/star-9.png",
    "https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/star-10.png"
  ]
}) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      padding: '24px',
      background: '#ffffff',
      borderRadius: '8px',
      width: '100%',
      maxWidth: '424px',
      minHeight: '254px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        width: '32px',
        height: '26px',
        background: '#00b207',
        opacity: 0.3
      }} />

      <p style={{
        fontFamily: 'Poppins',
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '150%',
        color: '#4d4d4d',
        margin: 0,
        width: '100%'
      }}>
        {testimonial}
      </p>

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingTop: '8px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '12px',
          alignItems: 'center'
        }}>
          <img 
            src={customerImage}
            alt="customer"
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
          <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '16px',
              fontWeight: 500,
              lineHeight: '150%',
              color: '#1a1a1a'
            }}>
              {customerName}
            </span>
            <span style={{
              fontFamily: 'Poppins',
              fontSize: '14px',
              fontWeight: 400,
              lineHeight: '150%',
              color: '#999999'
            }}>
              {customerType}
            </span>
          </div>
        </div>

        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1px'
        }}>
          {starImages.slice(0, rating).map((star, index) => (
            <img
              key={index}
              src={star}
              alt={`star-${index + 1}`}
              style={{
                width: '20px',
                height: '20px'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCardComments;

