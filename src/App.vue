<template>
  <div id="app">
    <div class="container">
      <AddNote/>
      <FilterNotes/>
      <Notes/>
    </div>
  </div>
</template>

<script>
  import Notes from './components/Notes.vue'
  import AddNote from './components/AddNote.vue'
  import FilterNotes from './components/FilterNotes.vue'

  export default {
    name: 'App',
    components: {
      Notes,
      AddNote,
      FilterNotes
    }
  }
</script>

<style>
  body {
    font-family: "Consols", Arial, sans-serif;
    background: #E8F7F0;
    line-height: 1.5;
  }

  .container {
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
    max-width: 1100px;
  }
</style>
