<script lang="ts">
export default {
    name: 'Modal',
    props: {
        width: {
            type: String,
            required: true,
            default: 'lg:w-1/3'
        },
    },
    methods: {
        close() {
            this.$emit('close');
        },
    },
};
</script>

<template>
    <div class="modal-backdrop" @click="close">
        <div class="modal rounded-md w-3/5" :class="width">
            <header class="modal-header py-7 px-7">
                <slot name="header">
                    <!-- This is the default title! -->
                </slot>
            </header>

            <section class="modal-body py-7 px-7">
                <slot name="body">
                    <!-- This is the default body! -->
                </slot>
            </section>

            <footer class="modal-footer">
                <slot name="footer">
                    <!-- This is the default footer! -->
                </slot>
            </footer>
        </div>
    </div>
</template>

<style>
.modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
}

.modal {
    background: #FFFFFF;
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    z-index: 10;
}

.modal-header,
.modal-footer {
    padding: 15px;
    display: flex;
}

.modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    justify-content: center;
    align-items: center;
}

.modal-footer {
    border-top: 1px solid #eeeeee;
    flex-direction: column;
    justify-content: flex-end;
}

.modal-body {
    position: relative;
    padding: 20px 10px;
    justify-content: center;
    align-items: center;
}
</style>