<template>
  <div class="font-sans">
    <top-bar></top-bar>
    <address-book :contacts="contacts"></address-book>
  </div>
</template>

<script>
import axios from 'axios'
import TopBar from './components/TopBar.vue'
import AddressBook from './components/AddressBook.vue'

export default {
  name: "App",
  components: {
    TopBar,
    AddressBook
  },
  data: function () {
    return {
      contacts:[]
    }
  },
  methods: {
    getContacts () {
      axios.get('api/contacts')
      .then(response => {
        this.contacts = response.data
      })
      .catch (error => {
        console.log(error)
      })
    }
  },
  created() {
    this.getContacts()
  }
}
</script>