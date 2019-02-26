<template>
  <form class="form" v-on:submit.prevent="_addTodo">
    <input type="text" class="form-input" placeholder="Добавьте задачу..." v-model="input">
  </form>
</template>

<script>
  export default {
    name: 'Form',
    data () {
      return {
        input: '',
      }
    },
    methods: {
      _addTodo () {
        if (!this.input) {
          return
        }
        this.$store.dispatch('addTodo', this.input)
      },
    },
  }
</script>

<style lang="scss" scoped>
  .form-input {
    width: 100%;
    padding: 30px;
    border-radius: 2px;
    border: 2px solid rgba(#000, .5);
    font-size: 20px;
  }
</style>
