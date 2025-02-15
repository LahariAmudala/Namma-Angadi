import './App.css';

import React from 'react';
import TopBar from './components/TopBar/TopBarx';
import SearchBar from './components/SearchBar/SearchBar';
import LogoSection from './components/logoSection/logoSection';
import IconsSection from './components/IconsSection/IconsSection';
import NavLinks from './components/NavLinks/NavLinks';



import MainBanner from './components/MainBanner/MainBanner';
import SummerSaleBanner from './components/SummerSaleBanner/SummerSaleBanner';
import SpecialDealBanner from './components/SpecialDealBanner/SpecialDealBanner';

import FeaturedSection from './context/FeaturedSection/FeaturedSection';



const App = () => {
  return (
    <>
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{ flexGrow: 0, height: '42px' }}>
        <TopBar />
      </div>

      {/* Middle Section */}
      <div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid #000' }}>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
          <LogoSection />
        </div>
        <div style={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
          <SearchBar />
        </div>
        <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <IconsSection />
        </div>
      </div>

      {/* Navigation Links */}
      <div style={{ flexGrow: 0, height: '60px', backgroundColor: '#333' }}>
        <NavLinks />
      </div>
    </div>

    <div style={{

      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: 'auto',
      padding: '20px',
      boxSizing: 'border-box',
    }}>
      <div style={{

        flexGrow: 2,
        height: 'auto',
        marginRight: '20px',
      }}>
        <MainBanner />
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        height: 'auto',
      }}>
        <div style={{
          marginBottom: '20px',
        }}>
          <SummerSaleBanner />
        </div>
        <div>
          <SpecialDealBanner />
        </div>
      </div>
    </div>
    <FeaturedSection />
    </>

      

    
    




  );
};

export default App;






