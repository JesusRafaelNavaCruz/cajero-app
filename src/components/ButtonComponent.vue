<template>
    <div class="btn-cs-bg">
        <router-link :to="route" class="btn-cs">
            <p>{{ label }}</p>
        </router-link>
    </div>
</template>
<script>
export default {
    props: {
        label: String,
        route: String,
        icon: String,
    }
}
</script>
<style scoped>
.btn-cs {
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fcfcfc;
    font-size: 24px;
    font-weight: 600;
}
.btn-cs-bg {
    background: #01B4F5;
    border-radius: 4px;
    text-align: center;
    padding: 2rem 0;
}
.btn-cs-bg p {
 margin: 0;
}
</style>