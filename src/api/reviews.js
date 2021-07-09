import apiUrl from '../apiConfig'
import axios from 'axios'

export const createReview = (review, user) => {
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
  return axios({
    url: apiUrl + '/reviews',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const getOneReview = (user) => {
  return axios({
    url: apiUrl + `/reviews/${user.review._id}`,
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const showReview = (nickname, user, review) => {
  return axios({
    url: apiUrl + '/reviews',
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}

export const updateReview = (review, user) => {
  return axios({
    url: apiUrl + `/reviews/${user.review._id}`,
    method: 'PATCH',
    headers: {
      'Authorization': `Bearer ${user.token}`
    },
    data: { review }
  })
}

export const deleteReview = user => {
  return axios({
    url: apiUrl + `/reviews/${user.review._id}`,
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${user.token}`
    }
  })
}
