<<<<<<< HEAD
import { defineComponent, provide, reactive, watch, withModifiers } from 'vue'
=======
import { defineComponent, provide, withModifiers } from 'vue'
>>>>>>> e6e21d45d1adb2db35ee9ebe90619f07000817cb
import { handleDialogSymbol, useHandleDialog } from '../../service/useDialog'
import Child from './Child'
import BaseButton from '../../components/BaseButton'
export default defineComponent({
  setup() {
    const handleDialogService = useHandleDialog()
    provide(handleDialogSymbol, handleDialogService)
    const { triggerDialog, dialogOk } = handleDialogService
<<<<<<< HEAD

=======
>>>>>>> e6e21d45d1adb2db35ee9ebe90619f07000817cb
    const slots = {
      header: () => <div>header</div>
      // body: () => <div>body</div>,
      // footer: () => (
      //   <el-button type="primary" onClick={withModifiers(dialogOk, ['self'])}>
      //     确 定
      //   </el-button>
      // )
    }
    // const props = {
    //   props: {
    //     title: '测试用的弹框',
    //     width: '50%'
    //   }
    // }
    return () => (
      <div>
        {/* <el-dialog {...dialogProps.value}>
          <span class="dialog-footer"></span>
        </el-dialog> */}
        <BaseButton {...triggerDialog} numberTest={4} />
        <Child v-slots={slots} />
      </div>
    )
  }
})
