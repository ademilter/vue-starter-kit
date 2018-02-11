<i18n src="./i18n/index.json"></i18n>

<template lang="pug">
  .Home
    h1.title {{ $t('title') }}

    form.Form(@submit.prevent="submitForm")

      div.Form-item
        label.Form-item-label {{ $t('email') }}
        .control
          input.txt(
          name="email",
          data-vv-as="Eposta",
          v-model="form.email",
          v-validate="'required|email'",
          :class="{ 'is-danger': errors.has('email') }",
          type="email")
        p.Form-item-help.is-danger(
        v-show="errors.has('email')"
        ) {{ errors.first('email') }}

      div.Form-item
        label.Form-item-label {{ $t('message') }}
        .control
          textarea.txt(
          rows="3",
          name="message",
          data-vv-as="Mesaj",
          v-model="form.message",
          v-validate="'required'",
          :class="{ 'is-danger': errors.has('message') }")
        p.Form-item-help.is-danger(
        v-show="errors.has('message')"
        ) {{ errors.first('message') }}

      div.Form-item
        button.btn(
        type="submit",
        :disabled="$loading.isLoading('sending message')"
        ) {{ $t('send') }}

    .Notes
      template(v-if="$loading.isLoading('loading messages')")
        h5 Loading...
      template(v-else)
        .Item(
        v-for="message in messages",
        :key="message.id")
          p.email {{ message.email }}
          p.message {{ message.message }}
          time.date {{ message.humanTime }}

</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'Contact',
    data () {
      return {
        form: {
          email: '',
          message: ''
        }
      }
    },
    created () {
      this.$store.dispatch('Contact/getMessages')
    },
    computed: {
      ...mapGetters('Contact', [
        'messages'
      ])
    },
    methods: {
      submitForm () {
        this.$validator.validateAll().then((result) => {
          if (!result) return
          this.$store.dispatch('Contact/sendMessage', this.form)
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
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
