import React from 'react';

const SearchBar = ({ onSearch = () => {} }) => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      width: '100%',
      maxWidth: '498px',
      height: '45px',
      border: '1px solid #e6e6e6',
      borderRadius: '6px',
      minWidth: '300px',
      boxSizing: 'border-box'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '12px 18px 12px 16px',
        gap: '8px',
        flex: 1
      }}>
        <img 
          src="https://dashboard.codeparrot.ai/api/image/Z7BjpI9nxTWt8i5R/search.png"
          alt="search"
          style={{
            width: '20px',
            height: '20px'
          }}
        />
        <input
          type="text"
          placeholder="Search"
          style={{
            border: 'none',
            outline: 'none',
            width: '100%',
            fontFamily: 'Poppins',
            fontSize: '15px',
            lineHeight: '21px',
            color: '#808080'
          }}
        />
      </div>
      <button
        onClick={onSearch}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '14px 24px',
          background: '#00b207',
          border: 'none',
          borderTopRightRadius: '6px',
          borderBottomRightRadius: '6px',
          cursor: 'pointer',
          transition: 'background-color 0.2s'
        }}
        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#009906'}
        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#00b207'}
      >
        <span style={{
          fontFamily: 'Poppins',
          fontWeight: 600,
          fontSize: '14px',
          lineHeight: '120%',
          color: '#ffffff'
        }}>
          Search
        </span>
      </button>
    </div>
  );
};

export default SearchBar;

