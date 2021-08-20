<template>
    <div>
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
                <router-link class="navbar-brand" to="/">Ecommerce</router-link>
                <div class="ml-auto">
                    <div v-if="usuario.fotoURL">
                        <img :src="usuario.fotoURL" class="img-thumbnail profile-image" alt="" />
                        <router-link class="btn btn-primary my-2 my-sm-0" to="/carrinho">
                            <img src="https://pngimg.com/uploads/shopping_cart/shopping_cart_PNG38.png" width="50" alt />
                            <span class="badge badge-danger badge-pill">{{carrinho.length}}</span>
                        </router-link>
                    </div>
                    <router-link v-else class="btn btn-primary my-2 my-sm-0" to="/login">Entrar</router-link>
                </div>
            </nav>
        </div>
        <div class="page-container">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import { mapGetters } from "vuex";
    export default {
        name: "Base",
        computed: {
            ...mapGetters("conta", ["usuario"]),
            ...mapGetters("produto", ["carrinho"])
        }
    };
</script>
<style lang="">

</style>