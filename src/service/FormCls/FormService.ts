import { InjectionKey, Ref, reactive, ref } from 'vue'
import FormItemServiceCls from './FormItemService'
export default class FormServiceCls {
  static token: InjectionKey<FormServiceCls> = Symbol()
  static createForm = (initialValue?: { [key: string]: any }) => new FormServiceCls(initialValue)
  // 独立的 token
  uniqueToken: InjectionKey<FormServiceCls> = Symbol()
  // 表单项实例
  items: Ref<FormItemServiceCls[]> = ref([])
  model: { [key: string]: any } = reactive({})

  constructor(initialValue?: { [key: string]: any }) {
    if (!initialValue || Object.keys(initialValue).length === 0) return
    this.model = reactive({ ...initialValue })
  }
}
