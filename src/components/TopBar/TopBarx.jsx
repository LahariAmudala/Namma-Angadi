import React from 'react';


const TopBar = () => {
  const styles = {
    container: {
      width: '100%',
      height: '42px',
      backgroundColor: '#fff',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 20px', // Adjusted padding for responsiveness
      minWidth: '320px', // Set a minimum width for responsiveness
    },
    contact: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '8px',
    },
    mapPin: {
      width: '15px',
      height: '18px',
    },
    locationText: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#666666',
    },
    links: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '20px',
    },
    languageSelector: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
    },
    currencySelector: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '6px',
      cursor: 'pointer',
    },
    chevron: {
      width: '7px',
      height: '3.5px',
    },
    selectorText: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#666666',
      textAlign: 'center',
    },
    divider: {
      width: '1px',
      height: '15px',
      backgroundColor: '#E6E6E6',
    },
    account: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: '4px',
    },
    accountLink: {
      fontFamily: 'Poppins',
      fontSize: '12px',
      fontWeight: 400,
      lineHeight: '130%',
      color: '#666666',
      textDecoration: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contact}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/map-pin.png" alt="Location" style={styles.mapPin} />
        <span style={styles.locationText}>
          Store Location: Lincoln- 344, Illinois, Chicago, USA
        </span>
      </div>
      
      <div style={styles.links}>
        <div style={styles.languageSelector}>
          <span style={styles.selectorText}>Eng</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/group.png" alt="Language selector" style={styles.chevron} />
        </div>
        
        <div style={styles.currencySelector}>
          <span style={styles.selectorText}>USD</span>
          <img src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/group-2.png" alt="Currency selector" style={styles.chevron} />
        </div>
        
        <div style={styles.divider}></div>
        
        <div style={styles.account}>
          <span style={styles.accountLink}>Sign In</span>
          <span style={styles.accountLink}>/</span>
          <span style={styles.accountLink}>Sign Up</span>


        </div>
      </div>
    </div>





























  );
};

export default TopBar;

