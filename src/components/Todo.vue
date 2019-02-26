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
                <TodoItem :todo="todo" v-for="todo in todos" :key="todo.id"></TodoItem>
                <TodoForm :todo="single" :show-edit="showEdit" v-show="single"></TodoForm>
            </div>
        </div>
    </div>
</template>
<script>
    import Date from './Date.vue'
    import TodoItem from './TodoItem.vue'
    import TodoForm from './TodoForm.vue'
    import mixin from '../mixin/mixin.js'

    export default {
        mixins: [mixin],

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
    }
</script>