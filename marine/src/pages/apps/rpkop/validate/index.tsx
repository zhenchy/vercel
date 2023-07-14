// import React, { useEffect, useState } from 'react'
// import Grid from '@mui/material/Grid'
// import Typography from '@mui/material/Typography'
// import PageHeader from 'src/@core/components/page-header'
// import { RpkopListDataType } from 'src/types/forms/rpkopTypes'
// import TableFilterColumn from 'src/views/table/data-grid/TableFilter'
// import axios from 'axios'
// import { Validationcolumns } from 'src/data/columns/listValidationRpkop'
// import { Slide, Alert, IconButton } from '@mui/material'
// import CloseIcon from '@mui/icons-material/Close'

// const ValidateRPKOP = () => {
//   const [dataRow, setDataRow] = useState<RpkopListDataType[]>([])
//   const [isLoading, setIsLoading] = useState(true)
//   const [openSlide, setOpenSlide] = useState<boolean>(false)

//   // const [notif, setNotif] = useState<string>('')
//   // const [severity, setSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error')

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await axios.get(`${process.env.API_URL}/api/rpkop/validate`)
//         setDataRow(res.data.data.data)
//         setIsLoading(false)
//       } catch (error) {
//         console.error('Error fetching data : ', error)
//         setIsLoading(false)
//       }
//     }

//     const fetchDataAsync = async () => {
//       await fetchData()
//     }

//     fetchDataAsync()
//   }, [])

//   return (
//     <Grid container spacing={6}>
//       <Grid item xs={12}>
//         {/* <Slide in={openSlide} direction='left' {...(openSlide ? { timeout: 500 } : {})}>
//           <Alert
//             severity={severity}
//             action={
//               <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenSlide(false)}>
//                 <IconButton size='small' color='inherit' aria-label='close' onClick={() => setOpenSlide(false)}>
//                   <CloseIcon fontSize='inherit' />
//                 </IconButton>
//               </IconButton>
//             }
//           >
//             {notif}
//           </Alert>
//         </Slide> */}
//       </Grid>
//       <PageHeader title={<Typography variant='h5'>Validation RPKOP (Operation Planning)</Typography>} />
//       <Grid item xs={12}>
//         <TableFilterColumn
//           title='List Data'
//           rows={dataRow}
//           columns={Validationcolumns}
//           isLoading={isLoading}
//         />
//       </Grid>
//     </Grid>
//   )
// }

// export default ValidateRPKOP

import React from 'react'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import TableServerSide from 'src/views/table/data-grid/TableServerSide'
import { Validationcolumns } from 'src/data/columns/listValidationRpkop'

const ValidateRPKOP = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader title={<Typography variant='h5'>Validation RPKOP (Operation Planning)</Typography>} />
      <Grid item xs={12}>
      <TableServerSide title='List Data Server Side' url="/api/rpkop/validate" columns={Validationcolumns}/>
      </Grid>
    </Grid>
  )
}

export default ValidateRPKOP
