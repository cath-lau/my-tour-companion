<template>
    <Datepicker placeholder="Sélectionnez une date" 
                :disabled-dates="getDisabledDates().disabledDates"
                :language="fr"
                @selected="selectDate">
    </Datepicker>
  </template>
   
  <script>
    import Datepicker from 'vuejs-datepicker';
    import { fr } from 'vuejs-datepicker/dist/locale'

    export default {
        components: {
            Datepicker
        },
        props: {
            activity: Object
        },
        data() {
            return {
                fr: fr
            }
        },
        created() {
            this.getDisabledDates();
        },
        methods: {
            getDisabledDates() {
                var week = [0, 1, 2, 3, 4, 5, 6];
                const today = new Date();
                const yesterday = new Date(today);
                yesterday.setDate(yesterday.getDate() - 1);

                var state = {
                    disabledDates: {
                        to: yesterday,
                        days: []
                    }
                }

                state.disabledDates.days = week.filter(day => !this.activity.days.includes(day));

                return state;
            },
            selectDate(selected_date) {
                this.$emit('getSelectedDate', selected_date);
            }
        }
    };
  </script>

<style>
    .vdp-datepicker input {
        padding: 0.75em 0.5em;
        font-size: 100%;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
    }
</style>