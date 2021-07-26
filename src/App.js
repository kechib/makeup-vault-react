import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'
import AutoDismissAlert from './components/AutoDismissAlert/AutoDismissAlert'
import Header from './components/Header/Header'
import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import SignOut from './components/SignOut/SignOut'
import ChangePassword from './components/ChangePassword/ChangePassword'

import './App.scss'

// Importing the review pages components
import Home from './components/Home/Home'
import ReviewCreate from './components/Reviews/CreateReviews'
import ShowReviews from './components/Reviews/ShowReviews'
import ProductShow from './components/Reviews/ShowProduct'
import IndexReviews from './components/Reviews/IndexReviews'
import ProductIndex from './components/Reviews/AllReviews'
import EditReviews from './components/Reviews/EditReviews'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: null,
      review: null,
      msgAlerts: []
    }
  }
  setReview = review => this.setState({ review })

   // Combining setUser and setReview to avoid rendering twice and not having
   // the review data ready.
   setUserReview = data => this.setState({ user: data.user, review: data.review })

  setUser = user => this.setState({ user })

  clearUser = () => this.setState({ user: null })

  clearReview = () => this.setState({ review: null })

  deleteAlert = (id) => {
    this.setState((state) => {
      return { msgAlerts: state.msgAlerts.filter(msg => msg.id !== id) }
    })
  }

  msgAlert = ({ heading, message, variant }) => {
    const id = uuid()
    this.setState((state) => {
      return { msgAlerts: [...state.msgAlerts, { heading, message, variant, id }] }
    })
  }

  render () {
    const { msgAlerts, user, review } = this.state

    return (
      <Fragment>
        <Header user={user} review={review}/>
        {msgAlerts.map(msgAlert => (
          <AutoDismissAlert
            key={msgAlert.id}
            heading={msgAlert.heading}
            variant={msgAlert.variant}
            message={msgAlert.message}
            id={msgAlert.id}
            deleteAlert={this.deleteAlert}
          />
        ))}
        <main className="container">

          <Route exact path='/' render={() => (
            <Home
              msgAlert={this.msgAlert}
              user={user}
              setUser={this.setUser}
              setReview={this.setReview}
              setUserReview={this.setUserReview}
            />
          )} />

          <Route path='/sign-up' render={() => (
            <SignUp msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <Route path='/sign-in' render={() => (
            <SignIn msgAlert={this.msgAlert} setUser={this.setUser} />
          )} />
          <AuthenticatedRoute user={user} path='/sign-out' render={() => (
            <SignOut msgAlert={this.msgAlert} clearUser={this.clearUser} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/change-password' render={() => (
            <ChangePassword msgAlert={this.msgAlert} user={user} />
          )} />
          <AuthenticatedRoute user={user} path='/review/create' render={() => (
            <ReviewCreate msgAlert={this.msgAlert} user={user} setReview={this.setReview} />
          )} />
          <AuthenticatedRoute user={user} exact path='/reviews' render={() => (
            <IndexReviews msgAlert={this.msgAlert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} exact path='/product-reviews' render={() => (
            <ProductIndex msgAlert={this.msgAlert} user={user}/>
          )} />
          <AuthenticatedRoute user={user} path='/reviews/:id' render={() => (
            <ShowReviews msgAlert={this.msgAlert} user={user} clearReview={this.clearReview} />
          )} />
          <AuthenticatedRoute user={user} path='/product-reviews/:product' render={() => (
            <ProductShow msgAlert={this.msgAlert} user={user} clearReview={this.clearReview} />
          )} />

          <AuthenticatedRoute user={user} path='/reviews/:title' render={() => (
            <EditReviews msgAlert={this.msgAlert} user={user} setReview={this.setReview} />
          )} />
        </main>
      </Fragment>
    )
  }
}

export default App
