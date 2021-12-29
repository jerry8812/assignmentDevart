export const SET_CONTACTS = (state, contacts) => state.contacts = contacts

export const NEW_CONTACT = (state, contact) => state.contacts.unshift(contact)

export const DELETE_CONTACT = (state, contact) => {
  state.contacts = state.contacts.filter(t => t.id !== contact.id)
}

export const SET_TOGGLE_EDIT = (state, payload) => state.toggleEdit = payload

export const SET_MODAL_TYPE = (state, payload) => state.typeOfModal = payload

export const SET_SELECTED_CONTACT = (state, payload) => state.selectedContact = Object.assign({}, payload)

export const UPDATE_CONTACT = (state, updatedContact) => {
  const index = state.contacts.findIndex(contact=> contact.id === updatedContact.id)
  if(index !== -1) {
    state.contacts.splice(index, 1, updatedContact)
  }
}