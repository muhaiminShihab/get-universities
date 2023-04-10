<script>
import University from '../components/UniversityCard.vue'

export default {
    name: 'UniversityView',
    components: {
        University
    },

    data() {
        return {
            universities: [],
            country: 'Bangladesh'
        }
    },

    mounted() {
        // get universities
        this.getUniversities();
    },

    watch: {
        // get universities by country
        country() {
            this.getUniversities();
        }
    },

    methods: {
        // get universities
        getUniversities() {
            fetch(`http://universities.hipolabs.com/search?country=${ this.country }`)
                .then(res => res.json())
                .then(data => this.universities = data);
        }
    }
}
</script>

<template>
    <main>
        <!-- <h4>Universities Page</h4> -->
        <div class="w-full md:max-w-4xl mx-auto mb-10 text-center">
            <label for="price" class="block text-2xl font-bold">Search Universities by Country</label>
            <input type="text" id="university" v-model="country"
                class="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300">
        </div>
        <div class="flex flex-wrap">
            <University v-for="university in universities" :university="university" />
        </div>
    </main>
</template>