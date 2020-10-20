import { ref, InjectionKey, Ref } from 'vue'

export const token: InjectionKey<ReturnType<typeof useAppService>> = Symbol()

const useAppService = () => {
  const name = ref('this is AppService')
  const changeName = (val = '') => (name.value = val)
  return { name, changeName }
}
export default useAppService

class AppService {
  name: Ref<string>
  private static instance: AppService = new AppService()
  public static getInstance() {
    return AppService.instance
  }
  private constructor() {
    this.name = ref('this is app')
  }
  changeName(val = '') {
    this.name.value = val
  }
}
const appService = AppService.getInstance()
