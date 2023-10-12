import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <a>
          <img className='logo__icon' src='' width='33' height='38' alt='' aria-hidden="true" />
          <img className='logo__image' src='' width='101' height='18' alt='' />
        </a>
        <nav>
          <div>
            <ul>
              <li>
                <a href=''>
                  Home
                </a>
              </li>
              <li>
                <a href=''>
                  Products
                </a>
              </li>
              <li>
                <a href=''>
                  <img src='' alt='Basket' />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>  

      <main>
        <section className='Discover'>
          <div>
            <h1 className='visually-hidden'>
              Discover the vast expanses of space
            </h1>
            <p className='main-heading'>
              <strong>
                Discover the vast expanses of <span>space</span>
              </strong>
            </p>
            <p className='text-heading'>
              Where the possibilities are endless!
            </p>
            <button type='button'>
              Learn more
            </button>
            <img className='planet_logo' alt=''/>
          </div>
        </section>

        <section className='offers'>
          <h2 className='visually-hidden'>
            Offers
          </h2> 
          <h3 className=''>
            Offers
          </h3> 
          <ul className='offers-list'>
            <li className='offers-list__item'>
              <p className='main-heading'>
                <strong>
                Move the borders of reality!
                </strong>
              </p>
              <p className='text-heading'>
                Go on a space adventure - it's possible with us!
              </p>
              <button type='button'>
                Learn more
              </button>
            </li>
            <li className='offers-list__item'>
              <p className=''>
                <strong>
                  Space is not just stars and planets
                </strong>
              </p>
              <p className=''>
                Go on a space adventure 
              </p>
              <button type='button'>
                Learn more
              </button>
            </li>
            <li className='offers-list__item'>
              <p className=''>
                <strong>
                  For those who dream of stars 
                </strong>
              </p>
              <p className=''>
                Our offer: make your dream come true
              </p>
              <button type='button'>
                Learn more
              </button>
            </li>
            <li className='offers-list__item'>
              <p className=''>
                <strong>
                  Fulfill your fantastic dreams
                </strong>
              </p>
              <p className=''>
                Space has never been so close
              </p>
              <button type='button'>
                Learn more
              </button>
            </li>
          </ul>
        </section>

        <section>
          <div className='article'>
            <h2>
              Embark on a space journey
            </h2>
            <p>
              Travelling into space is one of the most exciting and unforgettable adventures that can change your life forever. 
              And if you have ever dreamed of exploring stars, planets and galaxies, then our company is ready to help you realize this dream. 
              We offer a unique experience that will allow you to go on a space journey and see all the secrets of the universe.
              We guarantee that every moment in space will be filled with incredible impressions, excitement and new discoveries. 
              Our team of professionals takes care of your safety and comfort so that you can fully enjoy your adventure in space. 
              We offer various options for space excursions.
            </p>
            <button type='button'>
              Read more
            </button>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <img alt=''/>
          <p>
            Exciting space adventure!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
