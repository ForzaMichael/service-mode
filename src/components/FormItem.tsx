import { defineComponent, InjectionKey, PropType } from 'vue'
import FormItemServiceCls from '../service/FormCls/FormItemService'
import FormServiceCls from '../service/FormCls/FormService'
export default defineComponent({
  name: 'FormItem',
  props: {
    name: {
      type: String,
      required: true
    },
    initialValue: {
      type: String
    },
    formToken: {
      type: Symbol as PropType<InjectionKey<FormServiceCls>>
    }
  },
  setup(props) {
    const formItemService = new FormItemServiceCls(props)
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
