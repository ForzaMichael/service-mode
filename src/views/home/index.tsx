import { defineComponent, provide,withModifiers } from 'vue'
import { handleDialogSymbol, useHandleDialog } from '../../service/useDialog'
import Child from './Child'
export default defineComponent({

  setup() {
    const handleDialogService = useHandleDialog()
    provide(handleDialogSymbol,handleDialogService)
    const { triggerDialog, dialogProps, dialogOk } = handleDialogService
    const slots={
      footer:()=><el-button type="primary" onClick={withModifiers(dialogOk,['self'])}>确dasdw 定</el-button>
    }
    const props={props: {
      title: '测试用的弹框',
      width: '50%',
    }}
    return () => (
      <div>
           <el-dialog {...dialogProps.value}>
          <span  class="dialog-footer">
          </span>
        </el-dialog>
        <el-button {...triggerDialog}>弹框按钮</el-button>
        <Child v-slots={slots}>dsad</Child>
      </div>
    )
  }
})
