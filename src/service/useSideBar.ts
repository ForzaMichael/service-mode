import { InjectionKey, ref } from 'vue'

export const handleSideBarSymbol: InjectionKey<ReturnType<typeof useSideBar>> = Symbol()

export const useSideBar = () => {
  const isCollapse = ref(false)
  const changeStatus = () => {
    isCollapse.value = !isCollapse.value
  }
  return {
    isCollapse,
    changeStatus
  }
}
