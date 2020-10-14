import { PropType, Ref, ref, onMounted } from "vue";

export type MyComponentAPI = {
  hello: (message: string) => void,
};
const MyComponent = {
  props: {
    instanceRef: Object as PropType<Ref<MyComponentAPI | undefined>>
  },
  setup(props) {
    if (props.instanceRef !== undefined) {
      // eslint-disable-next-line vue/no-mutating-props
      props.instanceRef.value = {
        hello(message: string) { ... }
      };
    }
  }
};
const OtherComponent = {
  setup() {
    const myComponentRef = ref<MyComponentAPI>();
    onMounted(() => {
      // with type checking!
      myComponentRef.value!.hello('bonjour');
    });
    return () => <MyComponent instanceRef={myComponentRef} />;
  }
};