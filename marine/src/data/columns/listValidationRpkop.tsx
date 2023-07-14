import {  Button } from '@mui/material'
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { formatDate } from 'src/types/forms/rpkopTypes'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

export const Validationcolumns: GridColDef[] = [
  { field: 'ves_id', headerName: 'Ves ID', width: 150 },
  { field: 'vessel_name', headerName: 'Vessel Name', width: 300 },
  { field: 'voyage', headerName: 'Voyage', width: 120 },
  { field: 'berth', headerName: 'Berth', width: 200 },
  {
    field: 'start_work',
    headerName: 'Start Work',
    width: 160,
    valueGetter: (params: GridRenderCellParams) => formatDate(params.row.start_work)
  },
  {
    field: 'end_work',
    headerName: 'End Work',
    width: 160,
    valueGetter: (params: GridRenderCellParams) => formatDate(params.row.end_work)
  },
  { field: 'op_ke', headerName: 'OP Ke', width: 70, align: 'center' },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    headerAlign: 'center',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <Button
          size='small'
          variant='contained'
          color='warning'
          startIcon={<AssignmentTurnedInIcon />}
          onClick={() => handleValidBtnClick(params.row.id as string)}
        >
          Validasi
        </Button>
      )
    }
  }
]

const handleValidBtnClick = (id: string) => {
  console.log(`Tombol Edit dengan ID ${id} ditekan.`);
}

// import React, { useState } from 'react'
// import { Button } from '@mui/material'
// import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
// import { formatDate } from 'src/types/forms/rpkopTypes'
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
// import DialogConfirmation from 'src/layouts/components/dialogs/confirmDialog'
// import axios from 'axios'

// export const Validationcolumns = ({ setNotif, setOpenSlide, setSeverity }) => {
//   const columns: GridColDef[] = [
//     { field: 'ves_id', headerName: 'Ves ID', width: 150 },
//     { field: 'vessel_name', headerName: 'Vessel Name', width: 300 },
//     { field: 'voyage', headerName: 'Voyage', width: 120 },
//     { field: 'berth', headerName: 'Berth', width: 200 },
//     {
//       field: 'start_work',
//       headerName: 'Start Work',
//       width: 160,
//       valueGetter: (params: GridRenderCellParams) => formatDate(params.row.start_work)
//     },
//     {
//       field: 'end_work',
//       headerName: 'End Work',
//       width: 160,
//       valueGetter: (params: GridRenderCellParams) => formatDate(params.row.end_work)
//     },
//     { field: 'op_ke', headerName: 'OP Ke', width: 70, align: 'center' },
//     {
//       field: 'actions',
//       headerName: 'Actions',
//       width: 200,
//       headerAlign: 'center',
//       sortable: false,
//       renderCell: (params: GridRenderCellParams) => {
//         return (
//           <MyDialog
//             id={params.row.id as string}
//             vessel_name={params.row.vessel_name}
//             op_ke={params.row.op_ke}
//             setNotif={setNotif}
//             setOpenSlide={setOpenSlide}
//             setSeverity={setSeverity}
//           />
//         )
//       }
//     }
//   ]

//   return columns
// }

// const MyDialog = ({
//   id,
//   vessel_name,
//   op_ke,
//   setNotif,
//   setOpenSlide,
//   setSeverity
// }: {
//   id: string
//   vessel_name: string
//   op_ke: string
//   setNotif: any
//   setOpenSlide: any
//   setSeverity: any
// }) => {
//   const [openDialog, setOpenDialog] = useState<boolean>(false)

//   const handleCloseDialog = () => {
//     setOpenDialog(false)
//   }

//   const handleValidBtnClick = () => {
//     setOpenDialog(true)
//   }

//   const handleAgree = async () => {
//     const headers = {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer your_token',
//     };

//     const res = await axios.put(`${process.env.API_URL}/api/rpkop/validate`, { id }, { headers });
//     console.log("data : ",res.data)
//     setSeverity(res.data.status ? 'error' : 'success');
//     setOpenSlide(true);
//     setNotif(
//       <div>
//         {res.data.status ? 'Gagal validasi kapal ' : 'Sukses validasi kapal '} — <strong>{vessel_name} </strong> OP Ke-
//         {op_ke} !
//       </div>
//     );
//     handleCloseDialog();
//   };

//   return (
//     <>
//       <Button
//         size='small'
//         variant='contained'
//         color='warning'
//         startIcon={<AssignmentTurnedInIcon />}
//         onClick={handleValidBtnClick}
//       >
//         Validasi
//       </Button>
//       {openDialog && (
//         <DialogConfirmation
//           open={openDialog}
//           handleClose={handleCloseDialog}
//           agreeText='Ya'
//           cancelText='Tidak'
//           description={`Apakah Anda ingin validasi kapal ${vessel_name} dengan op ke-${op_ke} ?`}
//           title='Konfirmasi'
//           handleAgree={handleAgree}
//         />
//       )}
//     </>
//   )
// }

// export default MyDialog
