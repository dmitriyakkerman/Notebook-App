<template>
    <div class="time">
        <span>{{ date | toLocaleDateString }}</span>
        <span>{{ date | toLocaleTimeString }}</span>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                date: new Date()
            }
        },
        filters: {
            toLocaleDateString(value) {
              return value.toLocaleDateString();
            },
            toLocaleTimeString(value) {
                return value.toLocaleTimeString();
            }
        },
        mounted() {
            setInterval(() => {
                this.date = new Date()
            }, 1000)
        }
    }

</script>