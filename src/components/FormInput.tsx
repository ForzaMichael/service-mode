import { Ref, defineComponent, PropType } from 'vue'
export default defineComponent({
  name: 'FormInput',
  props: {
    formValue: { type: Object as PropType<Ref<string>> }
  },
  setup(props, { attrs }) {
    const others = attrs
    const formValue = props.formValue ?? { value: '' }
    const onInput = (e: Event) => (formValue.value = (e.target as HTMLInputElement).value)
    return () => <input {...others} value={formValue.value} onInput={onInput} />
  }
})
