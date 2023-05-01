<template>
    <v-container class="d-md-flex justify-md-center align-md-center banner">
        <div class="banner-overlay"></div>
        <v-img :src="img_url" alt="" class="banner-img"></v-img>
        <v-col cols="12" md="6" class="d-flex align-center banner-container-title">
            <h1 class="white--text banner-title text-md-left pa-5">{{ title }}</h1>
        </v-col>
        <v-col cols="12" md="6" v-if="multiselect" class="banner-multiselect">
            <MultiSelectVue v-if="multiselect" :options="options" :type="type" :placeholder="placeholder"></MultiSelectVue>
        </v-col>
        <NavTabs v-if="tabs" :tabs="tabs" :classes="classes"></NavTabs>
    </v-container>
</template>

<script>
    import MultiSelectVue from '../atoms/MultiSelect.vue';
    import NavTabs from '../atoms/NavTabs.vue';

    export default {
        components: {
          MultiSelectVue,
          NavTabs
        },
        props: {
          title: String,
          img_url: String,
          multiselect: Boolean,
          options: Array,
          type: String,
          placeholder: String,
          tabs: Array,
          classes: Array
        }
    }
</script>

<style>
  .h-100 {
      height: 100%;
  }
  .banner {
    position: relative;
    overflow: hidden;
    height: 80vh;
    border-radius: 20px;
  }
  .banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.1);
    z-index: 1;
  }
  .banner-title {
    position: absolute;
    left: 0;
    z-index: 2;
    width: 40%;
  }
  .banner-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .banner-multiselect {
    position: static;
    z-index: 2;
  }
  .banner-tabs {
    position: absolute;
    bottom: 0;
    z-index: 2;
    background-color: transparent;
  }
  @media all and (max-width: 1200px) {
    .banner .v-image {
      min-height: 100%;
      max-width: unset;
      width: auto;
    }
  }
  @media all and (max-width: 960px) {
    .banner {
      border-radius: 0;
    }
    .banner-container-title {
      width: 100%;
      height: 50%;
    }
    .banner-title {
      width: 100%;
    }
    .banner-multiselect {
      position: absolute;
      width: 95%;
    }
  }
</style>