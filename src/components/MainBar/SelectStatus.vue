<template>
    <div class="form-group">
        <label for="select-status">Select status</label>
        <select id="select-status" class="main-bar__select-status" :value="selected" @change="$emit('statusValue', $event.target.value)">
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="expired">Expired</option>
        </select>
    </div>
</template>

<script>

    export default {
        props: {
            selected: String
        }
    }

</script>