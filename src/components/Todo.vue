<template>
    <div id="todo" class="container">
        <div class="row justify-content-center">
            <div class="col-lg-7">
                <Date></Date>
                <div class="row justify-content-center mb-4 mt-4">
                    <b-button variant="success" @click="setSingle(getDefaultTodo())">
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
                <TodoItem :todo="todo" v-for="(todo , index) in todos" :key="index" @edit="edit($event)" @remove="remove($event)" @completeTodo="complete($event)"></TodoItem>
                <TodoForm :todo="single" :show-edit="showEdit" v-show="single" @cancel="cancelForm" @submitEdit="submitEdit($event)" @add="addTodo"></TodoForm>
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
                showEdit: false,
            }
        },
        methods: {
            getDefaultTodo() {
                return {
                    title: null
                }
            },
            setSingle(todo) {
                this.single = todo;
            },
            edit(todo) {
                this.showEdit = true;
                this.setSingle(todo);
                this.$store.dispatch('editTodo', todo)
            },
            submitEdit(todo) {
                this.showEdit = false;
                this.setSingle(null);
                this.$store.dispatch('submitEditTodo', todo);
                this.$store.dispatch('clearTodo')
            },
            cancelForm() {
                this.showEdit = false;
                this.setSingle(null);
                this.$store.dispatch('clearTodo')
            },
            addTodo() {
                this.setSingle(null);
                this.$store.dispatch('createdTime', this.getNowTime());
                this.$store.dispatch('addTodo');
                this.$store.dispatch('clearTodo')
            },
            complete(todo) {
                this.$store.dispatch('completeTodo', todo);
                this.$store.dispatch('clearTodo')
            },
            remove(todo) {
                this.$store.dispatch('removeTodo', todo)
            },
            getNowTime() {
                return this.$moment().unix()
            },
        },
        computed: {
            todos() {
                return this.$store.getters.todos
            }
        }
    }
</script>