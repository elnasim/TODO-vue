<template>
  <div class="todos">
    <TodoItem v-for="item in getTodos" :key="item.id"
              :isDone="item.done"
              :text="item.text"
              :id="item.id"
    />
  </div>
</template>

<script>
  import TodoItem from './TodoItem'

  export default {
    name: 'Todos',
    components: { TodoItem },
    computed: {
      getTodos () {
        return this.$store.state.todos
      },
    },
  }
</script>

<style scoped lang="scss">

</style>
