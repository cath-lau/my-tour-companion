<template>
    <v-app>
        <v-container class="activity">
            <v-row>
                <Banner :title="activity.title" 
                        :img_url="activity.images[0]"
                        :multiselect="false">
                </Banner>
            </v-row>
            <v-row>
                <v-col cols="12" md="8" class="px-md-0">
                    <p class="text-left">{{ activity.description }}</p>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="3" class="activity-price-card">
                    <PriceCard :activity="activity"></PriceCard>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
</template>

<script>
    import Banner from '@/components/molecules/BannerView.vue'
    import PriceCard from '@/components/molecules/PriceCard.vue'
    
    export default {
        components: {
            Banner,
            PriceCard
        },
        computed: {
            activity() {
                return this.$store.state.activities.find((activity) => { 
                    return activity.id == this.$route.params.id 
                });
            }
        },
        mounted() {
            this.$store.dispatch('loadActivities');
        },
    }
</script>

<style>
    .activity {
        position: relative;
    }
    .activity-price-card {
        position: relative;
    }
    @media all and (min-width: 960px) {
        .activity-price-card .v-card {
            position: absolute;
            right: 30px;
            bottom: -77px;
            z-index: 2;
            width: 100%;
        }
    }
</style>