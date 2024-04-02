<script>
import ProjectCard from '../components/projects/ProjectCard.vue'
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    data: () => ({ projects: [] }),
    components: { ProjectCard },
    methods: {
        fetchProjects() {
            axios.get(endpoint).then(res => {
                this.projects = res.data;
                console.log(this.projects)
            })
        },
    },
    created() {
        this.fetchProjects();
    }
}
</script>

<template>
    <section id="home-page" class=" container mt-5">
        <h2 class="h1">Progetti</h2>
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </section>
</template>

<style></style>