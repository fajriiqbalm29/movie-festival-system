<script setup lang="ts">
import NavbarUser from "@/components/NavbarUser.vue";
</script>

<template>
    <div class="font-poppins mx-auto max-w-screen hidden lg:block">
        <NavbarUser />
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Default',
});
</script>