<template>
<div v-if="toggleEdit">
  <div class="fixed left-0 top-0 w-full h-full bg-black opacity-25 z-30"></div>
  <div class=" fixed w-1/3 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-3xl rounded overflow-hidden bg-cyan-100 z-50"
       :class="toggleEdit ? 'animate-fade-in-down' : 'animate-fade-out-up'">
    <h1 class="my-3 capitalize text-center tracking-wider text-xl">
      {{typeOfModal==='edit' ? 'edit contact': 'create a new contact'}}
    </h1>
    <form class="m-6 space-y-5 font-normal">
      <div>
        <label for="fullName" class="mb-1 block after:content-['*'] after:ml-1 after:text-red-500">Full Name</label>
        <input id="fullName" name="fullName" type="text"
               v-model.trim="contact.name"
               :class="[this.errors && this.errors.name ? 'border-pink-600' : '']"
               class="appearance-none rounded peer relative block w-full px-3 py-2 
               border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md 
               focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
        <p class="text-pink-600 text-sm mt-1" v-if="this.errors && this.errors.name">
          {{ this.errors.name[0] }}
        </p>
      </div>
      <div>
        <label for="phoneNumber" class="mb-1 block">Phone Number</label>
        <input id="phoneNumber" name="phoneNumber" type="text" 
               v-model.trim="contact.phoneNumber"
               :class="[this.errors && this.errors.phoneNumber ? 'border-pink-600' : '']"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"/>
        <p class="text-pink-600 text-sm mt-1" v-if="this.errors && this.errors.phoneNumber">
          {{ this.errors.phoneNumber[0] }}
        </p>
      </div>
      <div>
        <label for="email-address" class="mb-1 block after:content-['*'] after:ml-1 after:text-red-500">Email Address</label>
        <input id="email-address" name="email" type="email" autocomplete="email" 
               v-model.trim="contact.email"
               :class="[this.errors && this.errors.email ? 'border-pink-600' : '']"
               class="appearance-none rounded relative block w-full px-3 py-2 border peer
               border-gray-400 placeholder-gray-400 text-gray-900 rounded-t-md focus:outline-none 
               focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="you@email.com" />
        <p class="text-pink-600 text-sm mt-1" v-if="this.errors && this.errors.email">
          {{ this.errors.email[0] }}
        </p>
      </div>
      <div>
        <label for="physicalAddress" class="mb-1 block">Physical Address</label>
        <input id="physicalAddress" name="physicalAddress" type="text"
               v-model.trim="contact.physicalAddress"
               :class="[this.errors && this.errors.physicalAddress ? 'border-pink-600' : '']"
               class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-400 placeholder-gray-400 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Physical address" />
        <p class="text-pink-600 text-sm mt-1" v-if="this.errors && this.errors.physicalAddress">
          {{ this.errors.physicalAddress[0] }}
        </p>
      </div>
      <div class="flex justify-center items-center text-white uppercase mb-6 mt-4">
        <button class="w-20 h-10 rounded bg-teal-400 tracking-wider hover:bg-teal-300" 
        @click.prevent="submit">SUBMIT
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
  data() {
    return {
      contact: {
        name: '',
        email: '',
        phoneNumber: '',
        physicalAddress: ''
      },
      errors: {}
    }
  },
  computed: {
    toggleEdit() {
      return this.$store.getters.toggleEdit
    },
    typeOfModal() {
      return this.$store.getters.typeOfModal
    },
  },
  mounted() {
    if(this.typeOfModal == 'edit') {
      // console.log(this.$store.getters.selectedContact);
      // console.log(this.$store.getters.toggleEdit);
      // this.contact = JSON.parse(JSON.stringify(this.$store.getters.selectedContact));
      // console.log(this.contact);
    }
  },
  methods: {
    closeModal() {
      this.$store.commit('SET_TOGGLE_EDIT', false)
    },
    submit() {
      if(this.typeOfModal == 'edit') {

      }else {
        axios.post('api/contact/store', this.contact)
        .then(response => {
          if (response.status == 201){
            this.$store.commit('NEW_CONTACT', this.contact)
            this.$store.commit('SET_TOGGLE_EDIT', false)
            this.contact = {}
          }
        })
        .catch(error => {
          if (error.response.status == 422) {
            console.log(error.response.data.errors);
            this.errors = error.response.data.errors
          }
        })
      }
    }
  }
}
</script>
