import Form from '../../components/Form'
import FormItem from '../../components/FormItem'
import FormInput from '../../components/FormInput'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormView',
  setup() {
    const initialValue = { item1: 'test1', item2: 'test2' }
    const handleChange = (val: Object) => console.log(val)
    return () => (
      <>
        <Form initialValue={initialValue} onFieldChange={handleChange}>
          {() => <FormItem name="item1">{() => <FormInput />}</FormItem>}
        </Form>
      </>
    )
  }
})
