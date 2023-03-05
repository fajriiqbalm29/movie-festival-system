<template>
    <div class="flex flex-col">
        <div class="my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table class="min-w-full divide-y divide-gray-200">
                        <thead class="bg-gray-50">
                            <tr>
                                <template v-for="(header, index) in headers" :key="index">
                                    <th scope="col"
                                        class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        {{ header.text }}
                                    </th>
                                </template>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200">
                            <tr v-for="(item, index) in displayedItems" :key="index">
                                <template v-for="(value, key) in item">
                                    <td class="px-6 py-4 whitespace-nowrap">
                                        <div class="text-sm text-gray-900" v-if="key !== 'id'">{{ value }}</div>
                                    </td>
                                </template>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <nav class="flex items-center justify-end" aria-label="Table navigation">
            <ul class="inline-flex items-center -space-x-px">
                <div class="p-6 rounded-lg">
                    <span class="mx-2 px-2 py-1 border rounded-lg cursor-pointer" @click="previousPage"
                        :class="{ 'bg-gray-200': currentPage === 1 }">&lt;</span>
                    <template v-for="pageNumber in totalPages">
                        <span class="mx-2 px-2 py-1 border rounded-lg cursor-pointer" @click="setCurrentPage(pageNumber)"
                            :class="{ 'bg-blue-600 text-white': currentPage === pageNumber }">{{ pageNumber }}</span>
                    </template>
                    <span class="mx-2 px-2 py-1 border rounded-lg cursor-pointer" @click="nextPage"
                        :class="{ 'bg-gray-200': currentPage === totalPages }">&gt;</span>
                </div>
            </ul>
        </nav>
       
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch } from 'vue'
interface Item {
    [key: string]: string | number;
}

interface Header {
    text: string;
    value: string;
}

export default defineComponent({
    name: 'DataTable',
    props: {
        headers: {
            type: Array as PropType<Header[]>,
            required: true
        },
        items: {
            type: Array as PropType<Item[]>,
            required: true
        },
        itemsPerPage: {
            type: Number,
            default: 10,
        },
    },
    setup(props) {
        const currentPage = ref(1)

        const displayedItems = computed(() => {
            const start = (currentPage.value - 1) * props.itemsPerPage;
            const end = start + props.itemsPerPage;
            return props.items.slice(start, end).map((item: Item) => {
                const transformedItem: any = {};
                for (const header of props.headers) {
                    transformedItem[header.text] = item[header.value];
                }
                return transformedItem;
            });
        });

        const totalPages = computed(() => {
            return Math.ceil(props.items.length / props.itemsPerPage)
        })

        function setCurrentPage(pageNumber: number): void {
            currentPage.value = pageNumber
        }

        function previousPage(): void {
            if (currentPage.value > 1) {
                currentPage.value -= 1
            }
        }

        function nextPage(): void {
            if (currentPage.value < totalPages.value) {
                currentPage.value += 1
            }
        }
        watch(currentPage, () => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })

        return {
            currentPage,
            displayedItems,
            totalPages,
            setCurrentPage,
            previousPage,
            nextPage,
        }
    },
})
</script>
