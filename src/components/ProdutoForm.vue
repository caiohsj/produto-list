<template>
    <div>
        <form v-on:submit.prevent>
            <label>Marca</label>
            <input v-model="produto.marca">
            <label>Valor</label>
            <input v-model="produto.valor">
            <label>Quantidade</label>
            <input v-model="produto.quantidade">
            <button v-on:click="salvarProduto()">Salvar</button>
        </form>
    </div>
</template>

<script>
    import {Produto} from "../datamodel/Produto";

    export default {
        name: "ProdutoForm",
        data(){
            return {
                produto: new Produto()
            }
        },
        methods: {
            salvarProduto(){
                this.$emit("salvarProduto",this.produto)
                this.produto = new Produto()
            }
        }
    }
</script>

<style scoped>

</style>