<template>
    <multiselect 
        v-model="selected_option" 
                :value="value"  
                :options="options" 
                :placeholder="placeholder" 
                label="title" 
                track-by="title"
                @select="redirect()"
                :show-labels="false"
                openDirection="bottom">
    </multiselect>
</template>

<script>
    import Multiselect from 'vue-multiselect'

    export default {
        components: {
            Multiselect
        },
        props: {
            'value' : String,
            'options': Array,
            'placeholder': String,
            'type': String
        },
        data() {
            return {
                selected_option: {}
            }
        },
        methods: {
            redirect() {
                var param = this.selected_option.id;
                this.$router.push('/' + this.type  + '/' + param);
            }
        }
    }
</script>

<style>
    .v-application ul.multiselect__content {
        padding-left: 0;
    }
    .multiselect__option--highlight, .multiselect__option--highlight::after {
        background: #F44336 !important;
    }
</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>