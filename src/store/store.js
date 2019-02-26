import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
    key: 'todo-app',
    storage: window.localStorage
})

export default new Vuex.Store({
    plugins: [vuexPersist.plugin],
    state: {
        todos: [],
        newTodo: '',
        createTime : null
    },
    mutations: {
        GET_TODO(state, todo) {
            state.newTodo = todo
        },
        ADD_TODO(state) {
            state.todos.push({
                id: state.todos.length + 1,
                title: state.newTodo,
                completed: false,
                createdAt : state.createTime
            })
        },
        EDIT_TODO(state, todo) {
            state.newTodo = todo.title
        },
        SUBMIT_EDIT_TODO(state, todo) {
            todo.title = state.newTodo
        },
        REMOVE_TODO(state, todo) {
            var todos = state.todos
            todos.splice(todos.indexOf(todo), 1)
        },
        COMPLETE_TODO(todo) {
            todo.completed = !todo.completed
        },
        CLEAR_TODO(state) {
            state.newTodo = ''
        },
        CREATE_TIME(state , createTime) {
            state.createTime = createTime
        }
    },
    actions: {
        getTodo({commit}, todo) {
            commit('GET_TODO', todo)
        },
        addTodo({commit} , createTime) {
            commit('ADD_TODO' , createTime)
        },
        editTodo({commit}, todo) {
            commit('EDIT_TODO', todo)
        },
        submitEditTodo({commit}, todo) {
            commit('SUBMIT_EDIT_TODO', todo)
        },
        removeTodo({commit}, todo) {
            commit('REMOVE_TODO', todo)
        },
        completeTodo({commit}, todo) {
            commit('COMPLETE_TODO', todo)
        },
        clearTodo({commit}) {
            commit('CLEAR_TODO')
        },
        createdTime({commit} , createTime) {
            commit('CREATE_TIME' , createTime)
        }
    },
    getters: {
        newTodo: state => state.newTodo,
        todos: state => state.todos,
    },
})