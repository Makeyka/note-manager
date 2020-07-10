<template>
    <div>
        <div class="notes">
            <div @dblclick="onDblClick(note)"
            v-for="note in allNotes"
            v-bind:key="note.id"
            v-bind:id="note.id"
            class="note" 
            v-bind:class="{'is-complete':note.completed}">
                <p> {{ note.title }} </p>
                <i @click="deleteNote(note.id)" class="fas fa-trash-alt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'Notes',
        methods: {
            ...mapActions(['fetchNotes', 'deleteNote', 'updateNote']),
            onDblClick(note) {
                const updatedNote = {
                    id: note.id,
                    title: note.title,
                    completed: !note.completed
                }
                this.updateNote(updatedNote)
            }
        },
        computed: mapGetters(['allNotes']),
        created() { this.fetchNotes() }
    }
</script>

<style scoped>
    div, span, p { 
        user-select: none;
         -ms-user-select: none;
          -moz-user-select: none; 
           -khtml-user-select: none; 
            -webkit-user-select: none; 
             -webkit-touch-callout: none; 
    }
    
    .notes {
        display: grid;
        grid-template-columns: repeat(3, 3fr);
        grid-gap: 1rem;
    }

    .note {
        padding: 1rem;
        cursor: pointer;
        position: relative;
        text-align: center;
        background: #41B883;
        border: 1px solid #CCC;
        border-radius: 5px;
        animation: fadeIn 1.5s;
    }

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    .note > p {
        font-size: 20px;
    }

    i {
        right: 10px;
        bottom: 10px;
        color: #FFF;
        cursor: pointer;
        position: absolute;
        transition: color 250ms;
    }
    
    i:hover {
        color: #E71111;
    }

    .is-complete {
        color: #FFF;
        background: #35495E;
        transition: background 1s;
    }

    @media (max-width: 600px) {
        .notes {
            grid-template-columns: 2fr;
        }
    }
</style>