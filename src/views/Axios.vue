<template>
    <div>
        <h2>Produtos</h2>
        <table>
            <thead>
            <tr>
                <th>
                    ID
                </th>
                <th>
                    Descrição
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="prod in produtos" v-bind:key="prod.id">
                <td>
                    {{prod.id}}
                </td>
                <td>
                    {{prod.description}}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import produtoService from '../services/produto'

    export default {
        name: "Axios",
        data(){
            return {
                produtos: []
            }
        },
        mounted: function() {
            this.carregarProdutos()
        },
        methods: {
            carregarProdutos(){
                produtoService.carregar()
                    .then(response => {
                        this.produtos = response.data
                    })
                    .catch(response => {
                        alert(response.data)
                    })
            }
        }
    }
</script>

<style scoped>

</style>