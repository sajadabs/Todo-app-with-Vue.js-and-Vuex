export default {

    methods: {
        getDefaultTodo() {
            return {
                title: null
            }
        },
        edit(todo) {
            this.$parent.showEdit = true
            this.$parent.setSingle(todo)
            this.$store.dispatch('editTodo', todo)
        },
        submitEdit(todo) {
            this.$parent.showEdit = false
            this.$parent.setSingle(null)
            this.$store.dispatch('submitEditTodo', todo)
            this.$store.dispatch('clearTodo')
        },
        cancelForm() {
            this.$parent.showEdit = false
            this.$parent.setSingle(null)
            this.$store.dispatch('clearTodo')
        },
        complete(todo) {
            this.$store.dispatch('completeTodo', todo)
        },
        remove(todo) {
            this.$store.dispatch('removeTodo', todo)
        },
        setSingle(todo) {
            this.single = todo;
        },
        getNowTime() {
            return this.$moment().unix()
        },
        addTodo() {
            this.$parent.setSingle(null)
            this.$store.dispatch('createdTime', this.getNowTime())
            this.$store.dispatch('addTodo')
            this.$store.dispatch('clearTodo')
        },
        getTodo(e) {
            this.$store.dispatch('getTodo', e.target.value)
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