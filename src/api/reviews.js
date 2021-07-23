import apiUrl from '../apiConfig'
import axios from 'axios'

export const createReview = (user, review) => {
  return axios({
    url: apiUrl + '/reviews',
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { review }
  })
}

export const indexReviews = (user) => {
  // console.log(user)
  return axios({
    url: apiUrl + '/reviews',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const getOneReview = (review, user) => {
  // console.log(review)
  return axios({
    url: apiUrl + '/review/',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const showReview = (id, user) => {
  return axios({
    url: apiUrl + '/reviews/' + id,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const updateReview = (title, user, review) => {
  // console.log('id is ' + id)
  // console.log('user token is ' + user.token)
  console.log('review is ' + review)
  return axios({
    url: apiUrl + '/reviews/' + title,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { review }

  })
}

export const deleteReview = (id, user) => {
  console.log(user)
  return axios({
    url: apiUrl + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
