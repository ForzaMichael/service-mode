import { InjectionKey, inject, toRef, ref } from 'vue'
import FormService from './FormService'

interface IFormItemServiceProps {
  formToken?: InjectionKey<FormService>
  name: string
  initialValue?: Object
}
export default class FormItemService {
  name: string
  form: FormService | undefined
  data = ref<any>(null)
  constructor(props: IFormItemServiceProps) {
    this.name = props.name
    this.form = props.formToken ? inject(props.formToken) : inject(FormService.token)
    if (!this.form) {
      throw new Error('cannot find form')
    }
    this.form.model[this.name] = props.initialValue
    this.data = toRef(this.form.model, this.name)
  }
}
