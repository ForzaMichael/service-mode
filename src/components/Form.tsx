import { defineComponent, provide, PropType, renderSlot, watch } from 'vue'
import FormService from '../service/Form/FormService'
export default defineComponent({
  name: 'Form',
  props: {
    initialValue: {
      type: Object as PropType<{ [key: string]: any }>
    },
    form: {
      type: Object as PropType<FormService>
    },
    onFieldChange: {
      type: Function
    }
  },
  setup(props, { slots, emit }) {
    const formService = props.form || new FormService(props.initialValue)
    provide(FormService.token, formService) //provide 最近的 form,inject(FormService.token)便可
    provide(formService.uniqueToken, formService) //provide 特定的form,inject(formService1.uniqueToken)便可
    watch(formService.model, val => props.onFieldChange?.(val))
    return () => (
      <>
        <div>{renderSlot(slots, 'default')}</div>
      </>
    )
  }
})
