
import "./Reviews.css";
import background from "../assets/bakery.png"
import Footer from "../components/Footer";


function Reviews() {
  return (
    <>
    <div className="banner-image" style={{ backgroundImage: `url(${background})`, height: 30 }}>
      <h1 className="review-title">
        Customer Reviews
      </h1>
    </div>
    <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
          <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\emily.jpg"/>

           <p className="customer-name">
            Emily Patel
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>

                <p className="review-text">
                (This French bakery) is an absolute gem! The moment you step inside,
                you are greeted by the irresistible aroma of freshly baked pastries.
                The croissants are buttery and flaky, and the pain au chocolat is to die for. 
                The friendly staff adds to the delightful experience. Highly recommended!
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            David Johnson
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                If you are searching for an authentic taste of France, look no further than this bakery.
                 Their baguettes are crusty on the outside and soft on the inside, just like the ones I had in Paris.
                The macarons are delicate and bursting with flavor. 
                It is a cozy spot that transports you straight to the streets of France.
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            Maria García
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                This French bakery is a true hidden gem! The quality of their baked goods is exceptional. 
                From the rich and creamy éclairs to the delicate fruit tarts, every bite is a piece of heaven. 
                The attention to detail and the use of high-quality ingredients are evident in their creations. 
                A must-visit for any pastry lover!
                </p>
... (68 lines left)
Collapse
message.txt
8 KB
.banner-image {
    min-height: 350px;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-top: 50px;
  }

  .review-title {
      text-align: center;
      font-size: 2.8rem;
      font-weight: 400;
      color: white;
    }
    .review-container {
      display: inline-block;
      justify-content: space-between;
      font-size: 1.4rem;
      padding: 1rem;
    }
    .review-box .review-text {
      margin: 1rem 0;
      color: #444;
    }
    .review-box {
      text-align: center;
      padding: 1rem;
    }
    .customer-photo img {
      display: block;
      width: 150px;
      height: 150px;
      object-fit: cover;
      object-position: center;
      border-radius: 50%;
      margin: auto;
    }

    .review-container{
      flex-direction: column;
      text-align: center;
    }




    .checked {
      color: orange;
    }
silentknight
 started a call.
 — Today at 12:48 PM
﻿
import "./Reviews.css";
import background from "../assets/bakery.png"
import Footer from "../components/Footer";


function Reviews() {
  return (
    <>
    <div className="banner-image" style={{ backgroundImage: `url(${background})`, height: 30 }}>
      <h1 className="review-title">
        Customer Reviews
      </h1>
    </div>
    <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
          <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\emily.jpg"/>

           <p className="customer-name">
            Emily Patel
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>

                <p className="review-text">
                (This French bakery) is an absolute gem! The moment you step inside,
                you are greeted by the irresistible aroma of freshly baked pastries.
                The croissants are buttery and flaky, and the pain au chocolat is to die for. 
                The friendly staff adds to the delightful experience. Highly recommended!
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            David Johnson
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                If you are searching for an authentic taste of France, look no further than this bakery.
                 Their baguettes are crusty on the outside and soft on the inside, just like the ones I had in Paris.
                The macarons are delicate and bursting with flavor. 
                It is a cozy spot that transports you straight to the streets of France.
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            Maria García
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                This French bakery is a true hidden gem! The quality of their baked goods is exceptional. 
                From the rich and creamy éclairs to the delicate fruit tarts, every bite is a piece of heaven. 
                The attention to detail and the use of high-quality ingredients are evident in their creations. 
                A must-visit for any pastry lover!
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            Benjamin Thompson
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                I can't get enough of this French bakery's delectable treats! Their selection of pastries is diverse and mouthwatering.
                 The pain aux raisins is my personal favorite, perfectly balanced with just the right amount of sweetness.
                 The warm and cozy atmosphere makes it a great place to relax and enjoy your treats with a cup of coffee.
                </p>

        </div>
      </div>

      <div className="review-container container">
      <div className="review-box">
        <div className="customer-detail">
          <div className="customer-photo">
            <img src="C:\Users\Asus\OneDrive\Desktop\WEA\Restaurant-main\restaurant\src\assets\profile.png"/>

            <p className="customer-name">
            Sarah Lee
            </p>
          </div>
        </div>
        <div className="star-rating">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                    <span className="fa fa-star checked"></span>
                </div>
                <p className="review-text">
                I've traveled extensively in France, and I can confidently say that this bakery rivals some of the best I've encountered in Paris.
                The flavors are authentic and the craftsmanship is impeccable. The croissants are light and airy,
                and the tarte-aux-fruits is a true work of art.
                Treat yourself to a slice of French indulgence at this wonderful bakery.
                </p>

        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reviews;
