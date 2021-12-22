import axios from "axios"

export const getAllContacts = ({ commit }) => {
  axios.get('api/contacts')
  .then(response => {
    commit('SET_CONTACTS', response.data)
  })
  .catch (error => {
    console.log(error)
  })
}