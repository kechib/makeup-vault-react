import React, { Component, Fragment } from 'react'

// Import withRouter to have access to "history"
import { withRouter, Redirect, Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import Spinner from 'react-bootstrap/Spinner'
import { showProduct, deleteReview } from '../../api/reviews'

class ProductShow extends Component {
  constructor (props) {
    super(props)

    // initially our reviews state will be null, until it is fetched from the api
    this.state = {
      review: null,
      deleted: false
    }
  }

  componentDidMount () {
    const { user, match, msgAlert } = this.props

    // make a request for a single reviews
    showProduct(match.params.product, user)
      // set the reviews state, to the reviews we got back in the response's data
      .then(res => this.setState({ review: res.data.review }))
      .then(() => msgAlert({
        heading: 'Showing Product Successfully',
        message: 'The reviews is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Product Failed',
          message: 'Failed to show reviews with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, msgAlert, clearProduct } = this.props

    // make a delete axios request
    deleteReview(user)
      // set the deleted variable to true, to redirect to the reviewss page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Product Successfully!',
        message: 'Product deleted!',
        variant: 'success'
      }))
      .then(() => clearProduct())
      .catch(error => {
        msgAlert({
          heading: 'Deleting Product Failed',
          message: 'Failed with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  render () {
    const { review, deleted } = this.state
    const { user } = this.props

    // if we don't have a reviews yet
    if (!review) {
      // A Spinner is just a nice loading message we get from react bootstrap
      return (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )
    }

    // if the reviews is deleted
    if (deleted) {
      // redirect to the reviewss index page
      return <Redirect to="/reviews" />
    }

    const buttonsJsx = (
      <div>
        <Button className='primary' variant="primary" onClick={this.handleDelete}>Delete Product</Button>
        <Button className='primary' variant="primary">
          <Link to={'/review/edit'}>Update Product</Link>
        </Button>
      </div>
    )

    return (
      <Fragment>
        <div className="displayProduct">
          <Card style={{ width: '18rem' }}>
            { /* // <Card.Img variant="top" className="img-size" src={review.avatar} /> */}
            <Card.Body>
              <Card.Title><h3>Title: {review.title}</h3></Card.Title>
              <Card.Text>
                Your review overview.
              </Card.Text>
              <Card.Text>Product Name: {review.product}</Card.Text>

              <Card.Text>Description: {review.description}</Card.Text>
              <Card.Text>Company Name: {review.company}</Card.Text>
              <Card.Text>Your Hearts: {review.rating}</Card.Text>
              <Card.Text>Did you recommend?: {review.recommend}</Card.Text>

              { user._id === review.owner && buttonsJsx }
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ProductShow)
