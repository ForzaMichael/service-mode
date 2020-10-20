import { defineComponent, provide, PropType, renderSlot, watch } from 'vue'
import FormServiceFunc, { token as FormServiceFuncToken } from '../service/FormFunc/FormService'
export default defineComponent({
  name: 'FormFunc',
  props: {
    initialValue: {
      type: Object as PropType<{ [key: string]: any }>
    },
    form: {
      type: Object as PropType<ReturnType<typeof FormServiceFunc>>
    },
    onFieldChange: {
      type: Function
    }
  },
  setup(props, { slots }) {
    const formService = props.form || FormServiceFunc(props.initialValue)
    const { model, uniqueToken: FormServiceFuncUniqueToken } = formService
    provide(FormServiceFuncToken, formService) //provide 最近的form,inject(FormService.token)便可
    provide(FormServiceFuncUniqueToken, formService) //provide 特定的form,inject(formService1.uniqueToken)便可
    watch(model, val => props.onFieldChange?.(val))
    return () => <div>{renderSlot(slots, 'default')}</div>
  }
})
