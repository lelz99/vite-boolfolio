<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

const endpoint = 'http://localhost:8000/api/projects/';

export default {
  name: 'Boolfolio',
  data: () => ({ projects: [] }),
  components: { AppHeader, AppMain },
  methods: {
    fetchProjects() {
      axios.get(endpoint).then(res => {
        this.projects = res.data;
      })
    },
  },
  created() {
    this.fetchProjects();
  }
}
</script>

<template>
  <AppHeader />
  <AppMain :projects="projects" />
</template>

<style></style>
