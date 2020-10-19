import { defineComponent } from 'vue'
// import HelloWorld from './components/HelloWorld'
import Home from './views/home/index'
import FormView from './views/FormView/FormView'
export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    Home,
    FormView
  },
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src="./assets/logo.png" />
        {/* <HelloWorld msg="Yes!" /> */}
        {/* <Home /> */}
        <FormView />
      </>
    )
  }
})
