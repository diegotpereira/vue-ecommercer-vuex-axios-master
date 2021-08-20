<template>
    <div class="row">
        <div class="col-3">
            <label class="sr-only" for="inlineFormInputName2">Quantidade</label>
            <input type="number" v-model="quantidade" class="form-control mb-2 mr-sm-2" />
        </div>
        <button v-if="!estaSuporteCartao" @click.stop="addCarrinho({produto, quantidade})" type="button" class="btn btn-primary btn-lg btn-block col-9">Adicionar no Carrinho</button>
        <button v-else @click.stop="removeCarrinho(produto.id)" type="button" class="btn btn-primary btn-lg btn-block col-9">Remover do carrinho</button>
    </div>
</template>
<script>
import {mapActions, mapState} from "vuex"
export default {
    props: ["produto"],
    data() {
        return {
            estaSuporteCartao: false,
            quantidade: 1,
        };
    },

    computed: {
        ...mapState("produto", ["carrinho"]),
    },
    methods: {
        ...mapActions("produto", ["addCarrinho", "removeCarrinho"]),
        estaNoCarrinho(id) {
            for(let index = 0; index < this.carrinho.length; index++) {
                const elemento = this.carrinho[index];
                if (elemento.id === id) {
                    return true;
                }
            }

            return false;
        },
    },

    watch: {
        produto(val) {
            this.estaSuporteCartao = this.estaNoCarrinho(val.id);
        },
        carrinho() {
            this.estaSuporteCartao = this.estaNoCarrinho(this.produto.id);
        },

        quantidade(val) {
            if (val <= 0) {
                this.quantidade = 1;
            }
        },
    },
};
</script>
<style lang="">
    
</style>