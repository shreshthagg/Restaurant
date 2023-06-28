import './Reviews.css';
import background from '../assets/bakery.png';
import Footer from '../components/Footer';
import emily from '../assets/emily.jpg';
import david from '../assets/david.jpg';
import sarah from '../assets/sarah.jpg';
import banjamin from '../assets/banjamin.jpg';
import maria from '../assets/maria.jpg';
import profile from '../assets/profile.png';
import woman1 from '../assets/woman1.jpg';
import woman2 from '../assets/woman2.jpg';
import woman3 from '../assets/woman3.jpg';
import woman4 from '../assets/woman4.jpg';
import man1 from '../assets/man1.jpg';
import man2 from '../assets/man2.jpg';
import man3 from '../assets/man3.jpg';
import man4 from '../assets/man4.jpg';
import man5 from '../assets/man5.jpg';

function Reviews() {
  return (
    <>
      <div
        className='banner-image'
        style={{ backgroundImage: `url(${background})`, height: 30 }}
      >
        <h1 className='review-title'>What our customers have to say:</h1>
      </div>
      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={emily} />

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
            La Petite Pâtisserie is an absolute gem! The moment you step inside,
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
              <img src={david} />
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
              <img src={maria} />

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
              <img src={woman4} />
              <p className='customer-name'>Harper Wright</p>
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
            <span className='fa fa-star'></span>
          </div>
          <p className='review-text'>
            Step into this charming French bakery and be transported to a world
            of culinary delights. The pastries are exquisite, with the
            croissants stealing the show with their buttery goodness. The
            bakers' expertise is evident in the delicate macarons and the
            beautifully decorated cakes. A true haven for French pastry
            connoisseurs.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={banjamin} />
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
              <img src={sarah} />

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
      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={profile} />
              <p className='customer-name'>Olivia Anderson</p>
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
            A delightful find! This French bakery captures the essence of
            Parisian flavors with its delectable pastries. The croissants are
            buttery and flaky, and the assortment of tarts and cakes is a true
            treat for the taste buds. The charming atmosphere and friendly staff
            create a wonderful experience.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={man5} />
              <p className='customer-name'>Ethan Ramirez</p>
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
            I stumbled upon this French bakery and it was love at first bite!
            Their baguettes are crusty on the outside, soft on the inside, and
            perfect for making sandwiches. The patisserie items are equally
            delightful; the éclairs and tartes are beautifully crafted with a
            burst of flavors. Highly recommended!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={profile} />
              <p className='customer-name'>Isabella Wilson</p>
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
            This French bakery is a hidden treasure! Their croissants are simply
            divine—flaky, buttery, and melt-in-your-mouth. The boulangerie has
            an authentic charm, and their range of pastries is impressive. From
            the classic pain au chocolat to the delicate mille-feuille, every
            item is a delicious masterpiece.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={profile} />
              <p className='customer-name'>Noah Thompson</p>
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
            A taste of France right in the heart of Waterloo. The bakery offers
            an array of authentic French pastries that are simply irresistible.
            From the light and airy macarons to the indulgent chocolate éclairs,
            each bite is a journey to the streets of Paris. Don't miss their
            heavenly croissants!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={man1} />
              <p className='customer-name'>Liam Mitchell</p>
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
            I've been a loyal customer of this bakery for years, and for good
            reason. The quality of their baked goods is consistently top-notch.
            Their artisan bread is crusty on the outside, soft on the inside,
            and full of flavor. The cinnamon rolls are a personal favorite, with
            their perfect balance of sweetness and cinnamon. Highly recommended!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={profile} />
              <p className='customer-name'>Sophia Martin</p>
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
            I'm in awe of the exquisite pastries at this French bakery! The
            macarons are small bites of heaven—crispy on the outside, chewy on
            the inside, and bursting with delightful flavors. Their tarts are
            visually stunning and incredibly delicious. You can taste the
            passion and skill put into each creation. A true pastry paradise!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={woman1} />
              <p className='customer-name'>Ava Robinson</p>
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
            I can't resist the allure of this French bakery! Their
            pain-au-chocolat is a chocolate lover's dream—a heavenly combination
            of buttery pastry and rich chocolate. The assortment of delicate
            cakes and tarts is also outstanding. Plus, the owners take great
            pride in sharing the history and traditions of French baking. A
            must-visit!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={man3} />
              <p className='customer-name'>Lucas Clark</p>
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
            I can't get enough of the delectable treats from this bakery! The
            bread is always fresh and crusty, and their pastries are heavenly.
            The apple pie is a must-try, with its perfectly spiced filling and
            buttery crust. Don't miss out on their muffins and scones
            either—they make for a delightful breakfast or afternoon snack.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={woman2} />
              <p className='customer-name'>Mia Cooper</p>
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
            I'm in awe of the artistry displayed at this French bakery. The
            pastries are like edible works of art, beautifully crafted with
            intricate details. The flavors are equally impressive—subtle and
            balanced. Whether you're indulging in a delicate éclair or savoring
            a decadent chocolate mousse, you're in for a taste sensation!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={man4} />
              <p className='customer-name'>Oliver Lewis</p>
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
            Experience the art of French baking at its finest in this bakery.
            The croissants are a true masterpiece—golden, crisp, and deliciously
            buttery. The assortment of pastries, from the decadent chocolate
            eclairs to the delicate fruit tarts, showcases the baker's skill and
            passion. A little taste of France in every bite!
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={profile} />
              <p className='customer-name'>Amelia Turner</p>
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
            <span className='fa fa-star'></span>
            <span className='fa fa-star'></span>
          </div>
          <p className='review-text'>
            This bakery has its highs and lows. Some of their pastries are
            exceptional and demonstrate their expertise, while others fall flat.
            Their chocolate cake is to die for, but their fruit tarts can be
            overly sweet. It's a bit of a mixed bag, but it's worth exploring
            their offerings to find the gems among the average.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={woman3} />
              <p className='customer-name'>Charlotte Hill</p>
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
            <span className='fa fa-star'></span>
          </div>
          <p className='review-text'>
            I have mixed feelings about this bakery. Their croissants are truly
            excellent—buttery, flaky, and a joy to eat. However, their selection
            can be limited, and it's disappointing when they run out of certain
            items early in the day. If you're lucky enough to snag one of their
            popular pastries, you're in for a treat, but it can be hit or miss.
          </p>
        </div>
      </div>

      <div className='review-container container'>
        <div className='review-box'>
          <div className='customer-detail'>
            <div className='customer-photo'>
              <img src={man2} />
              <p className='customer-name'>Elijah Young</p>
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
            <span className='fa fa-star'></span>
          </div>
          <p className='review-text'>
            Prepare to be enchanted by the flavors and aromas of this authentic
            French bakery. The croissants are exceptional—light, flaky, and
            oh-so-buttery. The patisserie treats are equally delightful, with
            their delicate textures and exquisite flavors. The friendly staff
            adds to the wonderful experience. A true delight for pastry
            aficionados!
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Reviews;
