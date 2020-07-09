import axios from 'axios'

const state = {
    notes: [
        {
            id: 1,
            title: "aloha"
        },
        {
            id: 2,
            title: "helloh"
        },
    ]
}

const getters = {
    allNotes: state => state.notes
}

const actions = {
async fetchNotes({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        commit('setNotes', response.data)
    },
    
    async addNote({ commit }, title) {
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos',
             { title, completed: false })
        commit('newNote', response.data)
    },

    async deleteNote({ commit }, id) {
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        commit('removeNote', id)
    },

    async filterNotes({ commit }, event) {
        const limit = parseInt(event.target.options[event.target.options.selectedIndex].innerText)
        const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        commit('setNotes', response.data)
    },

    async updateNote({ commit }, updatedNote) {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedNote.id}`, updatedNote)
        console.log(response.data)
        commit('updateNote', response.data)
    }
}

const mutations = {
    setNotes: (state, notes) => state.notes = notes,
    newNote: (state, note) => state.notes.unshift(note),
    removeNote: (state, id) => state.notes = state.notes.filter(note => note.id !== id),
    updateNote: (state, updatedNote) => {
        const index = state.notes.findIndex(note => note.id === updatedNote.id)
        if (index !== -1) {
            state.notes.splice(index, 1, updatedNote)
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}