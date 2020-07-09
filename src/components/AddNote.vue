<template>
    <div>
        <h3>Add Note</h3>
        <div class="add">
            <form @submit="onSubmit">
                <input type="text" v-model="title" placeholder="Add new note.." required>
                <span style="width:5px;"></span>
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'AddNote',
        data() {
            return { 
                title: '' 
            } // v-model
        },
        methods: {
            ...mapActions(['addNote']),
            onSubmit(event) {
                event.preventDefault()
                this.addNote(this.title)
            }
        }
    }
</script>

<style scoped>
    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        outline: 0;
        padding: 10px;
        border: 1px solid #41B883;
        border-radius: 5px;
    }

    input[type="submit"] {
        flex: 2;
        color: #FFF;
        cursor: pointer;
        background: #41B883;
        border: 1px solid #41B883;
        border-radius: 5px;
    }
</style>