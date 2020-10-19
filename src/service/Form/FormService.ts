import { InjectionKey, Ref, reactive, ref } from 'vue'
import FormItemService from './FormItemService'

export default class FormService {
  static token: InjectionKey<FormService> = Symbol()
  static createForm(initialValue?: { [key: string]: any }) {
    return new FormService(initialValue)
  }
  // 独立的 token
  uniqueToken: InjectionKey<FormService> = Symbol()
  // 初始值
  initialValue: { [key: string]: any } = reactive({})

  // 表单项实例
  items: Ref<FormItemService[]> = ref([])
  model: { [key: string]: any } = reactive({})

  constructor(initialValue?: { [key: string]: any }) {
    if (!initialValue) return
    this.model = {
      ...initialValue
    }
  }
}
