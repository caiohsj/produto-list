<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Marca</th>
                    <th>Valor</th>
                    <th>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="produto in produtos" v-bind:key="produto.id">
                    <td>
                        {{produto.id}}
                    </td>
                    <td>
                        {{produto.marca}}
                    </td>
                    <td>
                        {{produto.valor}}
                    </td>
                    <td>
                        {{produto.quantidade}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "ProdutoList",
        data(){
            return {

            }
        },
        props: [
            "produtos"
        ]
    }
</script>

<style scoped>

</style>