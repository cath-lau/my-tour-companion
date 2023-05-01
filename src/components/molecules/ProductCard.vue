<template>
    <v-card :classes="classes">
        <v-img :src="product.images[0]" alt=""></v-img>
        <v-card-subtitle class="pb-0">{{ product.sub_type.label }}</v-card-subtitle>
        <v-card-title class="pt-0">{{ product.title }}</v-card-title>
        <v-card-text>
            <p class="text-caption mb-0">À partir de </p>
            <p class="red--text mb-0">
                <span class="text-h5 red--text card-rate">{{ getRate }} €</span> / pers.
            </p>
        </v-card-text>    
        <router-link :to="{ name: 'activity', params: { id: product.id }}" class="card-link"></router-link>
    </v-card>
</template>

<script>
    export default {
        props: {
            product: Object,
            classes: Array
        },
        computed: {
            getRate() {
                return this.product.base_rate_adult != null ? this.product.base_rate_adult : this.product.fixed_rate;
            }
        },
    }
</script>

<style>
    .v-card {
        border-radius: 20px !important;
    }
    .v-card:hover {
        box-shadow: 3px 3px 13px 0 rgba(0,0,0,.5) !important;
    }
    .v-card__title {
        word-break: unset;
    }
    .card-link {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
</style>