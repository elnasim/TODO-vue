<template>
  <div id="app">
    <div class="container">

      <div class="title">TODOS</div>

      <div class="todo-body">
        <Form/>
        <Todos/>
      </div>

    </div>
  </div>
</template>

<script>

  import Form from './components/Form'
  import Todos from './components/Todos'

  export default {
    name: 'app',
    components: { Todos, Form },
  }
</script>

<style lang="scss">
  @import "assets/style";

  #app {
    width: 100%;
  }

  .title {
    text-align: center;
    font-weight: bold;
    font-size: 40px;
    color: rgba(#000, .8);
    margin-bottom: 20px;
  }

  .todo-body {
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.35);
  }
</style>
