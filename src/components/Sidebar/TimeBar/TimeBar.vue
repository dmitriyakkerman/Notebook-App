<template>
    <div class="notebook-time">
        {{ date | transformDate }}
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
          transformDate(value) {
              return value.toLocaleDateString() + ' ' + value.toLocaleTimeString();
          }
        },
        mounted() {
            setInterval(() => {
                this.date = new Date()
            }, 1000)
        }
    }

</script>