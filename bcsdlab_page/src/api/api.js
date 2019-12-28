import axios from 'axios/index'
const API_PATH = process.env.ROOT_API

export function getMembers () {
  return axios.get(`${API_PATH}members`)
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
