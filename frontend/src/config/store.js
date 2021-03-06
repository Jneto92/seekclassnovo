import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isMenuVisible: true,
        user: {
            //name: 'Neto Lima',
            //email: 'netolima@gmail.com'
            name: 'Rosana Soares',
            email: 'rosana.soares@estudante.ifb.edu.br'
        }

    },
    mutations: {
        toggleMenu(state, isVisible){
            if(isVisible === undefined) {
                state.isMenuVisible = !state.isMenuVisible
            }else{
                state.isMenuVisible = isVisible
            }
            
        }
    }
})