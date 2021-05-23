<template>
  <div>
    <PageTitle icon="fa fa-envelope-open" main="Avisos" sub="Mandar avisos" />
    <div class="box">
      <form action="" method="POST">
        <div class="entradas">
          <label for="">Professor: </label>
          <input class="input is-primary" type="text" />
        </div>

        <div class="entradas">
          <label for="">Matéria: </label>
          <input class="input is-primary" type="text" /><br /><br />
          <div class="select is-primary">
            <select name="turma" id="turma">
              <option value="selecione">Selecione uma turma</option>
              <option value="all">Para todos</option>
              <option value="tsiv1">TSIV1</option>
              <option value="tsiv2">TSIV2</option>
              <option value="tsiv3">TSIV3</option>
              <option value="tsiv4">TSIV4</option>
              <option value="tsiv5">TSIV5</option>
              <option value="tsin1">TSIN1</option>
              <option value="tsin2">TSIN2</option>
              <option value="tsin3">TSIN3</option>
              <option value="tsin4">TSIN4</option>
              <option value="tsin5">TSIN5</option>
            </select>
          </div>
        </div>
        <div class="entradas1">
          <label for="">Mensagem: </label><br />
          <textarea
            class="textarea is-primary"
            placeholder="Digite aqui..."
            rows="10"
            cols="40"
          ></textarea>
        </div>
        <div>
          <button class="button is-primary">Enviar</button>
        </div>
      </form>
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
};
</script>
<style scoped>
.entradas {
  width: 250px;
  margin-bottom: 5px;
}
.entradas1 {
  width: 400px;
  margin-bottom: 5px;
}
</style>