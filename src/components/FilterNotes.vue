<template>
    <div>
        Filter Results:
        <select @change="filterNotes($event)">
        	<option value="5">5</option>
        	<option value="10">10</option>
        	<option value="25">25</option>
        	<option value="50">50</option>
            <option value="100">100</option>
            <option value="200">200</option>
        </select>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'FilterNotes',
        methods: mapActions(['filterNotes'])
    }
</script>

<style scoped>
    select {
        padding: 5px;
        margin-top: 20px;
        border: 1px solid #41B883;
    }
</style>
