import estado from './estado'
import * as getters from './getters'
import * as mutacoes from './mutacoes'
import * as acoes from './acoes'

export default {
    namespaced: true,
    getters,
    mutacoes,
    acoes,
    estado
}