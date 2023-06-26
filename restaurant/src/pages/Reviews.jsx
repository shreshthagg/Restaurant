import './Reviews.css';
import background from '../assets/bakery.png';
import Footer from '../components/Footer';

function Reviews() {
  return (
    <>
      <div
        className='banner-image'
        style={{ backgroundImage: `url(${background})`, height: 30 }}
      >
        <h1 className='review-title'>Customer Reviews</h1>
      </div>
      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src='C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\emily.jpg' />

              <p className='customer-name'>Emily Patel</p>
            </div>
          </div>
          <div className='star-rating'>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ></link>

            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>

          <p className='review-text'>
            (This French bakery) is an absolute gem! The moment you step inside,
            you are greeted by the irresistible aroma of freshly baked pastries.
            The croissants are buttery and flaky, and the pain au chocolat is to
            die for. The friendly staff adds to the delightful experience.
            Highly recommended!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src='C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png' />

              <p className='customer-name'>David Johnson</p>
            </div>
          </div>
          <div className='star-rating'>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ></link>

            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='review-text'>
            If you are searching for an authentic taste of France, look no
            further than this bakery. Their baguettes are crusty on the outside
            and soft on the inside, just like the ones I had in Paris. The
            macarons are delicate and bursting with flavor. It is a cozy spot
            that transports you straight to the streets of France.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src='C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png' />

              <p className='customer-name'>Maria García</p>
            </div>
          </div>
          <div className='star-rating'>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ></link>

            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='review-text'>
            This French bakery is a true hidden gem! The quality of their baked
            goods is exceptional. From the rich and creamy éclairs to the
            delicate fruit tarts, every bite is a piece of heaven. The attention
            to detail and the use of high-quality ingredients are evident in
            their creations. A must-visit for any pastry lover!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src='C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png' />

              <p className='customer-name'>Benjamin Thompson</p>
            </div>
          </div>
          <div className='star-rating'>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ></link>

            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='review-text'>
            I can't get enough of this French bakery's delectable treats! Their
            selection of pastries is diverse and mouthwatering. The pain aux
            raisins is my personal favorite, perfectly balanced with just the
            right amount of sweetness. The warm and cozy atmosphere makes it a
            great place to relax and enjoy your treats with a cup of coffee.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src='C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png' />

              <p className='customer-name'>Sarah Lee</p>
            </div>
          </div>
          <div className='star-rating'>
            <link
              rel='stylesheet'
              href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css'
            ></link>

            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
            <span className='fa fa-star checked'></span>
          </div>
          <p className='review-text'>
            I've traveled extensively in France, and I can confidently say that
            this bakery rivals some of the best I've encountered in Paris. The
            flavors are authentic and the craftsmanship is impeccable. The
            croissants are light and airy, and the tarte-aux-fruits is a true
            work of art. Treat yourself to a slice of French indulgence at this
            wonderful bakery.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reviews;
