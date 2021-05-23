<template>
    <div>
        <PageTitle icon="fa fa-commenting" main="Notificações" sub="Todas as notificações" />
        <div class="box">
            <b>Selecionar turmas: </b><br>
            Todos: <input type="checkbox"> <br/>
            TSIV1: <input type="checkbox"> <br/>
            TSIV2: <input type="checkbox"> <br/>
            TSIV3: <input type="checkbox">
        </div>
    </div>
</template>
<script>
import PageTitle from "../template/PageTitle";
export default {
    
    name: "PerfilPage",
    components: {
    PageTitle,
  },
}
</script>
<style scoped>

</style>