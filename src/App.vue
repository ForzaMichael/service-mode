<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <Home />
</template>

<script>
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Home from './views/home/index'
export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Home
  }
})
</script>
