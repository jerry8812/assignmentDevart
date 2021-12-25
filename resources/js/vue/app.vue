<template>
  <div class="font-semibold relative">
    <top-bar></top-bar>
    <address-book></address-book>
    <contact-detail></contact-detail>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import AddressBook from './components/AddressBook.vue'
import ContactDetail from './components/ContactDetail.vue'

export default {
  name: "App",
  components: {
    TopBar,
    AddressBook,
    ContactDetail,
    ContactDetail
  }
}
</script>