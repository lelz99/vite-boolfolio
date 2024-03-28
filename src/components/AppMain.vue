<script>
import ProjectCard from './projects/ProjectCard.vue';

export default {
    name: 'AppMain',
    components: { ProjectCard },
    props: { projects: Array }
}
</script>

<template>
    <main>
        <section id="project-card" class="container mt-5">
            <h2 class="h1">Project</h2>
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </section>
    </main>
</template>

<style></style>