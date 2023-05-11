<template>
  <button @click="showNotification">Show Notification</button>
</template>

<script>
export default {
  methods: {
    showNotification() {
      this.$toast.open('Hello, world!')
    }
  }
}
</script>
