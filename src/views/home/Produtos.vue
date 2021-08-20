<template>
    <div>
        <div style="padding: 25px">
            <div class="container">
                <div class="row">
                    <div class="col-md-4" v-for="produto in produtos" :key="produto.id">
                        <ProdutoCard :produto="produto" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters} from "vuex"
import ProdutoCard from "../../components/produto/ProdutoCard";
export default {
    computed: {
        ...mapGetters("produto", ["produtos"]),
    },

    components: {ProdutoCard},

    methods: {
        ...mapActions("produto", ["getProdutos", "addCarrinho", "removeCarrinho"]),
    },

    mounted() {
        this.getProdutos();
    }
};
</script>
<style lang="">
    
</style>