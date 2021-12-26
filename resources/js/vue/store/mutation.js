export const SET_CONTACTS = (state, contacts) => state.contacts = contacts


export const DELETE_CONTACT = (state, contact) => {
  state.contacts = state.contacts.filter(t => t.id !== contact.id)
}

export const SET_TOGGLE_EDIT = (state, payload) => state.toggleEdit = payload

export const SET_MODAL_TYPE = (state, payload) => state.typeOfModal = payload

export const SET_SELECTED_CONTACT = (state, payload) => state.selectedContact = payload