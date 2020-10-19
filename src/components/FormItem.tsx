import { defineComponent, InjectionKey, PropType } from 'vue'
import FormItemService from '../service/Form/FormItemService'
import FormService from '../service/Form/FormService'
export default defineComponent({
  name: 'FormItem',
  props: {
    name: {
      type: String,
      required: true
    },
    initialValue: {
      type: Object as PropType<{ [key: string]: any }>
    },
    formToken: {
      type: Symbol as PropType<InjectionKey<FormService>>
    }
  },
  setup(props) {
    const formItemService = new FormItemService(props)
    return { formItemService, child: null }
  },
  render() {
    const children = this.$slots.default?.()
    if (children) {
      if (children.length > 1) {
        throw new Error('form item can only has single child')
      }
      const child = children[0]
      child.props = {
        ...child.props,
        formValue: this.formItemService.data
      }
      return child
    }
    return
  }
})
