<template>
  <div class="font-extrabold">
    <top-bar></top-bar>
    <address-book></address-book>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'
import AddressBook from './components/AddressBook.vue'

export default {
  name: "App",
  components: {
    TopBar,
    AddressBook
  }
}
</script>