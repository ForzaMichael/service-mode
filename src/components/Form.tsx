import { defineComponent, provide, PropType, renderSlot, watch } from 'vue'
import FormServiceCls from '../service/FormCls/FormService'
export default defineComponent({
  name: 'Form',
  props: {
    initialValue: {
      type: Object as PropType<{ [key: string]: any }>
    },
    form: {
      type: Object as PropType<FormServiceCls>
    },
    onFieldChange: {
      type: Function
    }
  },
  setup(props, { slots }) {
    const formService = props.form || new FormServiceCls(props.initialValue)
    provide(FormServiceCls.token, formService) //provide 最近的form,inject(FormService.token)便可
    provide(formService.uniqueToken, formService) //provide 特定的form,inject(formService1.uniqueToken)便可
    watch(formService.model, val => props.onFieldChange?.(val))
    return () => <div>{renderSlot(slots, 'default')}</div>
  }
})
