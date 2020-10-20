<template>
  <h1>{{ fieldsVisible }}</h1>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HelloWorld',
  props: {
    pageDefaultProps: {
      type: Number,
      required: true
    },
    constProps: {
      type: String,
      required: true
    },
    fieldsVisible: {
      type: Boolean
    },
    summaryVisible: {
      type: Boolean
    }
  }
})
</script>
