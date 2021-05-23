import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/home/Home'
import PerfilPages from '../components/admin/PerfilPages'
import TSIV1 from '../components/home/TSIV1'
import TSIN1 from '../components/home/TSIN1'
import Avisos from '../components/home/Avisos'
import Notificacao from '../components/home/Notificacoes'
import Professores from '../components/home/Professor'

Vue.use(VueRouter)

const routes = [{
    name: 'home',
    path: '/',
    component: Home
},{
    name: 'perfilPages',
    path: '/perfil',
    component: PerfilPages
},{
    name: 'tsiv1',
    path: '/tsiv1',
    component: TSIV1
},
{
    name: 'tsin1',
    path: '/tsin1',
    component: TSIN1 
},{
    name: 'aviso',
    path: '/avisos',
    component: Avisos
},{
    name: 'notif',
    path: '/notificacoes',
    component: Notificacao
},{
    name: 'professor',
    path: '/professores',
    component: Professores
}]

export default  new VueRouter({
    mode: 'history',
    routes
})

