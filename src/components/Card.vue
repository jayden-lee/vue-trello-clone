<template>
  <div>
    Card
    <div v-if="loading">loading card ...</div>
    <div v-else>
      <div>cid: {{cid}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cid: 0,
      loading: true
    }
  },
  watch: {
    '$route': {
      handler: 'fetchData',
      immediate: true
    }
  },
  methods: {
    fetchData() {
      this.loading = true
      setTimeout(() => {
        this.cid = this.$route.params.cid
        this.loading = false
      }, 1000)
    }
  }
}
</script>

<style>

</style>
