import './App.css';

function App() {
  return (
    <div className='app'>
      <header className='page-header'>
        <a className='page-header__logo logo'>
          <picture>
            <img className='logo__icon' src='' width='33' height='38' alt='' aria-hidden="true" />
          </picture>
          <picture>
            <img className='logo__text' src='' width='101' height='18' alt='' />
          </picture>
        </a>
        <nav className='main-nav main-nav--closed main-nav--nojs'>
          <button className='main-nav__toggle' type='button'> 
            <span className='visually-hidden'>Open menu</span>
          </button>
          <div className='main-nav__wrapper wrapper'>
            <ul className='main-nav__list site-list'>
              <li className='site-list__item'>
                <a className='site-list__link'>
                  Home
                </a>
              </li>
              <li className='site-list__item'>
                <a className='site-list__link' href='products.html'>
                  Products
                </a>
              </li>
              <li className='site-list__item'>
                <a className='site-list__link' href='#'>
                  <img src='' alt='Basket' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>  

      <main className='page-main'>
        <section className='promo'>
          <div className='promo__wrapper wrapper'>
            <img className='promo__picture' width='1242' height="490" alt='Discover..' />
            <h1 className='promo__heading'>
              <strong>
                Discover the vast expanses of <span>space</span>
              </strong>
            </h1>
            <p className='promo__slogan-text'>
              Where the possibilities are endless!
            </p>
            <a className='promo__button button button--yellow' type='button' href='#'>
              Learn more
            </a>
            <img className='promo_logo' alt=''/>
          </div>
        </section>

        <section className='offers'>
          <h2 className='offers__heading'>
            Offers
          </h2> 
          <ul className='offers__list'>
            <li className='offers-list__item item'>
              <img className='item__picture' width='1088' height="350" alt='Move the borders of reality!' />
              <div className='item__content'>
                <h3 className='item__heading'>
                  <strong>
                  Move the borders of reality!
                  </strong>
                </h3>
                <p className='item__text'>
                  Go on a space adventure - it's possible with us!
                </p>
                <a className='item__button button' type='button' href='#'>
                  Learn more
                </a>
              </div>
            </li>
            <li className='offers-list__item item'>
              <img className='item__picture' width='524' height="350" alt='Space is not just stars and planets.' />
              <div className='item__content'>
                <h3 className='item__heading'>
                  <strong>
                    Space is not just stars and planets
                  </strong>
                </h3>
                <p className='item__text'>
                  Go on a space adventure 
                </p>
                <a className='item__button button' type='button' href='#'>
                  Learn more
                </a>
              </div>
            </li>
            <li className='offers-list__item item'>
              <img className='item__picture' width='524' height="350" alt='For those who dream of stars.' />
              <div className='item__content'>
                <h3 className='item__heading'>
                  <strong>
                    For those who dream of stars 
                  </strong>
                </h3>
                <p className='item__text'>
                  Our offer: make your dream come true
                </p>
                <a className='item__button button' type='button' href='#'>
                  Learn more
                </a>
              </div>
            </li>
            <li className='offers-list__item item'>
              <img className='item__picture' width='1088' height="350" alt='Fulfill your fantastic dreams.' />
              <div className='item__content'>
                <h3 className='item__heading'>
                  <strong>
                    Fulfill your fantastic dreams
                  </strong>
                </h3>
                <p className='item__text'>
                  Space has never been so close
                </p>
                <a className='item__button button' type='button' href='#'>
                  Learn more
                </a>
              </div>
            </li>
          </ul>
        </section>

        <section className='article'>
          <div className='article__wrapper wrapper'>
            <h2 className='article__heading'>
              Embark on a space journey
            </h2>
            <p className='article__text'>
              Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
              And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
              We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe.
              We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
              Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
              We offer various options for space excursions.
            </p>
            <button className='article__button button button--invisible' type='button'>
              Read more
            </button>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='footer__wrapper wrapper'>
          <img className='footer__logo-image' alt=''/>
          <p className='footer__text'>
            Exciting space adventure!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
