<template>
    <div>
        <label for="id" class="text-caption">{{ label }}</label>
        <v-text-field
            v-model="numberValue"
            hide-details
            single-line
            type="number"
            :id="id"
            @input="selectNb"
            :min="min"
            :max="max"
        />
        <p v-if="max" class="text-caption">Le nombre de participants est limité à {{ max }} pers.</p>
    </div>
</template>

<script>
    export default {
        props: {
            label: String,
            id: String,
            default_value: Number,
            min: Number,
            max: Number
        },
        data() {
            return {
                numberValue: this.default_value
            }
        },
        methods: {
            selectNb(nb) {
                this.numberValue = nb;
                this.$emit('getNumber', this.numberValue);
            }
        }
    }
</script>

<style>
    .v-text-field {
        padding-top: 0;
        margin-top: 0;
    }
</style>