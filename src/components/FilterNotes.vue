<template>
    <div>
        <div id="filter">
            Filter Results:
            <select @change="filterNotes($event)">
                <option value="200">200</option>
                <option value="100">100</option>
                <option value="50">50</option>
                <option value="25">25</option>
                <option value="10">10</option>
                <option value="5">5</option>
            </select>
        </div>
        <div class="legend">
            <span>
                <span class="completed-box"></span> Done
            </span>
            <span>
                <span class="incompleted-box"></span> In Progress
            </span>
        </div>
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
        border-radius: 5px;
    }

    .legend {
        display: flex;
        justify-content: left;
        margin: 1rem 0 2rem 0;
    }

    .legend > span {
        margin-right: 15px;
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

    @media (max-width: 420px) {
        #filter {
            position: absolute;
            margin-top: -70px;
            margin-left: 105px;
        }
    }
</style>
