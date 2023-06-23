import Footer from '../components/Footer';
import './Home.css';

function Home() {
  return (
    <>
      <div className='home'>
        <div className='background'></div>
        <div className='section top'>
          <h2>Welcome to</h2>
          <h1>RESTAURANT NAME!</h1>
          <p>
            At RESTAURANT NAME, we are passionate for crafting irresistible
            pastries using the finest ingredients. Step inside and savor the
            symphony of flavors that will transport you to a world of culinary
            bliss.
          </p>
          <button>
            <a href='/about'>About</a>
          </button>
        </div>

        <div className='section'>
          <h2>Check out our new menu!</h2>
          <p>We have our classic baked good, as well as brand new recipes</p>
          <button>
            <a href='/menu'>View menu</a>
          </button>
        </div>

        <div className='section'>
          <h2>Reviews</h2>
          <div className='card'>
            <div className='profile'></div>
            <div className='description'>
              <p>
                I have been coming to this bakery since their opening and they
                have never failed to surprise me with their new, scrumptious
                recipes.
              </p>
            </div>
          </div>
          <button>
            <a href='/reviews'>View more reviews</a>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
