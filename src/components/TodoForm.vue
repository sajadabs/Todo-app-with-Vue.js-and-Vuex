<template>
    <div id="todo-form">
        <b-modal
                v-model="modal"
                title="افزودن کار جدید"
                @ok="addTodo"
                ok-variant="success"
                cancel-variant="danger"
                ok-title="تایید"
                cancel-title="انصراف"
                hide-header-close

        >
            <input class="form-control"
                   :value="newTodo"
                   @change="getTodo"
                   placeholder="متن کار جدید ..."
            >
        </b-modal>
    </div>
</template>
<script>
    export default {
        data: function () {
            return {
                modal: true
            }
        },
        props:[
            'todo'
        ],

    }
</script>