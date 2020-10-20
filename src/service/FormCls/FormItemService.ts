import { InjectionKey, inject, toRef, ref } from 'vue'
import FormServiceCls from './FormService'

interface IFormItemServiceProps {
  formToken?: InjectionKey<FormServiceCls>
  name: string
  initialValue?: string
}
export default class FormItemServiceCls {
  name: string
  form: FormServiceCls | undefined
  data = ref<any>(null)
  constructor(props: IFormItemServiceProps) {
    this.name = props.name
    this.form = props.formToken ? inject(props.formToken) : inject(FormServiceCls.token)
    if (!this.form) throw new Error('cannot find form')
    props.initialValue && (this.form.model[this.name] = props.initialValue) //FormItem重新赋值,覆盖Form的initialValue
    this.data = toRef(this.form.model, this.name) //将当前 FormItem model 变为 proxy
  }
}
