<template>
    <v-card elevation="5" class="price-card d-flex flex-column justify-space-between">
        <v-card-title class="d-flex flex-column align-center">
            <p class="text-body-2 mb-0">À partir de </p>
            <p>
                <span class="text-h4 price-card-title mr-3 mb-0">{{ getRate }} €</span>/ pers.
            </p>
        </v-card-title>
        <v-card-text>
            <div class="mb-5">
                <DatePicker :activity="activity" @getSelectedDate="setDate"></DatePicker>
            </div>
            <div class="mb-5">
                <InputNumber :label="input_number_label" 
                             id="nb_adults" 
                             :default_value="1" 
                             :min="1"
                             :max="onDemand"
                             @getNumber="setNbAdults">
                </InputNumber>
            </div>
            <div v-if="activity.base_rate_adult != null" class="mb-5">
                <InputNumber label="Enfant(s) (6 à 17 ans inclus)" 
                             id="nb_children" 
                             :default_value="0"
                             :min="0"
                             @getNumber="setNbChildren">
                </InputNumber>
            </div>
            <div v-if="selected_date" class="d-flex align-center">
                <p class="text-h5 mb-0">Total</p>
                <v-spacer></v-spacer>
                <p class="text-h4 red--text card-rate mb-0">{{ total_price }} €</p>
            </div>
        </v-card-text>
        <Button :isRounded="true" :isDepressed="true" color="red" :classes="classes" icon_class="cart-outline" label="Réserver"></Button>
    </v-card>
</template>

<script>
    import DatePicker from '../atoms/DatePicker.vue'
    import InputNumber from '../atoms/InputNumber.vue';
    import Button from '../atoms/ButtonView.vue'

    export default {
        components: {
            DatePicker,
            InputNumber,
            Button
        },
        props: {
            activity: Object
        },
        data() {
            return {
                classes: [
                    'white--text',
                    'ma-5'
                ],
                selected_date: '',
                input_number_label: this.activity.base_rate_adult != null ? 'Adulte(s) (18 ans et +)' : 'Nombre de pers.',
                nb_adults: 1,
                nb_children: 0,
                total_price: this.activity.base_rate_adult != null ? this.activity.base_rate_adult : this.activity.fixed_rate
            }
        },
        computed: {
            onDemand() {
                return this.activity.fixed_rate != null ? 4 : null;
            },
            getRate() {
                return this.activity.base_rate_adult != null ? this.activity.base_rate_adult : this.activity.fixed_rate;
            }
        },
        methods: {
            setDate(selected_date) {
                this.selected_date = selected_date;
            },
            setNbAdults(nb_adults) {
                this.nb_adults = nb_adults;
                this.updateTotal();

                if (this.activity.base_rate_adult != null) {
                    this.setReducedRate();
                }
            },
            setNbChildren(nb_children) {
                this.nb_children = nb_children;
                this.updateTotal();
                
                if (this.activity.base_rate_adult != null) {
                    this.setReducedRate();
                }
            },
            updateTotal() { 
                if (this.activity.base_rate_adult != null) {
                    this.total_price = (this.activity.base_rate_adult * this.nb_adults) + 
                                       (this.activity.base_rate_child * this.nb_children);
                }
                else if (this.activity.fixed_rate != null) {
                    this.total_price = this.activity.fixed_rate * this.nb_adults;
                }
            },
            setReducedRate() {
                if (this.nb_children >= 3) {
                    this.total_price = (this.activity.base_rate_adult * this.nb_adults) + 
                                       (this.activity.base_rate_child * 2) + 
                                       ((this.activity.base_rate_child / 2) * (this.nb_children - 2));
                }
            }
        }
    }
</script>

<style>
    .price-card .v-card__text {
        min-height: 269px;
    }
    .price-card .price-card-title {
        word-break: unset;
        font-weight: 600;
    }
    .card-rate {
        font-weight: 600 !important;
    }
</style>