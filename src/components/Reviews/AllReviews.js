import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
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
      <Link to={`/product-reviews/${review.product}`} key={review._id} >
        <Button className="w-100" variant="primary">
          {review.product}
        </Button>
      </Link>
    ))

    return (
      <div className="index">
        <h3>Products</h3>
        <Card>
          <Card.Title>See All Product Reviews</Card.Title>
          <Card.Body>{reviewsJsx}</Card.Body>
        </Card>
      </div>
    )
  }
}

export default ProductIndex
