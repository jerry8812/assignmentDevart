<template>
  <div class="mx-20">
    <table class="w-full shadow-lg divide-y divide-gray-200 border-gray-300 border-1">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Name
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Phone
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Address
          </th>
          <th scope="col" class="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="contact in contacts" :key="contact.id" class="even:bg-gray-100 hover:bg-teal-50">
          <contact :contact="contact"></contact>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Contact from './Contact.vue'
export default {
  name: "AddressBook",
  components: {
    Contact
  },
  computed: {
    contacts() {
      return this.$store.state.contacts
    }
  },
  mounted() {
    this.$store.dispatch('getAllContacts')
  }
};
</script>
