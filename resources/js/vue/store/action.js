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

export const removeContact = ({ commit }, contact) => {
  axios.delete(`api/contact/${contact.id}`).
  then( response => {
    if(response.status == 200) {
      commit('DELETE_CONTACT', contact)
    }
  })
  .catch (error => {
    console.log(error)
  })
}