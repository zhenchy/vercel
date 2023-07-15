import Link from 'next/link'
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import PageHeader from 'src/@core/components/page-header'
import FormData from 'src/views/pages/master/fasilitas/form'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useEffect, useState } from 'react'
import { Masterdatalistcolumns } from 'src/data/columns/listMasterFasilitas'
import { MasterFasilitasListDataType } from 'src/types/forms/masterFasilitas'
import TableFilterColumn from 'src/views/table/data-grid/TableFilter'
import axios from 'axios'
import AlertAction from 'src/pages/components/alerts/alertAction'


const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))







const DataGrid = () => {

  const [dataRow, setDataRow] = useState<MasterFasilitasListDataType[]>([])
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${process.env.API_URL}/api/master/kapal_pandu`)
        setDataRow(res.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error('Error fetching data : ', error)
        setIsLoading(false)
      }
    }

    const fetchDataAsync = async () => {
      await fetchData()
    }

    fetchDataAsync()
  }, [])

  const defaultValues = {
    do:'new',
    id:'',
    nm_fasilitas: '',
    jn_fasilitas: '',
    jn_fasilitas_descr: '',
    id_fasilitas: '',
    st_fasilitas:'',
    st_fasilitas_descr: '',
    status:'',
  }

  const [dataListSelected, setdataListSelected] = useState(defaultValues)





  type ty_data_list = {
    do:'edit',
    id:string,
    nm_fasilitas:string,
    jn_fasilitas:string,
    jn_fasilitas_descr:string,
    id_fasilitas:string,
    st_fasilitas:string,
    st_fasilitas_descr:string,
    status:string,
  }









  const handleEditBtn = (id: string, dataList: ty_data_list ) => {
    const fetchData = async () => {
      try {

        //const {jn_fasilitas} = dataList;

        //// //load dari API ==
        // console.log("jn_fasilitas = ",jn_fasilitas)
        // console.log("obj_satu = ",obj_satu)
        //setIsLoading(true)
        //setSelectedData(defaultValues)
        //const resEdit = await axios.get(`${process.env.API_URL}/api/master/kapal_pandu?id=${id}`);
        // setSelectedData(resEdit.data.data[0])
        //setIsLoading(false)
        //// \\load dari API ==

        setdataListSelected(dataList)

        //alert('success',`Vessel ID : ${id}`)

        // console.log(resEdit.data.data[0].nm_fasilitas)
      } catch (error) {
        setIsLoading(false)
        alert('error', error +'<br>' + process.env.API_URL +'/api/master/kapal_pandu?id='+id)
      }
    }

    const fetchDataAsync = async () => {
      await fetchData()
    }

    fetchDataAsync()

  }

  const handleDeleteBtn = (id: string) => {
    console.log(`====Delete Vessel ID : ${id}`)
  }
  const columns = Masterdatalistcolumns({ handleEditBtn,handleDeleteBtn });

  const [severity, setSeverity] = useState<'error' | 'warning' | 'info' | 'success'>('error')
  const [message, setMessage] = useState<string>('Failed!')
  const [openAlert, setOpenAlert] = useState<boolean>(false)

  function alert(severity, message){
    setMessage(message)
    setSeverity(severity)
    setOpenAlert(true)
  }

  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='' target=''>
                Master Fasilitas
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Kapal Tunda dan Motor Pandu</Typography>}
        />

      <Grid item xs={12}>
      <AlertAction
          severity={severity}
          message={message}
          isEnable={openAlert}
          setOpenAlert={setOpenAlert}
        />
      </Grid>

        <Grid item xs={12}>
          <FormData  dataList={dataListSelected} />
        </Grid>

        <Grid item xs={12}>
          {/* <TableSelection/> */}
        <TableFilterColumn title='List Data' rows={dataRow} columns={columns as any} isLoading={isLoading} />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default DataGrid
