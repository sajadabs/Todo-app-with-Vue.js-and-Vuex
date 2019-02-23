<template>
  <div id="app" class="container">
    <Date></Date>
    <CompletedTodos></CompletedTodos>
    <GetTodo></GetTodo>
    <CurrentTodos></CurrentTodos>
  </div>
</template>
<script>
    import Date from './components/Date.vue'
    import GetTodo from './components/GetTodo.vue'
    import CurrentTodos from './components/CurrentTodos.vue'
    import CompletedTodos from './components/CompletedTodos.vue'
    export default {
        components: {
            Date,
            GetTodo,
            CurrentTodos,
            CompletedTodos
        }

    }
</script>