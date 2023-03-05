<template>
  <div class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-7xl">
      <div class="z-10 px-5 pb-8 bg-white xl:pl-20 lg:pl-16 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <main class="mx-auto mt-10 max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-36">
          <div class="sm:text-center lg:text-left">
            <h1 class="text-3xl font-bold leading-normal tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
              <span class="block lg:mb-2">Watch High Quality &</span>
              <span class="block">Original Movie.</span>
            </h1>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <span class="block lg:mb-1"></span> Dolores quos deserunt voluptates enim eaque iusto fuga,
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-full">
                <a href="#"
                  class="flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-full hover:bg-indigo-700 md:py-2 md:text-lg md:px-10 hover:shadow">
                  Watch Now
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="w-full lg:w-3/4 lg:mt-8" src="@/assets/images/hero-image.png" alt="" />
    </div>
  </div>

  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">
      <div class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <a href="details.html">
            <div class="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" class="block w-full h-auto" src="@/assets/images/featured-2.png" />
            </div>
          </a>

          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <a class="font-semibold text-black no-underline hover:underline" href="#">
                The Minions
              </a>
            </h1>
            <span class="block text-sm font-light text-gray-500 no-underline">
              731 Votes
            </span>
          </header>
        </div>
      </div>
    </div>
  </div>

  <div class="container px-4 mx-auto my-16 md:px-12">
    <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Movies</h2>
    <div class="flex flex-wrap -mx-1 lg:-mx-4">

      <div v-if="totalMovie > 0" v-for="(item, index) in loadMoreMovie" :key="item" class="w-full px-1 my-1 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
        <div class="overflow-hidden border border-gray-200 rounded-xl">
          <router-link :to="`/movie/${movie_list[index].slug}`">
            <div class="m-4 overflow-hidden rounded-xl">
              <img alt="Placeholder" class="block w-full h-auto" src="@/assets/images/browse-1.png" />
            </div>
          </router-link>
          <header class="px-4 mb-4 leading-tight">
            <h1 class="text-lg">
              <a class="font-semibold text-black no-underline hover:underline" href="#">
                {{ movie_list[index].title }}
              </a>
            </h1>
            <div class="grid grid-cols-2">
              <span class="block text-sm font-light text-gray-500 no-underline">
                {{ movie_list[index].genre }}
              </span>
            </div>
          </header>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-14" data-aos="fade-up" data-aos-delay="400" v-if="movie_list.length > loadMoreMovie">
      <button @click="loadMoreMovie += 5"
        class="text-white w-40 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Load
        More</button>
    </div>
  </div>
</template>

<script lang="ts">
import * as movieHelper from "@/helper/API/movie"

export default ({
  data() {
    return {
      movie_list: [],
      shown_movie_list: [],
      loadMoreMovie: 5,
      totalMovie: 0,
    }
  },
  computed: {
    movies() {
      let movieList = this.movie_list;
      movieList = movieList.splice(0, this.totalMovie);
      this.shown_movie_list = this.shown_movie_list.concat(movieList)
      return this.shown_movie_list;
    }
  },
  mounted() {
    this.fetchMovieData()
  },
  methods: {
    loadMore() {
      this.totalMovie = this.loadMoreMovie + this.movies.length;
    },
    async fetchMovieData() {
      this.shown_movie_list = []
      await movieHelper.getMovies().then((resp: any) => {
        this.movie_list = resp.movies;
        this.totalMovie = resp.movies.length
      })
    }
  }
})
</script>
