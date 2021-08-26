<template>
   <div class="card mb-4 shadow-sm">
        <img :src="produto.imageUrl" class="card-img-top product-image" />
        <div class="card-body">
            <h5 class="card-title text-left">{{ produto.nome}}</h5>
            <div class="row">
                <router-link type="button" class="btn btn-primary btn-lg" :to="'/detalhes/' + produto.id">Detalhes</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "ProdutoCard",
    props: ["produto"]
};
</script>
<style lang="">
   
</style>