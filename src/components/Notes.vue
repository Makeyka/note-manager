<template>
    <div>
        <h3>Notes</h3>
        <div class="legend">
            <span>Double tap to mark as complete</span>
            <span>
                <span class="completed-box"></span> Completed
            </span>
            <span>
                <span class="incompleted-box"></span> Incompleted
            </span>
        </div>
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
        grid-template-columns: repeat(3, 1fr);
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
    }

    i {
        right: 10px;
        bottom: 10px;
        color: #FFF;
        cursor: pointer;
        position: absolute;
    }

    .legend {
        display: flex;
        justify-content: space-around;
        margin-bottom: 1rem;
    }

    .incompleted-box {
        width: 10px;
        height: 10px;
        background: #41B883;
        display: inline-block;
    }

    .completed-box {
        width: 10px;
        height: 10px;
        background: #35495E;
        display: inline-block;
    }

    .is-complete {
        color: #FFF;
        background: #35495E;
    }

    @media (max-width: 500px) {
        .todos {
            grid-template-columns: 1fr;
        }
    }
</style>