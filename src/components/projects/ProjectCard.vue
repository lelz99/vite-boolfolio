<script>
export default {
    name: 'ProjectCard',
    props: { project: Object }
}
</script>

<template>
    <div class="card mb-3 my-5">
        <div class="row g-0">
            <div class="card-header d-flex justify-content-between align-items-center">
                <h2 class="card-title mb-1">{{ project.title }}</h2>
                <router-link :to="{ name: 'project-detail', params: { slug: project.slug } }"
                    class="btn btn-primary">Vedi Dettagli
                </router-link>
                <!-- <p class="fw-bold mb-0"> Tipo: <span class="fw-normal"> @if($project->type) {{ $project -> type ? -> label }} @else Nessuno @endif </span> </p> -->
            </div>
            <div class="col-md-4">
                <img :src="project.image" class="img-fluid h-100 w-100" :alt="project.title">
            </div>
            <div class="col-md-8 d-flex flex-column">
                <div class="card-body">
                    <p class="card-text">{{ project.description }}</p>
                    <ul class="list-unstyled">
                        <li>
                            <strong>Tecnologie:</strong>
                            <span v-for="technology in  project.technologies" :class="technology.color">
                                <i :class="technology.icon" class="mx-1 fa-2x"></i>
                            </span>
                        </li>
                        <li>
                            <strong>Tipo:</strong> {{ project.type ? project.type?.label : 'Non Definito' }}
                        </li>
                        <li>
                            <strong>Data fine Progetto:</strong> {{ project.end_date }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style></style>