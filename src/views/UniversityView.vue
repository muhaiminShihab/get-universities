<script>
import UniversityCard from '../components/UniversityCard.vue'
import UniversityLoading from '../components/UniversityLoading.vue'
import Universities from '../assets/universities.json'

export default {
    name: 'UniversityView',
    components: {
        UniversityCard,
        UniversityLoading
    },

    data() {
        return {
            allUniversities: Universities,
            universities: Universities,
            country: 'Bangladesh',
            university_count: 0,
            skeleton: true
        }
    },

    mounted() {
        // get universities
        this.getUniversities();
    },

    methods: {
        // get universities
        getUniversities() {
            // update skeleton
            this.skeleton = true;

            // if length is > 0 and ==0
            if (this.country.length > 0) {
                let jsonData = this.allUniversities;
                // update university
                this.universities = jsonData.filter(data => {
                    return data.country === this.country;
                });
            } 
            
            // else {
            //     // update university
            //     this.universities = this.allUniversities;
            // }

            // update university count
            this.university_count = this.universities.length;

            // update skeleton
            this.skeleton = false;
        }
    }
}
</script>

<template>
    <main>
        <div class="w-full md:max-w-4xl mx-auto mb-10 text-center">
            <label class="block text-2xl font-bold">Search Universities by Country</label>
            <input type="text" v-model="country" @keyup.prevent="getUniversities"
                class="block w-full border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300">
        </div>
        <span class="block text-2xl font-bold text-center">Total University {{ university_count }}</span>
        <div class="flex flex-wrap">
            <UniversityLoading v-if="skeleton === true || university_count === 0" v-for="number in 51" />
            <UniversityCard v-else v-for="university in universities" :university="university" />
        </div>
    </main>
</template>