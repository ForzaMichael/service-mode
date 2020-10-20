import { Message } from 'element-ui/types/element-ui'
import { Ref, ref, unref, computed } from 'vue'

export function useUserRequest<T>(
  method: 'GET' | 'POST' | 'DELETE' | 'PUT',
  path: string | Ref<string>,
  defaultData: T,
  options: { manual: boolean; default: any } = { manual: false, default: null }
) {
  const loading = ref(false)
  const error = ref<any>(null)
  const resData = ref(null)
  const total = ref(0)

  // 手动执行
  const run = async () => {
    loading.value = true
    const data = unref(defaultData)
    const otherParams: any = {}
    if (method === 'GET' || method === 'DELETE') {
      otherParams.params = data
    } else {
      otherParams.data = data
    }
    return (userRequest({
      method,
      url: unref(path),
      ...otherParams
    }) as any)
      .then((res: any) => {
        const { data: responseData, total: responseTotal } = res
        loading.value = false
        resData.value = responseData
        if (responseTotal) {
          total.value = responseTotal
        }
        return res
      })
      .catch((err: any) => {
        error.value = err?.message
        loading.value = false
        Message.error(err.value || '未知错误')
      })
  }

  // 如果非手动执行，直接执行
  if (!options.manual) {
    run()
  }

  return {
    loading,
    error,
    data: computed(() => resData.value || options.default),
    run,
    total
  }
}
useUserRequest(
  'GET',
  'user/userinfo',
  { id: 1 },
  { manual: true, default: { name: 'Jack', email: '123@gmail.com' } }
)
