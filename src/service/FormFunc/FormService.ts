import { Ref, reactive, ref } from 'vue'
import FormItemServiceFunc from './FormItemService'
import { InjectionToken } from '../../types/service'

export const token: InjectionToken<typeof FormServiceFunc> = Symbol()

const FormServiceFunc = (initialValue?: { [key: string]: any }) => {
  const isValidInitialValue = initialValue && Object.keys(initialValue).length !== 0

  const uniqueToken: InjectionToken<typeof FormServiceFunc> = Symbol()
  let model: { [key: string]: any } = reactive({})
  const items: Ref<typeof FormItemServiceFunc[]> = ref([])
  if (isValidInitialValue) model = reactive({ ...initialValue })

  return {
    model,
    uniqueToken,
    items
  }
}
export default FormServiceFunc
