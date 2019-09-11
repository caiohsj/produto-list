<template>
  <div class="about">
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

  export default {
    name: "ProdutosResource",
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
        this.$http.get("https://ecommerce-cpw.herokuapp.com/rest/product/list/8/1")
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