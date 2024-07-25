import axios from 'axios/index'
const API_PATH = process.env.ROOT_API
const INTERNAL_API_PATH = process.env.INTERNAL_API

export function getMembers () {
  return axios.get(`${INTERNAL_API_PATH}members/v2`)
}

export function getActivites (year) {
  return axios.get(`${API_PATH}activities?year=${year}`)
}

export function getTrackInfo (id) {
  return axios.get(`${API_PATH}tracks/${id}`)
}

export function getTotalTrackInfo (id) {
  return axios.get(`${API_PATH}tracks`)
}
