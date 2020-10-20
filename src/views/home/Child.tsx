import { defineComponent, inject } from 'vue'
import { handleDialogSymbol } from '../../service/useDialog'
export default defineComponent({
  setup(props, { slots }) {
    console.log(props, slots)
    const handleDialogService = inject(handleDialogSymbol)
    const { triggerDialog } = handleDialogService ?? {}
    // console.log(slots.default?.())
    return () => (
      <div>
        <el-button {...triggerDialog}>{slots.header?.()}</el-button>
      </div>
    )
  }
})
