<template>
    <v-btn :rounded="isRounded ? true : false" :depressed="isDepressed ? true : false" :color="color" :class="classes">
        <v-icon v-if="icon_class">mdi-{{ icon_class }}</v-icon>
        <span class="ml-3">{{ label }}</span>
    </v-btn>
</template>

<script>
    export default {
        props: {
            isRounded: Boolean,
            isDepressed: Boolean,
            color: String,
            label: String,
            classes: Array,
            icon_class: String
        }
    }
</script>

<style>
    .v-btn {
        height: 50px !important;
        font-weight: 600;
    }
</style>