import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Spinner from 'react-bootstrap/Spinner'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { indexReviews } from '../../api/reviews'

class ReviewIndex extends Component {
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

    indexReviews(user)
      .then(res => this.setState({ reviews: res.data.reviews }))
      .then(() => msgAlert({
        heading: 'Loaded Reviews Successfully',
        message: 'Reviews Are Here! Pick One!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Load Reviews',
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
      <Link to={`/reviews/${review._id}`} key={review._id}>
        <Button className="w-100" variant="primary">
          {review.title}
        </Button>
      </Link>
    ))

    return (
      <div className="index">
        <h3>Reviews</h3>
        <Card>
          <Card.Title>See Your Opinions</Card.Title>
          <Card.Body>{reviewsJsx}</Card.Body>
        </Card>
      </div>
    )
  }
}

export default ReviewIndex
