<template>
    <div class="p-2">
        <div class="relative overflow-x-auto p-4 shadow-md sm:rounded-lg">
            <div class="py-4 px-2">
                <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal"
                    @click="modalOpen = true"
                    class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    type="button">
                    Tambah
                </button>
            </div>
            <DataTable :headers="headers" :items="movies" :items-per-page="10"  />
        </div>
    </div>
    <modal v-show="modalOpen" :width="'lg:w-2/6'">
        <template v-slot:header>
            <h4 class="font-bold text-xl">Add Movie</h4>
        </template>
        <template v-slot:body>
            <div>
                <form class="space-y-6" action="#">
                    <div class="grid grid-cols-2 gap-2">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">Title</label>
                            <input type="text" v-model="formMovie.title"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">Genre</label>
                            <input type="text" v-model="formMovie.genre"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">Artist</label>
                            <input type="text" v-model="formMovie.artist"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">Duration</label>
                            <input type="text" v-model="formMovie.duration"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required>
                        </div>
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">url</label>
                            <input type="text" v-model="formMovie.url"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required>
                        </div>
                    </div>
                    <div class="grid grid-cols-1">
                        <div>
                            <label class="block mb-2 text-sm font-medium text-gray-900`">Description</label>
                            <textarea type="text" v-model="formMovie.description"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-40"
                                placeholder="" required> </textarea>
                        </div>
                    </div>
                </form>
            </div>
        </template>

        <template v-slot:footer>
            <div class="grid grid-cols-2 gap-3">
                <button @click="modalOpen = false"
                    class="border rounded-lg text-white w-38 text-sm py-3 px-7 mt-4 text-center border-red-600 bg-red-600">Close</button>
                <BaseButton @click="postMovieData" :loading="isSubmitted" :type="'submit'"
                    :class="'border rounded-lg text-white w-38 text-sm py-3 px-7 mt-4 text-center bg-blue-600'">
                    <span class="text-base font-semibold">
                        Submit
                    </span>
                </BaseButton>
            </div>
        </template>
    </modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Modal from '@/components/Global/Modal.vue';
import * as movieHelper from "@/helper/API/movie"
import DataTable from "@/components/Global/DataTable.vue"
export default defineComponent({
    components: {
        Modal,
        DataTable
    },
    data() {
        return {
            modalOpen: false,
            isSubmitted: false,
            formMovie: {
                title: '',
                slug: '',
                description: '',
                duration: '',
                artist: '',
                genre: '',
                url: '',
            },
            movies: [],
            headers: ['Title', 'Artist', 'Genre', 'Description'],
            items: []
        }
    },
    mounted(){
        this.fetchMovieData()
    },
    methods:{
        async fetchMovieData(){
            await movieHelper.getMovies().then((resp: any)=>{
                console.log(resp.movies);
                
                this.movies = resp.movies
            })
        },
        async postMovieData(){
            this.isSubmitted = true
            this.formMovie.slug = this.formMovie.title.toLowerCase().replace(/\W+/g, '-')
            await movieHelper.postMovie(this.formMovie).then((resp)=>{
                this.fetchMovieData()
                this.modalOpen = false
            }).catch((err: Error)=>{
                console.log(err);
            }).finally(()=> this.isSubmitted = false)
        }
    }
})
</script>
