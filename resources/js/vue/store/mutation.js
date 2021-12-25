export const SET_CONTACTS = (state, contacts) => state.contacts = contacts


export const DELETE_CONTACT = (state, contact) => {
  state.contacts = state.contacts.filter(t => t.id !== contact.id)
}

export const SET_TOGGLE_EDIT = (state, payload) => state.toggleEdit = payload