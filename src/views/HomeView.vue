<template>
    <v-app>
          <Banner title="Parce qu'il n'y a pas de voyage sans aventure!" 
                  img_url="https://images.pexels.com/photos/5225278/pexels-photo-5225278.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  :multiselect="true"
                  :options="activities" 
                  type="activity" 
                  placeholder="Activité ou destination"
                  :classes="classes"
                  :tabs="activityTypes">
          </Banner>
          <ProductsList :products="activities"></ProductsList>
    </v-app>
</template>

<script>
  import Banner from '@/components/molecules/BannerView.vue';
  import ProductsList from '@/components/organisms/ProductsList.vue';
  import { mapState } from 'vuex';
  
  export default {
      components: {
          Banner,
          ProductsList
      },
      data() {
        return {
            classes: [
              'banner-tabs',
            ]
        }
      },
      mounted() {
        this.$store.dispatch('loadActivities');

        this.$store.dispatch('setCurrentType', {
          id: 'gastronomy',
          label: 'Gastronomie'
        });
      },
      computed: mapState([
          'activities',
          'activityTypes'
      ])
  }
</script>
