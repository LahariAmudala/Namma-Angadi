import './App.css';

import React from 'react';

import TopBar from './components/TopBar/TopBarx';

import SearchBar from './components/SearchBar/SearchBar';
import LogoSection from './components/logoSection/logoSection';
import IconsSection from './components/IconsSection/IconsSection';

import FreshHealthyItems from './FreshHealthyItems/FreshHealthyItems';


import NavLinks from './components/NavLinks/NavLinks';



import MainBanner from './components/MainBanner/MainBanner';
import SummerSaleBanner from './components/SummerSaleBanner/SummerSaleBanner';
import SpecialDealBanner from './components/SpecialDealBanner/SpecialDealBanner';

import FeaturedSection from './context/FeaturedSection/FeaturedSection';


import Heading from './context/Heading/Heading';
import CategoryCard from './context/CategoryCard/CategoryCard';


import HeadingSection from './popularProducts/HeadingSection/HeadingSection';
import ProductCard from './popularProducts/ProductCard/ProductCard';


import CountdownTimer from './saleOfMonth/CountdownTimer/CountdownTimer';
import Button from './saleOfMonth/Button/Button';


import Headinghot from './hotDeals/Headinghot/Headinghot';
import { ProductCards,BigProductCard } from './hotDeals/ProductCard_BigProductCard/ProductCard_BigProductCard';
import DiscountBanner from './DiscountBanner/DiscountBanner';


import LatestNewsHeader from './orangeEgg/LatestNewsHeader/LatestNewsHeader';
import BlogCard from './orangeEgg/BlogCard/BlogCard';




import HeadingComments from './Comments/HeadingComments/HeadingComments';
import TestimonialCardComments from './Comments/TestimonialCardComments/TestimonialCardComments';
import InstagramGallery from './InstagramGallery/InstagramGallery';


import NewsletterSubscription from './BottamPage/NewsletterSubscription/NewsletterSubscription';
import Footer from './BottamPage/Footer/Footer';



const App = () => {
  const categories = [
    { name: 'Fresh Fruit', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1.png' },
    { name: 'Fresh Vegetables', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-2.png' },
    { name: 'Meat & Fish', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-3.png' },
    { name: 'Snacks', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-4.png' },
    { name: 'Beverages', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-5.png' },
    { name: 'Beauty & Health', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-6.png' },
    { name: 'Bread & Bakery', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-7.png' },
    { name: 'Baking Needs', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-8.png' },
    { name: 'Cooking', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-9.png' },
    { name: 'Diabetic Food', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-10.png' },
    { name: 'Dish Detergents', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-11.png' },
    { name: 'Oil', image: 'https://dashboard.codeparrot.ai/api/image/Z7LgYaWN819FoZe8/image-1-12.png' }
  ];

  const products = [
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product.png", name: "Green Apple", price: "14.99", originalPrice: "20.99", onSale: true, salePercent: "50" },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-2.png", name: "Fresh Indian Malta", price: "20.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-3.png", name: "Chinese cabbage", price: "12.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-4.png", name: "Green Lettuce", price: "9.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-5.png", name: "Eggplant", price: "34.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-6.png", name: "Big Potatoes", price: "20.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-7.png", name: "Corn", price: "20.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-8.png", name: "Fresh Cauliflower", price: "12.00", originalPrice: "", onSale: false },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-9.png", name: "Green Capsicum", price: "9.00", originalPrice: "20.99", onSale: true, salePercent: "50" },
    { image: "https://dashboard.codeparrot.ai/api/image/Z7LsLTO_YEiK21u9/product-10.png", name: "Green Chili", price: "34.00", originalPrice: "", onSale: false }
  ];




  const bannerStyle = {
    display: 'flex',
    flexDirection: 'row',
    gap: '24px',
    width: '100%',
    height: 'auto',
  };

  const bannerItemStyle = {
    flexGrow: 1,
    width: '424px',
    height: 'auto',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const textOverlayStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: '#FFFFFF',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '24px',
    textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const priceStyle = {
    position: 'absolute',
    bottom: '80px',
    left: '20px',
    color: '#FFD700',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 700,
    fontSize: '24px',
    lineHeight: '32px',
  };



  return (
    <>
    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Bar */}
      <div style={{ flexGrow: 0, height: '42px' }}>
        <TopBar />
      </div>

      {/* Middle Section */}
<div style={{ flexGrow: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: '1px solid #000' ,marginTop:'10px'}}>
<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
  <LogoSection />
</div>
<div style={{ flexGrow: 2, display: 'flex', justifyContent: 'center' }}>
  <SearchBar />
</div>
<div style={{ flexGrow: 1, display: 'flex', justifyContent: 'flex-end'  }}>
  <IconsSection />
</div>
</div>

<FreshHealthyItems />




      

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

    <div style={{ width: '100%', maxWidth: '1320px', margin: '0 auto', padding: '0 16px' }}>
      <Heading />
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'space-between' }}>
        {categories.map((category, index) => (
          <CategoryCard key={index} name={category.name} image={category.image} />
        ))}
      </div>
    </div>




    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '1320px',
      margin: '0 auto',
    }}>
      <HeadingSection />
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
      }}>
        {products.map((product, index) => (
          <ProductCard 
            key={index} 
            image={product.image}
            name={product.name}
            price={product.price}
            originalPrice={product.originalPrice}
            onSale={product.onSale}
            salePercent={product.salePercent}
          />
        ))}
      </div>
    </div>




    <div style={bannerStyle}>
      <div style={bannerItemStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7Lvv6WN819FoZfO/rectangl.png" alt="Fruits" style={imageStyle} />
        <div style={textOverlayStyle}>BEST DEALS<br />Sale of the Month</div>
        <CountdownTimer />
        <Button text="Shop Now" />
      </div>
      <div style={bannerItemStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7Lvv6WN819FoZfO/rectangl-2.png" alt="Meat" style={imageStyle} />
        <div style={textOverlayStyle}>85% FAT FREE<br />Low-Fat Meat</div>
        <div style={priceStyle}>Started at <span style={{ color: '#FF4500' }}>$79.99</span></div>
        <Button text="Shop Now" />
      </div>
      <div style={bannerItemStyle}>
        <img src="https://dashboard.codeparrot.ai/api/image/Z7Lvv6WN819FoZfO/rectangl-3.png" alt="Fresh Fruit" style={imageStyle} />
        <div style={textOverlayStyle}>SUMMER SALE<br />100% Fresh Fruit</div>
        <div style={priceStyle}>Up to <span style={{ color: '#FFD700' }}>64% OFF</span></div>
        <Button text="Shop Now" />
      </div>
    </div>



    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', height: 'auto', backgroundColor: '#f7f7f7', padding: '20px' }}>
      <Headinghot title="Hot Deals" />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', width: '100%', height: 'auto', gap: '20px' }}>
        <BigProductCard 
          image="https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/image.png"
          name="Chinese cabbage"
          price="12.00"
          originalPrice="24.00"
          feedbackCount={524}
          style={{ flexGrow: 2, height: 'auto', margin: '10px' }}
        />
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', flexGrow: 3, justifyContent: 'space-around', height: 'auto', gap: '20px' }}>
          {[
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-2.png", name: "Green Lettuce", price: "9.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-3.png", name: "Eggplant", price: "34.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-4.png", name: "Fresh Cauliflower", price: "12.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-5.png", name: "Green Capsicum", price: "9.00", originalPrice: "20.99" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-6.png", name: "Green Chili", price: "34.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-7.png", name: "Big Potatoes", price: "12.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-8.png", name: "Corn", price: "12.00" },
            { image: "https://dashboard.codeparrot.ai/api/image/Z7MNiDO_YEiK21vi/product-9.png", name: "Red Chili", price: "12.00" }
           
          ].map((product, index) => (
            <ProductCards 
              key={index} 
              image={product.image} 
              name={product.name} 
              price={product.price} 
              originalPrice={product.originalPrice} 
              style={{ flexGrow: 1, height: 'auto', margin: '10px' }} 
            />
          ))}
        </div>
      </div>
    </div>
    <DiscountBanner />



    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
      maxWidth: '1320px',
      margin: '0 auto',
      padding: '20px 0',
    }}>
      <LatestNewsHeader style={{
        width: '100%',
        height: '38px',
        marginBottom: '40px',
      }} />
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
      }}>
        <BlogCard style={{
          flexGrow: 1,
          maxWidth: '424px',
          height: 'auto',
          margin: '0 10px',
        }} imageSrc="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/image.png" date={{ day: '18', month: 'Nov' }} title="Curabitur porttitor orci eget neque accumsan venenatis. Nunc fermentum." />
        <BlogCard style={{
          flexGrow: 1,
          maxWidth: '424px',
          height: 'auto',
          margin: '0 10px',
        }} imageSrc="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/image-2.png" date={{ day: '29', month: 'Jan' }} title="Eget lobortis lorem lacinia. Vivamus pharetra semper," />
        <BlogCard style={{
          flexGrow: 1,
          maxWidth: '424px',
          height: 'auto',
          margin: '0 10px',
        }} imageSrc="https://dashboard.codeparrot.ai/api/image/Z7RRRDO_YEiK210p/image-3.png" date={{ day: '21', month: 'Feb' }} title="Maecenas blandit risus elementum mauris malesuada." />
      </div>
    </div>




    <div style={{
      width: '100%',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#f2f2f2',
      paddingTop: '60px',
      paddingBottom: '60px'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '1320px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: '100px', // Adjusted padding for better alignment
        paddingLeft: '100px' // Adjusted padding for better alignment
      }}>
        <HeadingComments />
      </div>
      <div style={{
        width: '100%',
        maxWidth: '1320px',
        display: 'flex',
        flexDirection: 'row',
        gap: '32px',
        marginTop: '24px',
        justifyContent: 'center' // Center the testimonial cards
      }}>
        <TestimonialCardComments 
          customerName="Robert Fox"
          customerType="Customer"
          testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          customerImage="https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/image.png"
          rating={5}
        />
        <TestimonialCardComments
          customerName="Dianne Russell"
          customerType="Customer"
          testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          customerImage="https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/image-2.png"
          rating={5}
        />
        <TestimonialCardComments
          customerName="Eleanor Pena"
          customerType="Customer"
          testimonial="Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget"
          customerImage="https://dashboard.codeparrot.ai/api/image/Z7RZ2jO_YEiK2103/image-3.png"
          rating={5}
        />
      </div>
    </div>


    <InstagramGallery />





    <div style={{ width: '100%', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Newsletter Subscription Section */}
      <div style={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }}>
        <NewsletterSubscription />
      </div>

      {/* Footer Section */}
      <div style={{ flexGrow: 1, backgroundColor: '#1a1a1a', color: '#fff', padding: '60px 150px', display: 'flex', flexDirection: 'column', gap: '60px' }}>
        <Footer />
      </div>
    </div>
















    

    





    </>

     

  );
};

export default App;







