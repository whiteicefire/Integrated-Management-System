import { helpers } from 'vuelidate/lib/validators'

export var phone = helpers.regex('phoneNumber', /^1(3|4|5|7|8)\d{9}$/);//电话号

export var number = helpers.regex('phoneNumber', /^[0-9]+$/);//纯数字