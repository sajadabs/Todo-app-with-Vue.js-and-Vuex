<template>
  <div id="app" class="container">
    <Todo></Todo>
  </div>
</template>
<script>
    import Todo from './components/Todo.vue'
    export default {
        components: {
            Todo,
        }
    }
</script>