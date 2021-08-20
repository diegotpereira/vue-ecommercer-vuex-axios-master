<template>
    <div class="container-fluid">
        <div class="row d-flex justify-content-center">
            <div class="col-6">
                <div class="card text-left shadow-md">
                    <img class="card-img-top" :src="produto.imageUrl" alt />
                </div>
            </div>
            <div class="col-6 text-left text-justify">
                <div class="display-3">{{ produto.nome}}</div>
                <p class="lead text-justify">{{ produto.content}}</p>
           
                <div>
                        <p class="h3">Preço</p>
                        <p class="h2">${{produto.preco}}</p>
                </div>
                <AddNoCarrinho :produto="produto" v-if="usuario.uid"/>
             </div>    
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from "vuex";
import AddNoCarrinho from "../../components/detalhe/AddNoCarrinho.vue"
export default {
    data() {
        return {
            estaSuporteCartao: false,
        }
    },

    computed: {
        ...mapGetters("conta", ["usuario"]),
        ...mapGetters("produto", ["produto"])
    },

    components: { AddNoCarrinho},

    methods: {
        ...mapActions("produto", ["produtoDetalhes"]),
    },
    mounted() {
        this.produtoDetalhes(this.$route.params.idProduto);
    }
};
</script>
<style lang="">
    
</style>