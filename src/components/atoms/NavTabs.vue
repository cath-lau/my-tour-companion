<template>
    <v-tabs :class="classes">
        <v-tab v-for="tab in tabs" :key="tab.id" @click="getCurrentTab(tab)" v-model="active_tab">
          <v-icon>mdi-{{ tab.icon_class }}</v-icon>
          <span class="ml-2">{{ tab.label }}</span>
        </v-tab>
    </v-tabs>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        props: {
            tabs: Array,
            classes: Array,
            icon_class: String
        },
        data() {
          return {
            active_tab: ''
          }
        },
        computed: mapState([
            'currentType'
        ]),
        mounted() {
          this.active_tab = this.currentType.id;
        },
        methods: {
          getCurrentTab(tab) {
              this.$store.dispatch('setCurrentType', tab);
          }
        }
    }
</script>

<style>
  .theme--light.v-tabs > .v-tabs-bar {
    background-color: transparent;
  }
  .v-slide-group__content {
    justify-content: center;
  }
  .v-tab {
    font-weight: 600;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
  }
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active), 
  .theme--light.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) .v-icon {
    color: white;
  }
  .v-tab--active {
    background-color: white;
    color: #2c3e50 !important;
  }
  .v-tabs-slider-wrapper {
    display: none;
  }
</style>