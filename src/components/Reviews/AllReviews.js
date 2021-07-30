import React, { Fragment, Component } from 'react'
// import { Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
// import Button from 'react-bootstrap/Button'
import { indexProduct } from '../../api/reviews'

class ProductIndex extends Component {
  constructor (props) {
    super(props)

    // keep track of the reviews in our application
    // initially they will be null until we have fetched them from the api
    this.state = {
      reviews: null
    }
  }

  componentDidMount () {
    const { msgAlert, user } = this.props

    indexProduct(user)
      .then(res => this.setState({ reviews: res.data.reviews }))
      .then(() => msgAlert({
        heading: 'Loaded Products Successfully',
        message: 'Products Are Here! Pick One!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Products',
          message: 'Oops somethingwent wrong: ' + error.message
        })
      })
  }

  render () {
    // destructure our reviews state
    const { reviews } = this.state
    const { user } = this.props

    // if we haven't fetched any reviews yet from the API
    if (!reviews) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>

      )
    }

    const reviewsJsx = reviews.map(review => (
      <Fragment key={review._id}>
        <CardDeck >

          <Card >

            { /* // <Card.Img variant="top" className="img-size" src={review.avatar} /> */}
            <Card.Body>
              <Card.Title><h3>Title: {review.title}</h3></Card.Title>
              <Card.Text>Product Name: {review.product}</Card.Text>

              <Card.Text>Description: {review.description}</Card.Text>
              <Card.Text>Company Name: {review.company}</Card.Text>
              <Card.Text>Your Hearts: {review.rating}</Card.Text>
              <Card.Text>Did you recommend?: {review.recommend}</Card.Text>
            </Card.Body>
            <Card.Footer>{user._id === reviews.owner}</Card.Footer>
          </Card>
        </CardDeck>
      </Fragment>
    ))
    return (
      <div className="index">
        <Card>
          <Card.Header>See All Product Reviews</Card.Header>
          <Card.Body>{reviewsJsx}</Card.Body>

        </Card>
      </div>
    )
  }
}

export default ProductIndex
