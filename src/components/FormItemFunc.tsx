import { defineComponent, PropType } from 'vue'
import FormServiceFunc from '../service/FormFunc/FormService'
import FormItemServiceFunc from '../service/FormFunc/FormItemService'
import { InjectionToken } from '../types/service'
export default defineComponent({
  name: 'FormItemFunc',
  props: {
    name: {
      type: String,
      required: true
    },
    initialValue: {
      type: String
    },
    formToken: {
      type: Symbol as PropType<InjectionToken<typeof FormServiceFunc>>
    }
  },
  setup(props) {
    const formItemService = FormItemServiceFunc(props)
    return { formItemService }
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
