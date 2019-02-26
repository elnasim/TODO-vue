<template>
  <div class="todo-item">
    <div class="todo-item__check" :class="_isDone" v-on:click="_setDoneState"></div>
    <div class="todo-item__text" :class="_isDone" v-on:click="_edit" v-if="!isEdit">{{text}}</div>
    <form class="todo-item__form" v-on:submit.prevent="_setChages" v-if="isEdit">
      <input class="todo-item__input" v-model="newText">
    </form>
    <div class="todo-item__delete" v-on:click="_remove"></div>
  </div>
</template>

<script>
  export default {
    name: 'TodoItem',
    props: ['text', 'isDone', 'id'],
    data () {
      return {
        isEdit: false,
        newText: this.text,
      }
    },
    computed: {
      _isDone () {
        if (this.isDone) {
          return 'checked'
        }
      },
    },
    methods: {
      _setDoneState () {
        this.$store.dispatch('setDoneState', this.id)
      },

      _remove () {
        this.$store.dispatch('remove', this.id)
      },

      _edit () {
        this.isEdit = true
      },

      _setChages () {
        this.isEdit = false
        this.$store.dispatch('editTodo', [this.id, this.newText])
      },
    },
  }
</script>

<style scoped lang="scss">
  .todo-item__check {
    border-radius: 100%;
    border: 2px solid rgba(#000, .5);
    width: 30px;
    height: 30px;
    min-width: 30px;
    cursor: pointer;

    &.checked {
      background-color: rgba(#000, .5);
    }
  }

  .todo-item {
    border-radius: 2px;
    border: 2px solid rgba(#000, .5);
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .todo-item__delete {
    position: relative;
    width: 30px;
    height: 30px;
    min-width: 30px;
    cursor: pointer;

    &::before, &::after {
      content: '';
      position: absolute;
      width: 30px;
      height: 2px;
      background-color: #e94522;
      top: 50%;
    }

    &::before {
      transform: rotate(-45deg);
    }

    &::after {
      transform: rotate(45deg);
    }
  }

  .todo-item__text {
    flex: 1;
    padding: 0 20px;

    &.checked {
      text-decoration: line-through;
      opacity: .5;
    }
  }

  .todo-item__form {
    flex: 1;
    padding: 0 10px;
  }

  .todo-item__input {
    width: 100%;
    border: none;
    border-bottom: 1px solid red;
    font-size: 16px;
  }
</style>
