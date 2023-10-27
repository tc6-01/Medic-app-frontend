import {
  Backdrop,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Modal,
  Paper,
  PaperProps
} from '@mui/material'
import { ModalDialogProps, ModalDialogWithoutButtonProps } from 'src/types/ComponentProps'
import Draggable from 'react-draggable'
const dialogStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '70%',
  height: '70%',
  // bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 10
  // p: 1,
}

function PaperComponent(props: PaperProps) {
  return (
    <Draggable handle='#draggable-dialog-title' cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  )
}

const ModalDialog = ({ open, onClose, children, onCancelClick, onOkClick, title, maxWidth }: ModalDialogProps) => {
  return (
    <>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={onClose}
        fullWidth
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ overflow: 'auto' }}>{children}</DialogContent>
        <DialogActions>
          <Button variant='contained' sx={{ width: '150px', height: '40px', mt: 5 }} onClick={onOkClick}>
            确认
          </Button>
          <Button
            variant='contained'
            sx={{ width: '150px', height: '40px', mt: 5 }}
            color='error'
            onClick={onCancelClick}
          >
            取消
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

const ModalDialogWithoutButton = ({ open, onClose, children, title, maxWidth }: ModalDialogWithoutButtonProps) => {
  return (
    <>
      <Dialog
        maxWidth={maxWidth}
        open={open}
        onClose={onClose}
        fullWidth
        PaperComponent={PaperComponent}
        aria-labelledby='draggable-dialog-title'
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent sx={{ overflow: 'auto', height: '100%' }}>{children}</DialogContent>
      </Dialog>
    </>
  )
}

export { ModalDialog, ModalDialogWithoutButton }
