import React, { Fragment } from 'react'
// import ProductIndex from '../Reviews/AllReviews'
// import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
// import makeupIcon from './makeup1.png'

const Home = ({ user }) => {
  const authBodyStyle = {
    background: 'url(https://www.creativefabrica.com/wp-content/uploads/2020/04/06/Makeup-Cosmetics-Seamless-Patterns-Set-Graphics-3803766-2-580x387.jpg) no-repeat center center fixed ',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover'
  }
  // const unauthBodyStyle = {
  //   background: 'url(https://png.pngtree.com/thumb_back/fh260/background/20190925/pngtree-linear-cartoon-cosmetics-surround-beige-white-square-background-image_316715.jpg) no-repeat center center fixed ',
  //   webkitBackgroundSize: 'cover',
  //   mozBackgroundSize: 'cover',
  //   oBackgroundSize: 'cover',
  //   backgroundSize: 'cover'
  // }
  const authorizedJsx = (
    <Fragment>
      <div style={authBodyStyle}>

      </div>
    </Fragment>
  )
  const unauthorizedJsx = (
    <Fragment>
      <div className="unhome">
        <div>
          <section className="banner">
            <div className="container">
              <div className="banner-text">
                <h1>The Makeup Vault</h1>
                <p><strong>Unlock makeup secrets.</strong> Review Your Favorite products and see what others think</p>
                <Link to={'/sign-up'}>
                  <button>Sign Up</button>
                </Link>
                <Link to={'/sign-in'}>
                  <button>Sign In</button>
                </Link>
              </div>
            </div>
            <img className="banner-image" src="https://i.pinimg.com/originals/eb/17/d0/eb17d0925c49ef13af6e84cdfeaad079.gif" alt="monitoring" />
          </section>
          <div className="container">
            <h1 className="Featured-Heading">Featured Makeup Brands</h1>
            <div className="row">
              <div className="mb-30 col-md-6 col-lg-4">

                <div className="card">
                  <img className="card-icon" src="https://www.logolynx.com/images/logolynx/92/9222f025aa43a4ed00e5bfa49e643944.jpeg" alt="nyx cosmetics" />
                  <h3 className="card-title">NYX Cosmetics</h3>
                  <p className="card-text">NYX Professional Makeup is an American cosmetics company that is a subsidiary of LOreal. The company was founded in Los Angeles by Toni Ko in 1999. It was named after Nyx, the Greek goddess of the night.</p>
                  <a className="card-link" href="#">Learn more</a>
                </div>
              </div>
              <div className="mb-30 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-icon" src="https://i.pinimg.com/originals/97/28/4b/97284bd54aca07fd41a1cd50df45cd70.jpg" alt="fenty-beauty" />
                  <h3 className="card-title">Fenty Beauty</h3>
                  <p className="card-text">Fenty Beauty is a cosmetics brand that was launched on September 8, 2017 by Rihanna. The brand is popular for its broad inclusivity across skin tones and gender.</p>
                  <a className="card-link" href="https://fentybeauty.com/">Learn more</a>
                </div>
              </div>
              <div className="mb-30 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-icon" src="https://logodix.com/logo/1120643.jpg" alt="tarte-cosmetics" />
                  <h3 className="card-title">Tarte Cosmetics</h3>
                  <p className="card-text">Tarte Cosmetics is an American cosmetics company headquartered in New York City. It was founded by Maureen Kelly in 1999; her first product was a cheek stain that was used the following year for the cover of Self magazine. </p>
                  <a className="card-link" href="http://www.tartecosmetics.com/">Learn more</a>
                </div>
              </div>
              <div className="mb-30 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-icon" src="data:image/png;base64,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" alt="elf-cosmetics" />
                  <h3 className="card-title">Elf Cosmetics</h3>
                  <p className="card-text">e.l.f. Cosmetics is an American cosmetics brand based in Oakland, California. It was founded by Joseph Shamah and Scott Vincent Borba in 2004. Items include bath and skin-care products, mineral-based makeup, professional tools, eyeliners, lipstick, glosses, blushes, bronzers, brushes, and mascara, among others.</p>
                  <a className="card-link" href="http://www.elfcosmetics.com/">Learn more</a>
                </div>
              </div>
              <div className="mb-30 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-icon" src="https://crueltyfree.peta.org/wp-content/uploads/Tatcha-Logo-1024x1024-1.png" alt="tatcha-cosmetics" />
                  <h3 className="card-title">Tatcha Cosmetics</h3>
                  <p className="card-text">Tatcha is a celebration of classical Japanese beauty culture, from Kyoto to San Francisco. We offer kind-to-skin formulas made from time-tested, nutrient-rich ingredients rooted in classic ritual.</p>
                  <a className="card-link" href="https://www.tatcha.com/">Learn more</a>
                </div>
              </div>
              <div className="mb-30 col-md-6 col-lg-4">
                <div className="card">
                  <img className="card-icon" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHoCPjPtTQAIw/company-logo_200_200/0/1519886675557?e=2159024400&v=beta&t=CMnjezHfipWG6IczxnqRo2-yV4pjUDoUMdwjwEoo6bU" alt="huda-beauty" />
                  <h3 className="card-title">Huda Beauty</h3>
                  <p className="card-text">
                    Launched by award-winning beauty blogger Huda Kattan in 2013, Huda Beauty is one of the fastest-growing beauty brands. Beginning as a blog in 2010, Huda Beauty has fast become the number 1 Beauty Instagram account in the world with over 26 million followers and counting!</p>
                  <a className="card-link" href="https://hudabeauty.com/us/en_US/home">Learn more</a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* <h1 className="heading heading--stroke-shadow">The Makeup Vault</h1><img className="makeup1" src={makeupIcon} </img> */}

    </Fragment>
  )
  return (
    <Fragment>
      <div id="text">
        {/* <!-- content generated with JS --> */}
        { user ? authorizedJsx : unauthorizedJsx }
      </div>
    </Fragment>
  )
}
export default Home
