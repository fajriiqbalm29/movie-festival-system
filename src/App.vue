<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
</style>

<template>
    <component :is="layout">
        <router-view />
    </component>
</template>

<script lang="ts" >
import { computed, defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    name: 'App',
    setup() {
        const route = useRoute();
        /**
         * Detect Layout Change
         */
        const layout = computed(() => {
            const layout = route?.meta?.layout;

            if (layout) {
                return `${layout}`;
            }
            return 'div';
        });
        return {
            layout,
        };
    },
});
</script>