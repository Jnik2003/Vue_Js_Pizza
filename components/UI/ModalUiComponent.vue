<template>
    <div class="modal" @click="closeModal">
        <div class="modal__content" @click.stop>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ModalUiComponent',
        props:{
            isModalVisible:{
                type: Boolean,
                default: false,
            }
        },
        methods:{
            closeModal(){
                this.$emit('closeModal')
            }
        }
    }
</script>

<style lang="scss" scoped>
.modal{
    width: 100%;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    display: flex;  
    z-index: 1;  
}
.modal__content{
    margin: auto;
    background-color: white;
    border-radius: 10px;
    min-height: 500px;
    min-width: 300px;
    max-width: 1080px;
    padding: 20px 50px;
    display: flex;
}
</style>