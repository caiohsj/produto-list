<template>
    <div>
        <produto-form @salvarProduto="salvar"></produto-form>
        <produto-list v-bind:produtos="produtos"></produto-list>
    </div>
</template>

<script>
    import ProdutoForm from "../components/ProdutoForm";
    import ProdutoList from "../components/ProdutoList";
    import {Produto} from "../datamodel/Produto";
    export default {
        name: "Produtos",
        data(){
            return {
                produtos:[
                    new Produto(1,"Samsung",899,3)
                ]
            }
        },
        components: {
            ProdutoForm,
            ProdutoList
        },
        methods: {
            salvar(produto){
                produto.id = this.produtos.length+1
                this.produtos.push(produto)
            }
        }
    }
</script>

<style scoped>

</style>