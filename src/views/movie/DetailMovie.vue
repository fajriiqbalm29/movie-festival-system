<template>
    <div class="container p-2 mx-auto my-10 max-w-7xl">
        <div class="flex flex-row flex-wrap py-4">
            <main role="main" class="w-full px-4 pt-1 sm:w-2/3 md:w-2/3">
                <h1 class="mb-2 text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-4xl">
                    RoboCrypto UI Kit
                </h1>
                <p class="text-gray-500">Build your next coin startup</p>
                <section id="gallery">
                    <img src="@/assets/images/gallery-1.png" alt="" class="w-full mt-6 rounded-2xl">
                    <div class="grid grid-cols-4 gap-4 mt-4">
                        <div class="overflow-hidden cursor-pointer rounded-2xl">
                            <img src="@/assets/images/gallery-2.png" class="w-full" alt="">
                        </div>
                        <div class="overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl">
                            <img src="@/assets/images/gallery-3.png" class="w-full" alt="">
                        </div>
                        <div class="overflow-hidden cursor-pointer rounded-2xl">
                            <img src="@/assets/images/gallery-4.png" class="w-full" alt="">
                        </div>
                        <div class="overflow-hidden cursor-pointer rounded-2xl">
                            <img src="@/assets/images/gallery-5.png" class="w-full" alt="">
                        </div>
                    </div>
                </section>
                <section class="" id="orders">
                    <h1 class="mt-8 mb-3 text-lg font-semibold">Description</h1>
                    <div class="text-gray-500">
                        <p class="pb-4">
                            {{ movieData.description }}
                        </p>
                    </div>
                </section>
            </main>
            <aside class="w-full px-4 sm:w-1/3 md:w-1/3">
                <div class="sticky top-0 w-full pt-4 md:mt-24 ">
                    <div class="p-6 border rounded-2xl">
                        <div class="mb-4">
                            <div class="flex mb-2">
                             
                                <div class="block mt-1 ml-4">
                                    <h3 class="font-semibold text-md">{{ movieData.title }}</h3>
                                    <p class="text-gray-400 text-md">{{ movieData.genre }}</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h1 class="mt-5 mb-3 font-semibold text-md">Great Features</h1>
                            <ul class="mb-6 text-gray-500">
                                <li class="mb-2 flex justify-between">
                                    Duration
                                    <span>{{ movieData.duration }}</span>
                                </li>
                                <li class="mb-2 flex justify-between">
                                    Artist
                                    <span>{{ movieData.artist }}</span>
                                </li>
                                <li class="mb-2 flex justify-between">
                                    Viewers
                                    <span>{{ movieData.views }}</span>
                                </li>
                                <li class="mb-2 flex justify-between">
                                    Voters
                                    <span>{{ movieData.votes }}</span>
                                </li>
                            </ul>
                        </div>
                        <button @click="votesMovies"
                            class="inline-flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-md md:px-10 hover:shadow">
                            Votes
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    </div>
</template>

<script lang="ts">
import * as movieHelper from "@/helper/API/movie"

export default ({
    data() {
        return {
            movieData: {}
        }
    },
    mounted() {
        this.getDetail()
        this.putViewed()
    },
    methods: {
        async getDetail(){
            await movieHelper.getMoviesDetail(this.$route.params.slug).then((resp)=>{
                this.movieData = resp                
            })
        },
        async putViewed(){
            await movieHelper.putMovieViews(this.$route.params.slug).then((resp)=>{
            })
        },
        async votesMovies(){
            await movieHelper.putMovieVotes(this.$route.params.slug).then((resp) => {
                this.getDetail()
            })
        }
    }
})
</script>
