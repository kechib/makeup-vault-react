import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

import { createReview } from '../../api/reviews'
import ReviewForm from './ReviewForm'

class ReviewCreate extends Component {
  constructor (props) {
    super(props)

    // initially our profiles title and director will be empty until they are filled in
    this.state = {
      review: {
        title: '',
        description: '',
        product: '',
        company: '',
        rating: '',
        recommend: ''

      },
      // createdId will be null, until we successfully create a review
      created: false
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, msgAlert, setReview } = this.props
    const { review } = this.state

    // create a review, pass it the review data and the user for its token
    createReview(user, review)
      // set the createdId to the id of the review we just created
      // .then(res => this.setState({ createdId: res.data.review._id }))
      .then(res => {
        this.setState({ created: true })
        // pass the response to the next .then so we can show the title
        return res
      })
      .then(res => setReview(res.data.review))
      .then(res => msgAlert({
        heading: 'Created Review Successfully',
        message: 'Review has been created successfully. We hear you!',
        variant: 'success'
      }))
      .catch(error => {
        msgAlert({
          heading: 'Failed to Create Review',
          message: 'Yikes, Something went wrong! This is the error ' + error.message,
          variant: 'danger'
        })
      })
  }

  // when an input changes, update the state that corresponds with the input's name
  handleChange = event => {
    // in react, an event is actually a SyntheticEvent
    // to ensure the properties are not set to null after handleChange is finished
    // we must call event.persist
    event.persist()

    // change the state
    this.setState(state => {
      // return our state changge
      return {
        // set the review state, to what it used to be (...state.review)
        // but replace the property with `name` to its current `value`
        // ex. name could be `title` or `director`
        review: { ...state.review, [event.target.name]: event.target.value }
      }
    })
  }
  // ratingChanged = (newRating) => {
  //   return ` ${newRating}`
  // }

  render () {
    // destructure our review and createdId state
    const { review, created } = this.state

    // if the review has been created and we set its id
    if (created) {
      // redirect to the reviews show page
      return <Redirect to={'/reviews'} />
    }

    return (
      <Fragment>
        <h3>Create Review</h3>

        <ReviewForm
          review={review}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Fragment>
    )
  }
}

export default ReviewCreate
