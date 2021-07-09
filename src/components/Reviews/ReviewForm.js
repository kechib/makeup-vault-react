import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
// import ReactStars from 'react-rating-stars-component'
// import brush from './brush.png'

const ReviewForm = ({ review, handleSubmit, handleChange }) => (
  <Form className="createReview"
    onSubmit={handleSubmit}>
    <Form.Group>
      <Form.Label>Title</Form.Label>
      <Form.Control className= "input"
        required
        placeholder='Title Your Review'
        // This name should line up with the state we want to change
        name='title'
        value={review.title}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Description</Form.Label>
      <Form.Control
        required
        placeholder='Give a brief description of the your opinion'
        // This name should line up with the state we want to change
        name='description'
        as="textarea"
        rows={3}
        value={review.description}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Product Name</Form.Label>
      <Form.Control className= "input"
        required
        placeholder='What is the name of this product?'
        // This name should line up with the state we want to change
        name='product'
        value={review.product}
        onChange={handleChange}
      />
    </Form.Group>
    <Form.Group>
      <Form.Label>Company</Form.Label>
      <Form.Control className= "input"
        required
        placeholder='Company'
        // This name should line up with the state we want to change
        name='company'
        value={review.company}
        onChange={handleChange}
      />
    </Form.Group>

    {/* <Form.Group controlId="formBasicRange">
      <Form.Label>Rating</Form.Label>
      <Form.Control type="range"
        required
        name="rating"
        min="0"
        max="5"
        onChange={handleChange}
        value={review.rating}
      />
    </Form.Group> */}
    <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>Rating</Form.Label>
      <Form.Control as="select"
        name="rating"
        onChange={handleChange}
        value={review.rating}>
        <option>♡</option>
        <option>♡♡</option>
        <option>♡♡♡</option>
        <option>♡♡♡♡</option>
        <option>♡♡♡♡♡</option>
      </Form.Control>
    </Form.Group>
    {/* }<ReactStars
      required
      ratingChanged={handleChange}
      value={review.rating}
      count={5}
      size={50}
      a11y={ true}
      isHalf={true}
      char="♡"
      activeColor="#af499a"
    /> */}
    <Form.Group controlId="exampleForm.ControlSelect2">
      <Form.Label>Recommendation</Form.Label>
      <Form.Control as="select"
        required
        name="recommend"
        onChange={handleChange}
        value={review.recommend}>
        <option>Not Sure</option>
        <option>Yes</option>
        <option>No</option>
      </Form.Control>
    </Form.Group>
    <Button className='primary' variant="primary" type="submit">
      Submit Review
    </Button>
  </Form>
)
export default ReviewForm
