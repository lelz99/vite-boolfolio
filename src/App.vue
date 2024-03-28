<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';
export default {
  name: 'Boolfolio',
  data: () => ({ projects: [] }),
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        this.projects = res.data;
        console.log(this.projects);
      })
    },
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>

</template>

<style></style>
