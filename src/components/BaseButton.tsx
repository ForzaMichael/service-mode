import { defineComponent, PropType } from 'vue'
enum Color {
  Red = 0,
  Green,
  Blue
}
export default defineComponent({
  props: {
    onClick: {
      type: Function as PropType<() => void>,
      required: true
    },
    numberTest: {
      type: Number as PropType<Color>,
      required: true
    }
  },
  setup(props) {
    console.log(props)
    props.onClick()
    return () => (
      <>
        <button onClick={props.onClick}>BaseButton</button>
      </>
    )
  }
})
