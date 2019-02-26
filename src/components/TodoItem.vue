<template>
    <div id="todo-item">
        <ul class="list-group">
            <li class="list-group-item text-right has-shadow mb-3 rounded p-3" :class="{ 'bg-success': todo.completed, '': !todo.completed }">

                <b-form-checkbox class="mb-3" v-model="todo.completed" @change="complete(todo)">
                    {{todo.title}}
                </b-form-checkbox>

                <div class="float-left">
                    <b-button @click="remove(todo)" variant="danger" size="sm">
                        حذف
                        <line-icon
                                style="font-size: 12px;"
                                icon="trash"
                                color="#fff"
                                no-svg
                        />
                    </b-button>
                    <b-button @click="edit(todo)" variant="warning" size="sm">
                        ویرایش
                        <line-icon
                                style="font-size: 12px;"
                                icon="note"
                                color="#fff"
                                no-svg
                        />
                    </b-button>
                </div>
                <div class="float-right">
                    <b-button variant="secondary" size="sm">
                        ساعت ایجاد
                        {{createTime}}
                        <line-icon
                                style="font-size: 12px;"
                                icon="clock"
                                size="small"
                                color="#fff"
                                no-svg
                        />
                    </b-button>
                </div>

            </li>
        </ul>
    </div>
</template>
<script>
    import mixin from '../mixin/mixin.js'

    export default {
        mixins: [mixin],
        data: function () {
            return {
                completedTodo: false
            }
        },
        props: [
            'todo'
        ],
        computed : {
            createTime : function(){
                return this.$moment(this.todo.createdAt*1000).format('HH:mm:ss')
            }
        }

    }
</script>