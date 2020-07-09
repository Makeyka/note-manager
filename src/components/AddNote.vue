<template>
    <div>
        <h1>Note Manager</h1>
        <div class="add">
            <form @submit="onSubmit">
                <input id="add-note" type="text" v-model="title" placeholder="Type your note.." required>
                <span style="width:5px;"></span>
                <input @click="clear" type="submit" value="ADD NOTE">
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
            },
            clear() {
                setTimeout(() => {
                    document.querySelector('#add-note').value = ''
                }, 250)
            }
        }
    }
</script>

<style scoped>
    h1 {
        color: #35495E;
    }

    form {
        display: flex;
    }

    input[type="text"] {
        flex: 10;
        outline: 0;
        padding: 10px;
        font-size: 20px;
        border: 1px solid #41B883;
        border-radius: 5px;
    }

    input[type="submit"] {
        flex: 2;
        color: #FFF;
        cursor: pointer;
        font-weight: bold;
        background: #41B883;
        border: 1px solid #41B883;
        transition: background 250ms;
        border-radius: 5px;
    }

    input[type="submit"]:hover {
        background: #35495E;
        transition: background 250ms;
    }
</style>