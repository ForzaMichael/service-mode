import { defineComponent, provide,withModifiers } from 'vue'
import { handleDialogSymbol, useHandleDialog } from '../../service/useDialog'
import Child from './components/Child'
export default defineComponent({

  setup() {
    const handleDialogService = useHandleDialog()
    provide(handleDialogSymbol, handleDialogService)
    const { triggerDialog, dialogProps, dialogOk } = handleDialogService
    const slots={
      footer:()=><el-button type="primary" onClick={withModifiers(dialogOk,['self'])}>确 定</el-button>
    }
    return () => (
      <div>
           <el-dialog {...dialogProps.value}>
          <span v-slots={slots} class="dialog-footer">
          </span>
        </el-dialog>
        <el-button {...triggerDialog}>弹框按钮</el-button>
        <Child />
      </div>
    )
  }
})
