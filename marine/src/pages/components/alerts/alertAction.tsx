import { Box, Collapse, Alert, IconButton } from '@mui/material'
import React from 'react'
import Icon from 'src/@core/components/icon'

interface AlertProps {
  severity: 'error' | 'warning' | 'info' | 'success'
  message: string
  isEnable?: boolean
  setOpenAlert?: (val: boolean) => void
}

const AlertAction = (props: AlertProps) => {
  const { severity, message, isEnable = false, setOpenAlert } = props

  return (

      <Collapse in={isEnable}>
        <Alert
          severity={severity}
          action={
            <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenAlert(false)}>
              <Icon icon='mdi:close' fontSize='inherit' />
            </IconButton>
          }
        >
          <Box dangerouslySetInnerHTML={{ __html: message }} />

        </Alert>
      </Collapse>

  )
}

export default AlertAction
