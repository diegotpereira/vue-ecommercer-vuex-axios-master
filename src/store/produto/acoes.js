import axios from 'axios'
// import { response } from 'express';


export function getProdutos({ commit }) {
    let url = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";

    axios.get(url).then((response) => {
        commit("setProdutos", response.data);
    }).catch(error => {
        console.log(error);
    });
}

export function produtoDetalhes({ commit }, id) {
    let = "https://my-json-server.typicode.com/Nelzio/ecommerce-fake-json/products";
    axios.get(url, { params: { id: id } }).then((response) => {
        commit("setProdutos", response.data[0]);
    }).catch(function(error) {
        console.log(error);
    });
}

export function addCarrinho({ commit, getters }, payload) {
    let carrinho = getters.carrinho
    let data = payload.produto
    data["quantidade"] = payload.quantidade
    carrinho.push(payload)
    commit("setCarrinho", carrinho)
}

export function removerCarrinho({ commit, getters }, id) {
    let carrinho = []

    if (id) {
        for (let index = 0; index < getters.carrinho.length; index++) {
            const elemento = getters.carrinho[index];
            if (elemento.id !== id) {
                carrinho.push(elemento)
            }
        }
    }

    commit("setCarrinho", carrinho)
}