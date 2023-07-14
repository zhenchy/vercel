// import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@mui/material'
// import React from 'react'

export type ConfirmDialogType = {
  title?: string
  description?: string
  open: boolean
  cancelText?: string
  agreeText?: string
  handleClose: any
  handleAgree: any
}

// export default function confirmDialog(props: ConfirmDialogType) {
//   return (
//     <div>
//       <Dialog
//         open={props.open}
//         disableEscapeKeyDown
//         aria-labelledby='alert-dialog-title'
//         aria-describedby='alert-dialog-description'
//         onClose={(event, reason) => {
//           if (reason !== 'backdropClick') {
//             props.handleClose()
//           }
//         }}
//       >
//         <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
//         <DialogContent>
//           <DialogContentText id='alert-dialog-description'>{props.description}</DialogContentText>
//         </DialogContent>
//         <DialogActions className='dialog-actions-dense'>
//           <Button onClick={props.handleClose}>{props.cancelText == undefined ? 'Cancel' : props.cancelText}</Button>
//           <Button onClick={props.handleAgree}>{props.agreeText == undefined ? 'Agree' : props.agreeText} </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   )
// }

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

const DialogConfirmation = (props: ConfirmDialogType) => {
  return (
    <Dialog
      open={props.open}
      disableEscapeKeyDown
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      onClose={(event, reason) => {
        if (reason !== 'backdropClick') {
          {
            props.handleClose
          }
        }
      }}
    >
      <DialogTitle id='alert-dialog-title'>{props.title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{props.description}</DialogContentText>
      </DialogContent>
      <DialogActions className='dialog-actions-dense'>
        <Button onClick={props.handleClose}>{props.cancelText}</Button>
        <Button onClick={props.handleAgree}>{props.agreeText}</Button>
      </DialogActions>
    </Dialog>
  )
}

export default DialogConfirmation
