<template>
  <q-page class="container" padding>
    <q-form
      v-on:keyup.enter="cadastrar"
      :model="formulario"
      ref="formulario"
      class="q-gutter-md bloco"
    >
      <q-input
        lazy-rules
        class="email"
        filled
        type="email"
        v-model="formulario.email"
        label="E-mail"
        :rules="[val => (val && val.length != null) || 'E-mail inválido!']"
      />
      <q-input
        lazy-rules
        filled
        class="password"
        :type="isPwd ? 'password' : 'text'"
        v-model="formulario.password"
        label="Senha"
        :rules="[
          val =>
            (val && val.length >= 6) ||
            'A senha deve conter pelo menos ' + 6 + ' caracteres!'
        ]"
      >
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
      </q-input>
      <br />
      <q-btn
        type="submit"
        class="cadastrar"
        color="black"
        label="cadastrar"
        :loading="loading"
        @click.prevent="cadastrar"
      />
    </q-form>
  </q-page>
</template>
<script>
export default {
  name: "Cadastro",
  data: () => ({
    formulario: {},
    isPwd: true,
    loading: false
  }),
  methods: {
    async cadastrar() {
      console.log(this.formulario);
      this.loading = true;
      try {
        const response = await this.$store.dispatch(
          "tasks/cadastrar",
          this.formulario
        );
        if (this.formulario.password == null && this.formulario.email == null) {
          this.$q.notify({
            type: "negative",
            message: `Por favor preencha o formulário!`
          });
        } else {
          this.$q.notify({
            type: "positive",
            message: "Cadastro efetuado com sucesso!"
          });
        }
        console.log(response.data);
        this.loading = false;
      } catch (error) {
        this.$q.notify({
          type: "negative",
          message: `Credencias incorretas, por favor tente novamente!`
        });
        console.log("Deu erro");
        this.loading = false;
      }
    }
  }
};
</script>
<style scoped>
.bloco {
  margin-left: auto;
  margin-right: auto;
  max-height: 50%;
  max-width: 20%;
  margin-top: 10%;
}
</style>
