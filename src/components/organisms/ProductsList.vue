<template>
    <v-container class="product-list d-flex justify-center flex-wrap my-5">
        <div v-for="product in getFilteredProducts" :key="product.code">
            <ProductCard :product="product"></ProductCard>
        </div>
    </v-container>
</template>

<script>
    import ProductCard from '../molecules/ProductCard.vue';
    import { mapState } from 'vuex';
    
    export default {
        components: {
            ProductCard
        },
        props: {
            products: Array
        },
        computed: {
            getFilteredProducts() {
                var filtered_products = this.products.filter(product => { 
                    return product.type == this.currentType.id
                });

                return filtered_products;
            },
            ...mapState([
                'currentType'
            ])
        }
    }
</script>

<style>
    .product-list > div {
        flex: 0 0 30%;
        max-width: 30%;
    }
    @media all and (max-width: 600px) {
        .product-list > div {
            max-width: 100%;
        }
    }
</style>