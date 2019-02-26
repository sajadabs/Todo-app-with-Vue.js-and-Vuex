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
            <b-button variant="danger" @click="$emit('cancel')">
                انصراف
            </b-button>
            <b-button variant="success" @click="showEdit ? $emit('submitEdit' , todo) : $emit('add')">
                <div v-if="showEdit">ویرایش</div>
                <div v-else>افزودن</div>
            </b-button>
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
        props: [
            'todo', 'showEdit'
        ],
        methods: {
            getTodo(e) {
                this.$store.dispatch('getTodo', e.target.value)
            }
        },
        computed: {
            newTodo() {
                return this.$store.getters.newTodo
            }
        }
    }
</script>