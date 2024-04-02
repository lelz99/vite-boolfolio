<script>
import axios from 'axios';
import ProjectCard from '../components/projects/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    data: () => ({ project: {} }),
    components: { ProjectCard },
    methods: {
        fetchProject() {
            axios.get(`${endpoint}${this.$route.params.slug}`).then(res => {
                this.project = res.data;
            }).catch(err => {
                console.error(err);
                this.$router.push({ name: '404' })
            })
        },
    },
    created() {
        this.fetchProject();
    }
}
</script>

<template>
    <section id="project-detail" class=" container mt-5">
        <h1>Dettaglio Progetto</h1>
        <ProjectCard :project="project" />
    </section>
</template>

<style></style>