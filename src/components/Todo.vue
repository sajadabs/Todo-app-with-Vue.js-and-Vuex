<template>
    <div id="todo" class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">

                <Date></Date>
                <div class="row justify-content-center mb-4 mt-4">
                    <b-button variant="success" @click="setSingle(emptyTodo)">
                        افزودن کار جدید
                        <line-icon
                                class="ml-1"
                                style="font-size: 15px;"
                                icon="plus"
                                color="#fff"
                                no-svg
                        />
                    </b-button>
                </div>
                <TodoItem :todo="todo" v-for="todo in todos" :key="todo.id"></TodoItem>
                <TodoForm :todo="todo" v-show="single"></TodoForm>

            </div>
        </div>
    </div>
</template>
<script>
    import Date from './Date.vue'
    import TodoItem from './TodoItem.vue'
    import TodoForm from './TodoForm.vue'

    export default {
        components: {
            Date,
            TodoItem,
            TodoForm
        },
        data: function () {
            return {
                single: null,
                emptyTodo: {
                    title:null
                },
            }
        },
        methods: {
            edit(todo) {
                this.$store.dispatch('editTodo', todo)
            },
            complete(todo) {
                this.$store.dispatch('completeTodo', todo)
            },
            remove(todo) {
                this.$store.dispatch('removeTodo', todo)
            },
            setSingle(todo){
                this.single = todo;
            },
            getTodo(e) {
                this.$store.dispatch('getTodo', e.target.value)
            },
            addTodo() {
                this.single.splice(0, 1);
                this.single = null
                this.$store.dispatch('addTodo')
                this.$store.dispatch('clearTodo')

            }
        },
        computed: {
            todos() {
                return this.$store.getters.todos
            },
            newTodo() {
                return this.$store.getters.newTodo
            }
        }
    }
</script>