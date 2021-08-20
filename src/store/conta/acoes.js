import router from '../../router'
import Axios from 'axios'

export function login({ commit }) {
    let url = 'https://randomuser.me/api/';
    Axios.get(url).then(function(response) {
            let usuarioDados = {
                nomeExibicao: response.data.results[0].nome,
                email: response.data.results[0].email,
                fotoURL: response.data.results[0].foto.miniatura,
                uid: response.data.results[0].login.uuid
            }

            commit("setUsuarioDados", usuarioDados)
            router.push('/')
        })
        .catch(function(error) {
            console.log(error)
        });
}