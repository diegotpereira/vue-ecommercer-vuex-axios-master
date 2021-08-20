<template>
    <div class="container" style="padding: 30px">
        <div class="row d-flex justify-content-center">
            <div class="list-group col-8">
                <a v-for="item in carrinho" :key="item.id" href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <img :src="item.imageUrl" alt height="60" width="60"/>
                    <p class="h4">{{ item.nome}}</p>
                    <div class="row">
                        <div class="mr-2">
                            <p>Preço Unidade</p>
                            <p>${{item.preco}}</p>
                        </div>
                        <div class="mr-2">
                            <p>Preço Total</p>
                            <p>${{ item.preco * item.quantidade }}</p>
                        </div>
                        <div>
                            <p>Quantidade</p>
                            <p>{{ item.quantidade}}</p>
                        </div>
                    </div>
                </a>   
                <div class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                    <p class="h4">Total</p>
                    <p>${{ precoTotal}}</p>
                </div>
            </div>
            <button @click="conferir()" type="button" class="btn btn-primary btn-lg btn-block mt-4">
                Conferir
            </button>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions} from "vuex";
export default {
    name: "Carrinho",
    data() {
        return {
            precoTotal: 0,
        };
    },
    computed: {
        ...mapGetters("produto", ["carrinho"]),
        ...mapGetters("conta", ["usuario"]),
    },

    methods: {
        ...mapActions("produto", ["removerCarrinho"]),
        calPreco() {
            this.carrinho.forEach((elemento) => {
                this.precoTotal += elemento.preco * elemento.quantidade;
            });
        },

        conferir() {
            const vm = this;
            setTimeout(()=> {
                vm.removerCarrinho();
                alert("Compra bem-sucedida!");
                vm.$router.push("/")
            }, 2000);
        },
    },
    mounted() {
        this.calPreco();
    },
};
</script>
<style lang="">
    
</style>