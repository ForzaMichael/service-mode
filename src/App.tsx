import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld'
import Home from './views/home/index'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Home
  },
  setup() {
    return () => (
      <>
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Yes!" />
        <Home />
      </>
    )
  }
})
