import { ConfimDialogProps } from "src/types/ComponentProps"
import { ModalDialog } from "../ModalDialog"

const ConfimDeleteDialog = ({ open, ...others }: ConfimDialogProps) => {
    return (
        <ModalDialog maxWidth='xs' open={open} title={'确定要删除吗？'} {...others}>
        </ModalDialog>
    )
}
export { ConfimDeleteDialog }
