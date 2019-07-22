<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>
        <div v-for="b in boards" :key="b.id">
          {{b}}
        </div>
      <ul>
        <li>
          <router-link to="/b/1">Board 1</router-link>
        </li>
        <li>
          <router-link to="/b/2">Board 2</router-link>
        </li>
        <li>
          <router-link to="/b/3">Board 3</router-link>
        </li>
        <li>
          <router-link to="/b/4">Board 4</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      loading: false,
      boards: [],
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.loading = true

      axios.get('http://localhost:3000/boards')
        .then(res => {
          this.boards = res.data
        })
        .catch(res => {
          this.$router.replace('/login')
        })
        .finally(() => {
          this.loading = false
        })
    }
  }
};
</script>

<style>
</style>