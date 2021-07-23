import React, { Component, Fragment } from 'react'

// Import withRouter to have access to "history"
import { withRouter, Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import ListGroup from 'react-bootstrap/ListGroup'

import Spinner from 'react-bootstrap/Spinner'
import { showReview, deleteReview } from '../../api/reviews'

class ReviewShow extends Component {
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
    showReview(match.params.id, user)
      // set the reviews state, to the reviews we got back in the response's data
      .then(res => this.setState({ review: res.data.review }))
      .then(() => msgAlert({
        heading: 'Showing Review Successfully',
        message: 'The reviews is now displayed.',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Showing Review Failed',
          message: 'Failed to show reviews with error: ' + error.message,
          variant: 'danger'
        })
      })
  }

  handleDelete = event => {
    const { user, match, msgAlert, clearReview } = this.props

    // make a delete axios request
    deleteReview(match.params.id, user)
      // set the deleted variable to true, to redirect to the reviewss page in render
      .then(() => this.setState({ deleted: true }))
      .then(() => msgAlert({
        heading: 'Deleted Review Successfully!',
        message: 'Review deleted!',
        variant: 'success'
      }))
      .then(() => clearReview())
      .catch(error => {
        msgAlert({
          heading: 'Deleting Review Failed',
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
        <Button className='primary' variant="primary" onClick={this.handleDelete}>Delete Review</Button>
        {/*  // <Button className='primary' variant="primary">
        //   <Link to={`/reviews/${review.title}`} key={review._id}>Update Review</Link>
        //
        // </Button> */}
      </div>
    )

    return (
      <Fragment>
        <div className="displayReview">
          <Card.Header>
        Your Review Summary
          </Card.Header>
          <Card style={{ width: '18rem' }}>
            {/* // <Card.Img variant="top" className="img-size" src={review.avatar} /> */}
            <Card.Body>
              <Card.Title><h3>Title: {review.title}</h3></Card.Title>
              <Card.Text>
                <h3>Your Description: {review.description}</h3>
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem><h3>Product Name: {review.product}</h3></ListGroupItem>
                <ListGroupItem><h3> Company Name: {review.company}</h3></ListGroupItem>
                <ListGroupItem><h3>Your Hearts: {review.rating}</h3></ListGroupItem>
                <ListGroupItem><h3>Did you recommend?: {review.recommend}</h3></ListGroupItem>
              </ListGroup>
              { user._id === review.owner && buttonsJsx }
            </Card.Body>
          </Card>
        </div>
      </Fragment>
    )
  }
}

export default withRouter(ReviewShow)
