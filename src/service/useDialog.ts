import { computed, ref, InjectionKey } from 'vue'
export const handleDialogSymbol: InjectionKey<ReturnType<typeof useHandleDialog>> = Symbol()

export const useHandleDialog = () => {
  const visible = ref(false)

  //弹框触发器
  const triggerDialog = {
    on: {
      click: () => (visible.value = true)
    }
  }

  // 弹框属性
  const dialogProps = computed(() => ({
    props: {
      title: '测试用的弹框',
      width: '50%',
      visible: visible.value
    },
    on: {
      'update:visible': (val: boolean) => {
        visible.value = val
      },
      close: () => {
        visible.value = false
      }
    }
  }))

  // 确认执行逻辑
  const dialogOk = () => {
    console.log('ok')
    visible.value = false
  }

  // 数据 & 逻辑导出
  return {
    visible,
    triggerDialog,
    dialogProps,
    dialogOk
  }
}
