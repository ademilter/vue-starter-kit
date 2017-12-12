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

    .Notes
      .Item(v-for="note in notes")
        .email {{ note.email }}
        .message {{ note.message }}

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'Home',
    data () {
      return {
        email: '',
        message: ''
      }
    },
    created () {
      this.getNotes()
    },
    computed: {
      ...mapGetters('Contact', [
        'notes'
      ]),
      newMessage () {
        return {
          email: this.email,
          message: this.message
        }
      }
    },
    methods: {
      ...mapActions('Contact', [
        'getNotes',
        'sendMessage'
      ]),
      submitForm (e) {
        this.$validator.validateAll().then((result) => {
          // hata varsa kızıyoruz
          if (!result) return

          // hata yoksa ajax post!
          this.sendMessage(this.newMessage)
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

  .Notes {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;

    .Item {
      border: 1px solid #ddd;
      padding: 20px;
      min-width: 300px;
      margin-right: 20px;
      width: 20%;
      margin-bottom: 20px;
    }
  }
</style>
