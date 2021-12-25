<template>
<div v-if="toggleEdit">
  <div class="fixed left-0 top-0 w-full h-full bg-black opacity-25 z-30"></div>
  <div class=" fixed w-2/5 h-1/2 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 shadow-3xl rounded overflow-hidden bg-white z-50"
    :class="toggleEdit ? 'animate-fade-in-down' : 'animate-fade-out-up'">
    <div class="flex justify-end items-center text-white uppercase">
      <button class="w-20 h-10 rounded bg-teal-400 tracking-wider" 
      @click="closeEdit">SUBMIT
      </button>
      <button class="w-20 h-10 mx-5 rounded bg-teal-400 tracking-wider" 
      @click="closeEdit">CLOSE
      </button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "ContactDetail",
  computed: {
    toggleEdit() {
      return this.$store.state.toggleEdit
    }
  },
  methods: {
    closeEdit() {
      this.$store.commit('SET_TOGGLE_EDIT', false)
    }
  }
}
</script>
