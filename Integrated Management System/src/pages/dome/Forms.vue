<template>
  <div>
    <form class="form">
      <div class="form-box">
          <div class="form-line">
            <q-input
              v-model="form.Number"
              @blur="$v.form.Number.$touch"
              @keyup.enter="submit"
              :error="$v.form.Number.$error"
              float-label="Number"
            />
            <q-input v-model="form.email"
              @blur="$v.form.email.$touch"
              @keyup.enter="submit"
              :error="$v.form.email.$error"
             type="email" float-label="Email" suffix="@gmail.com" />
          </div>
          <div class="form-line">
            <q-input
              v-model="form.phone"
              @blur="$v.form.phone.$touch"
              @keyup.enter="submit"
              :error="$v.form.phone.$error"
              float-label="Phone"
            />
          </div>
      </div>
      <q-btn class="form-btn" color="primary" @click="submit">Submit</q-btn>
    </form>
  </div>
</template>

<style>
.form-box{
  display: flex;
  justify-content:space-around;
}
.form-line{
  flex: 1;
  margin: 0 20px;
}
.form-btn{
  margin-top: 30px;
  left: 50%;
  transform: translateX(-50%);
}
</style>

<script>
import { required, email, minLength, maxLength, sameAs} from 'vuelidate/lib/validators'
import { phone, number } from '../../utils/MyVuelidate'
export default {
  name: 'Forms',
  data () {
    return {
      form: {
        email: '',
        username:'',
        phone: '',
        Number: ''
      }
    }
  },
  computed: {

  },
  validations: {
    form: {
      email: { required, email  },
      Number: {
        required,
        number
      },
      phone: {
        required,
        phone
      },
    }
  },
  mounted () {

  },
  methods: {
    submit () {
      this.$v.form.$touch()
      if (this.$v.form.Number.$error) {
          this.$q.notify('请重新填写号码！')
          return
        }
      if (this.$v.form.phone.$error) {
          this.$q.notify('请重新填写电话号码！')
          return
      }
      if (this.$v.form.email.$error) {
          this.$q.notify('请重新填写邮箱！')
          return
      }
    }
  }
}
</script>
