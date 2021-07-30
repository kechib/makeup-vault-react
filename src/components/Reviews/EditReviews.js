import React, { Component } from 'react'
import { withRouter, Redirect } from 'react-router-dom'
import ReviewForm from './ReviewForm.js'
import Button from 'react-bootstrap/Button'
import { updateReview } from '../../api/reviews'

class EditReviews extends Component {
  constructor (props) {
    super(props)

    // const { user } = this.props
    this.state = {
      review: {
        title: '',
        description: '',
        product: '',
        company: '',
        rating: '',
        recommend: ''
      },
      updated: false
    }
  }

  handleChange = event => {
    event.persist()

    this.setState((state) => {
      return {
        review: { ...state.review, [event.target.name]: event.target.value }
      }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { user, match, msgAlert, setReview } = this.props
    const { review } = this.state

    updateReview(match.params.title, user, review)
      .then(res => {
        this.setState({ updated: true })
        return res
      })
      .then(res => setReview(res.data.review))
      .then(res => msgAlert({
        message: 'Successfully Edited !',
        variant: 'success'
      }))
      .catch(error => msgAlert({
        message: `Uh Oh, That didn't work, because error: ${error.message}`,
        variant: 'danger'
      }))
  }

  render () {
    const { review, updated } = this.state

    if (updated) {
      return <Redirect to={'/reviews'} />
    }

    return (
      <div>
        <ReviewForm
          review={review}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Button className='primary' variant="primary" type="submit">
          Update Review
        </Button>
      </div>
    )
  }
}

export default withRouter(EditReviews)
