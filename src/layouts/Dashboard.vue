<script setup lang="ts">
import Navbar from "@/components/Dashboard/Navbar.vue";
import Sidebar from "@/components/Dashboard/Sidebar.vue";
</script>

<template>
    <div v-if="isPageRendered" class="font-poppins mx-auto max-w-screen hidden lg:block">
        <Sidebar />
        <div class="ml-[300px] px-[50px]">
            <div class="py-10 flex flex-col gap-[50px]">
                <Navbar />
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { mapState, } from 'pinia';
import { useUserStore } from '@/store/UserStore';

export default defineComponent({
    name: 'Dashboard',
    data(){
        return{
            isPageRendered : false
        }
    },
    computed: {
        ...mapState(useUserStore, ["getUser"]),
    },
    created() {
        if (this.getUser.role !== 'admin') {
            this.$router.push('/')
        }else{
            this.isPageRendered = true
        }
    },
});
</script>