import { inject, toRef } from 'vue'
import FormServiceFunc, { token } from './FormService'
import { InjectionToken } from '../../types/service'

interface IFormItemServiceProps {
  formToken?: InjectionToken<typeof FormServiceFunc>
  name: string
  initialValue?: string
}

const FormItemServiceFunc = (props: IFormItemServiceProps) => {
  const { name, formToken } = props
  const form = formToken ? inject(formToken) : inject(token)
  if (!form) throw new Error('cannot find form')
  const { model } = form
  props.initialValue && (model[name] = props.initialValue) //覆写 Form 的 initialValue
  const data = toRef(model, name) //将当前 FormItem model name字段变为 ref
  return {
    data
  }
}
export default FormItemServiceFunc
