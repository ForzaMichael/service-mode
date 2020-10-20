import { PropType, Ref, ref, onMounted, defineComponent } from 'vue'

export type MyComponentAPI = {
  hello: (message: string) => void
}
const MyComponent = defineComponent({
  props: {
    instanceRef: Object as PropType<Ref<MyComponentAPI | undefined>>
  },
  setup(props) {
    if (props.instanceRef !== undefined) {
      // eslint-disable-next-line vue/no-mutating-props
      props.instanceRef.value = {
        hello: (message: string) => console.log(message)
      }
    }
  }
})

const OtherComponent = defineComponent({
  setup() {
    const myComponentRef = ref<MyComponentAPI>()
    onMounted(() => {
      // with type checking!
      myComponentRef.value?.hello('sa')
    })
    return () => <MyComponent instanceRef={myComponentRef} />
  }
})
