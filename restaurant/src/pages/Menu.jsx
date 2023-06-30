import { useEffect, useState } from 'react';
import background from '../assets/menubg.jpg';
import Footer from '../components/Footer';
// import menuData from '../data/menuData';
import './Menu.css';
import Modal from 'react-modal';
// Modal.setAppElement('#root');

const Menu = () => {
  const [menuData, setMenuData] = useState();
  const [activeCategory, setActiveCategory] = useState();

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:3000/api/v1/menu')
      .then((res) => {
        setLoading(false);
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
        setLoading(false);
        console.log(error);
        setErrorMessage('Load menu failed!');
      });
  }, []);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className='menu-header-image'
        style={{ backgroundImage: `url(${background})`, height: 30 }}
      >
        <h1 className='menu-header'>Menu</h1>
      </div>
      <div className='menu'>
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
                <div
                  className='menu-item'
                  key={index}
                  onClick={() => openModal(item)}
                >
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
          {loading && <div className='loader'> </div>}
          {errorMessage && <p className='error'>{errorMessage}</p>}
        </div>
      </div>
      <Modal
        isOpen={selectedItem !== null}
        onRequestClose={() => setSelectedItem(null)}
        className='item-modal'
        overlayClassName='modal-overlay'
      >
        {selectedItem && (
          <div className='modal-content'>
            <img
              src={selectedItem.image}
              alt={selectedItem.name}
              className='modal-image'
            />
            <div className='modal-details'>
              <h2 className='modal-name'>{selectedItem.name}</h2>
              <p className='modal-ingredients-header'>Ingredients:</p>
              <p className='modal-ingredients'>
                {selectedItem.ingredients.join(', ')}
              </p>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default Menu;
