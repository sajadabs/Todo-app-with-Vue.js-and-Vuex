<template>
    <div id="todo-form">
        <b-modal
                v-model="modal"
                hide-header
                hide-footer
                no-close-on-esc
                no-close-on-backdrop
        >
            <h5 class="text-right">
                <div v-if="showEdit">ویرایش کار</div>
                <div v-else>افزودن کار جدید</div>
            </h5>
            <hr>

            <input class="form-control mb-3"
                   :value="newTodo"
                   @change="getTodo"
                   placeholder="متن کار جدید ..."
            >

            <b-button variant="danger" @click="cancelForm()">
                انصراف
            </b-button>

            <b-button variant="success" @click="showEdit ? submitEdit(todo) : addTodo()">
                <div v-if="showEdit">ویرایش</div>
                <div v-else>افزودن</div>
            </b-button>

        </b-modal>
    </div>
</template>
<script>
    import mixin from '../mixin/mixin.js'

    export default {
        mixins: [mixin],
        data: function () {
            return {
                modal: true
            }
        },
        props: [
            'todo', 'showEdit'
        ]

    }
</script>