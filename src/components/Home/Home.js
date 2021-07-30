import React, { Fragment } from 'react'
// import ProductIndex from '../Reviews/AllReviews'
// import Button from 'react-bootstrap/Button'
// import { Link } from 'react-router-dom'
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
      <div style={authBodyStyle}></div>
    </Fragment>
  )
  const unauthorizedJsx = (
    <Fragment>
      <div className="unhome" ></div>

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
