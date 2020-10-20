import { computed, inject, InjectionKey } from 'vue'
import { token as AppServiceToken } from './useAppService'
export const token: InjectionKey<ReturnType<typeof useChildService>> = Symbol()

const useChildService = () => {
  const appService = inject(AppServiceToken)
  const childName = computed(() => 'yes,childName plus ' + appService?.name.value)
  return {
    childName
  }
}
export default useChildService
