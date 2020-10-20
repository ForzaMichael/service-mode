// import Form from '../../components/Form'
// import FormItem from '../../components/FormItem'
import FormInput from '../../components/FormInput'
import FormFunc from '../../components/FormFunc'
import FormItemFunc from '../../components/FormItemFunc'

import FormServiceFunc from '../../service/FormFunc/FormService'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FormView',
  setup() {
    const initialValue1 = { item1: 'test1', item2: 'test2' }
    const initialValue2 = { item3: 'test3', item4: 'test4' }
    const handleChange = (val: Object) => console.log(val)
    const form1Service = FormServiceFunc(initialValue1)
    const { uniqueToken } = form1Service
    const form2Service = FormServiceFunc(initialValue2)
    return () => (
      <>
        <FormFunc form={form1Service} onFieldChange={handleChange}>
          <FormFunc form={form2Service} onFieldChange={handleChange}>
            <FormItemFunc name="item1" formToken={uniqueToken}>
              <FormInput />
            </FormItemFunc>
            <FormItemFunc name="item2" formToken={uniqueToken}>
              <FormInput />
            </FormItemFunc>
            <FormItemFunc name="item3">
              <FormInput />
            </FormItemFunc>
            <FormItemFunc name="item4">
              <FormInput />
            </FormItemFunc>
          </FormFunc>
        </FormFunc>
      </>
    )
  }
})
