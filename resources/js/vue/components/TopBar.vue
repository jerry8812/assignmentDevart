<template>
  <div class="flex justify-between px-24 mb-9 
              border-solid border-b-2 border-b-gray-300">
    <h1 class="text-3xl py-8">Address Book</h1>
    <button 
      class="px-3 h-9 self-center uppercase
      border-solid border-1 rounded-xl bg-teal-400 
    text-white tracking-wider hover:bg-teal-300" @click="openEdit">
      Create a new contact
    </button>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    openEdit() {
      this.$store.commit('SET_TOGGLE_EDIT', true)
    }
  }
}
</script>
