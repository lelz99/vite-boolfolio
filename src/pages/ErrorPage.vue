<script>
export default {
    name: 'ErrorPage',
}
</script>

<template>
    <div>
        <h2>404 | Not Found</h2>
        <router-link class="btn btn-primary btn-home" :to="{ name: 'home' }">Torna alla Home</router-link>
    </div>
</template>

<style lang="scss" scoped>
div {
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
}
</style>
