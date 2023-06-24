import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
// import menuData from '../data/menuData';
import './Menu.css';

const Menu = () => {
  const [menuData, setMenuData] = useState();
  const [activeCategory, setActiveCategory] = useState();

  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/menu')
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Load menu failed!');
      })
      .then((res) => {
        setMenuData(res);
        setActiveCategory(Object.keys(res)[0]);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage('Load menu failed!');
      });
  }, []);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <>
      <div className='menu'>
        <h1 className='menu-header'>Menu</h1>

        <div className='menu-border'>
          {' '}
          {/* Wrap the elements in a div with the menu-border class */}
          <div className='menu-categories'>
            {menuData &&
              Object.keys(menuData).map((category) => (
                <button
                  key={category}
                  className={`category-btn ${
                    category === activeCategory ? 'active' : ''
                  }`}
                  onClick={() => handleClick(category)}
                >
                  {category}
                </button>
              ))}
          </div>
          <div className='menu-items'>
            {menuData &&
              menuData[activeCategory].map((item, index) => (
                <div className='menu-item' key={index}>
                  <div className='item-image'>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className='item-details'>
                    <h3 className='menu-item-h3'>{item.name}</h3>
                    <p className='item-price'>${item.price.toFixed(2)}</p>
                    <p className='item-description'>{item.description}</p>
                    <div className='item-tags'>
                      {item.vegan && <span className='tag vegan'>Vegan</span>}
                      {item.glutenFree && (
                        <span className='tag gluten-free'>Gluten-Free</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {errorMessage && <p className='error'>{errorMessage}</p>}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Menu;
