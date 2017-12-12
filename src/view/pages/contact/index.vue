<i18n>
  {
  "en": {
  "title": "Contact"
  },
  "tr": {
  "title": "İletişim"
  }
  }
</i18n>

<template lang="pug">
  .Home
    h1.title {{ $t('title') }}

    form.Form(@submit.prevent="submitForm")

      div.Form-item
        label.Form-item-label Eposta
        .control
          input.txt(name="email",
          data-vv-as="Eposta",
          v-model="email",
          v-validate="'required|email'",
          :class="{ 'is-danger': errors.has('email') }",
          type="email")
        p.Form-item-help.is-danger(v-show="errors.has('email')") {{ errors.first('email') }}

      div.Form-item
        label.Form-item-label Mesaj
        .control
          textarea.txt(rows="3",
          name="message",
          data-vv-as="Mesaj",
          v-model="message",
          v-validate="'required'",
          :class="{ 'is-danger': errors.has('message') }")
        p.Form-item-help.is-danger(v-show="errors.has('message')") {{ errors.first('message') }}

      div.Form-item
        button.btn(type="submit") Gönder

</template>

<script>
  export default {
    name: 'Home',
    data () {
      return {
        email: '',
        message: ''
      }
    },
    methods: {
      submitForm (e) {
        this.$validator.validateAll().then((result) => {
          // hata varsa kızıyoruz
          if (!result) return

          // hata yoksa ajax post!
          console.log('her şey oke!')
        })
      }
    }
  }
</script>

<style lang="scss">
  @import "../../../stylesheet/config/variables";

  .Home {
    padding: 50px;
  }

  .Form {
    margin-top: 30px;
    max-width: 500px;
  }
</style>
