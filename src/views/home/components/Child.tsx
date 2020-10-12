import { defineComponent, inject } from "vue";
import  { handleDialogSymbol } from '../../../service/useDialog'
export default defineComponent({
  setup() {
    const handleDialogService = inject(handleDialogSymbol)
    const { triggerDialog } = handleDialogService
    return () => (
      <div>
        <el-button {...triggerDialog}>打开弹框</el-button>
      </div>
    )
  }
})
