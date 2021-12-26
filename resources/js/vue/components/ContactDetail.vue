<template>
<div v-if="toggleEdit">
  <div class="fixed left-0 top-0 w-full h-full bg-black opacity-25 z-30"></div>
  <div class=" fixed w-1/3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-3xl rounded overflow-hidden bg-gray-50 z-50"
       :class="toggleEdit ? 'animate-fade-in-down' : 'animate-fade-out-up'">
    <h1 class="my-3 capitalize text-center tracking-wider text-xl">{{typeOfModal==='edit' ? 'edit contact': 'create a new contact'}}</h1>
    <form action="#" class="m-6 space-y-5 font-normal">
      <div>
        <label for="fullName" class="mb-1 block">Full Name</label>
        <input id="fullName" name="fullName" type="text" required="" 
               v-model.trim="contact.name"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
      </div>
      <div>
        <label for="phoneNumber" class="mb-1 block">Phone Number</label>
        <input id="phoneNumber" name="phoneNumber" type="text" required="" 
               v-model.trim="contact.phoneNumber"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
      </div>
      <div>
        <label for="email-address" class="mb-1 block">Email Address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" required="" 
               v-model.trim="contact.email"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
      </div>
      <div>
        <label for="physicalAddress" class="mb-1 block">Physical Address</label>
        <input id="physicalAddress" name="physicalAddress" type="text" required="" 
               v-model.trim="contact.physicalAddress"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Physical address" />
      </div>
      <div class="flex justify-center items-center text-white uppercase mb-6 mt-4">
        <button class="w-20 h-10 rounded bg-teal-400 tracking-wider hover:bg-teal-300" 
        @click.prevent="closeEdit">SUBMIT
        </button>
        <button class="w-20 h-10 mx-5 rounded bg-teal-400 tracking-wider hover:bg-teal-300" 
        @click="closeModal">CLOSE
        </button>
    </div>
    </form>
    
  </div>
</div>
</template>

<script>
export default {
  name: "ContactDetail",
  computed: {
    toggleEdit() {
      return this.$store.getters.toggleEdit
    },
    typeOfModal() {
      return this.$store.getters.typeOfModal
    },
    contact() {
      if(this.typeOfModal === 'edit') {
        return this.$store.getters.selectedContact
      }else {
        return {
          name: '',
          email: '',
          phoneNumber: '',
          physicalAddress: ''
        }
      }
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('SET_TOGGLE_EDIT', false)
    }
  }
}
</script>
