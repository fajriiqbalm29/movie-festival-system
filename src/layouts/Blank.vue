<template>
    <div class="mx-auto max-w-screen min-h-screen md:px-10 px-3">
        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Blank',
});
</script>