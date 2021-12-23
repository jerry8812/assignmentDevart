<template>
  <fragment>
    <td class="pl-6 py-4 whitespace-nowrap text-md text-gray-500 tracking-wide">
      <div>{{contact.name}}</div>
    </td>
    <td class="pl-6 py-4 whitespace-nowrap text-md text-gray-500 tracking-wide">
      <div>{{contact.email}}</div>
    </td>
    <td class="pl-6 py-4 whitespace-nowrap text-md text-gray-500 tracking-wide">
      <div>{{contact.phoneNumber}}</div>
    </td>
    <td class="pl-6 py-4 whitespace-nowrap text-md text-gray-500 tracking-wide">
      <div>{{contact.physicalAddress}}</div>
    </td>
    <td class="flex pl-5 py-4 whitespace-nowrap text-md text-gray-500 tracking-wide">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      </div>
      <div @click="deleteContact">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400 ml-2 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      </div>
    </td>
  </fragment>
</template>

<script>
import { Fragment } from 'vue-fragment'
export default {
  name: "Contact",
  components: {
    Fragment
  },
  props: {
    contact: {
      type: Object,
      default: {}
    }
  },
  methods: {
    deleteContact() {
      this.$store.dispatch('removeContact', this.contact)
    }
  }
}
</script>
