import { defineComponent, inject } from "vue";
import  { handleDialogSymbol } from '../../service/useDialog'
export default defineComponent({
  setup(props,{slots,attrs}) {
    console.log(attrs);
    const handleDialogService = inject(handleDialogSymbol)
    const { triggerDialog } = handleDialogService
    console.log(slots.default());
    return () => (
      <div>
        <el-button {...triggerDialog}>{attrs['v-slots'].footer()}</el-button>
      </div>
    )
  }
})
