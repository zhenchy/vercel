// import {  Button } from '@mui/material'
// import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
// import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'
// import { useState } from 'react'

// export const Masterdatalistcolumns: GridColDef[] = [


//   { field: 'id', headerName: 'Fasilitas Id', width: 90 },
//   { field: 'jn_fasilitas', headerName: 'Jenis Fasilitas', width: 300 },
//   { field: 'nm_fasilitas', headerName: 'Nama Fasilitas', width: 320 },
//   {
//     field: 'actions',
//     headerName: 'Actions',
//     width: 200,
//     headerAlign: 'center',
//     sortable: false,
//     renderCell: (params: GridRenderCellParams) => {
//       return (
//         <Button
//           size='small'
//           variant='contained'
//           color='primary'
//           startIcon={<AssignmentTurnedInIcon />}
//           onClick={() => handleValidBtnClick(params.row.id as string)}
//         >
//           Edit
//         </Button>
//       )
//     }
//   }

// ]

// const handleValidBtnClick = (id: string) => {
//   // const [nama, setNama] = useState('henky')

//   console.log(`Tombol Edit dengan ID ${id} ditekan.`)
//   // setNama(`${id}`)

// }


import {  Button } from '@mui/material'
import { GridRenderCellParams } from '@mui/x-data-grid'
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

export const Masterdatalistcolumns = ({handleEditBtn, handleDeleteBtn})=> {

return [
  { field: 'id', headerName: 'Id',flex: 0.03,  },
  { field: 'nm_fasilitas', headerName: 'Nama Fasilitas', flex: 0.1,  },
  { field: 'jn_fasilitas_descr', headerName: 'Jenis Fasilitas', flex: 0.1,  },
  { field: 'st_fasilitas_descr', headerName: 'Status Fasilitas', flex: 0.1,  },
  {
    field: 'actions',
    flex: 0.05,

    headerName: 'Actions',
    headerAlign: 'center',
    Align:'center',
    sortable: false,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <>
        <Button
          size='small'
          variant='contained'
          color='primary'
          style={{ margin: '0 auto', display: 'block' }}
          onClick={() => {
            handleEditBtn(params.row.id as string, params.row );
            console.log("datalist = ", params.row)}
        }
        >
          Edit
        </Button>
        &nbsp;
        <Button
          size='small'
          variant='contained'
          color='primary'
          style={{ margin: '0 auto', display: 'block' }}
          onClick={() => handleDeleteBtn(params.row.id as string)}
        >
          Delete
        </Button></>

      )
    }
  }

]
}
export default Masterdatalistcolumns;
