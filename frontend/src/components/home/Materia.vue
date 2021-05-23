<template>
    <div class="materia">
        <div class="box">
            <p><span class="perfil-nome"><b>Matéria:</b> {{nome}}</span></p>
            <p><span class="perfil-email"><b>Professor:</b> {{professor}}</span></p>
        </div>
        
    </div>    
</template>
<script>
export default {
    name: 'Materia',
    props: 
        ['nome', 'professor']
    
    
}
</script>
<style scoped>
    .box{
        width: 200px;
        height: 90px;
        font-size: 10px;
    }

</style>