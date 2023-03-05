<template>
    <!-- Topbar -->
    <div class="flex justify-between items-center">
        <input type="text" class="top-search" placeholder="Search movie, cast, genre" />
        <div class="flex items-center gap-4">
            <span class="text-black text-sm font-medium">Welcome, Granola Sky</span>
            <!-- user avatar -->
            <div class="collapsible-dropdown flex flex-col gap-2 relative" @click="dropDownOpen = !dropDownOpen">
                <a href="#!" class="outline outline-2 outline-gray-2 p-[5px] rounded-full w-[60px] dropdown-button"
                    data-target="#dropdown-button">
                    <img src="@/assets/images/avatar.png" class="rounded-full object-cover w-full" alt="" />
                </a>
                <div  v-if="dropDownOpen"  class="bg-white rounded-2xl text-black font-medium flex flex-col gap-1 absolute z-[999] right-0 top-[80px] min-w-[180px] overflow-hidden"
                    id="dropdown-target">
                    <a href="#!" class="transition-all hover:bg-sky-100 p-4">Dashboard</a>
                    <a href="#!" class="transition-all hover:bg-sky-100 p-4">Settings</a>
                    <a @click="logout" class="transition-all hover:bg-sky-100 p-4">Sign Out</a>
                </div>
            </div>
        </div>
    </div>
    <!-- /Topbar -->
</template>

<script lang="ts">
import { inject, defineComponent } from 'vue'

export default defineComponent({
    data() {
        return {
            dropDownOpen: false
        }
    },
    setup(){
        const logout = inject('logout')

        return {
            logout
        }
    }
})
</script>
