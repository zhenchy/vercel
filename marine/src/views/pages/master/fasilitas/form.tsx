// ** React Imports
import {  useState,  useEffect } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormHelperText from '@mui/material/FormHelperText'


//alert
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

// ** Third Party Imports
//import toast from 'react-hot-toast'

import { useForm, Controller } from 'react-hook-form'
import { Autocomplete, Breakpoint,  } from '@mui/material'




interface FormInputs {
  nm_fasilitas: string
  val_nm_fasilitas: boolean
  jn_fasilitas: string
  val_jn_fasilitas: boolean
  id: string
  val_id_fasilitas:boolean
  st_fasilitas: string
  val_st_fasilitas:boolean
  st_fasilitas_descr: string
  val_st_fasilitas_descr:boolean
  cbo_fasilitas_descr:string
}

const defaultValues = {
  nm_fasilitas: '',
  val_nm_fasilitas: false,
  jn_fasilitas: '',
  val_jn_fasilitas: false,
  id: '',
  val_id: false,
  st_fasilitas: '',
  val_st_fasilitas: false,
  st_fasilitas_descr: '',
  val_st_fasilitas_descr: false,
  cbo_fasilitas_descr: '',
}

export interface ViewDataProps {
  dataList: any,
}


export type AutocompleteType = {

  // value: string
  // label: string
  label: string
  id: string
}

 const stFasilitas:AutocompleteType[] = [

  // { label: "", id: "" },
  { label: "NOT ACTIVE", id: "0" },
  { label: "ACTIVE", id: "1" }

  // { label: "", id: 99 },

]

const FormData = ({
  dataList,
}: ViewDataProps) => {
  const {handleSubmit, setValue} = useForm();
  const { control } = useForm<FormInputs>({ defaultValues })


  //alert
  const [open, setOpen] = useState<boolean>(false)
  const [fullWidth] = useState<boolean>(true)
  const [maxWidth] = useState<Breakpoint>('sm')
  const handleClose = () => setOpen(false)


  const [vid_fasilitas, setvid_fasilitas] =  useState<boolean>(false)
  const [vnm_fasilitas, setvnm_fasilitas] =  useState<boolean>(false)
  const [vjn_fasilitas, setvjn_fasilitas] =  useState<boolean>(false)
  const [vst_fasilitas, setvst_fasilitas] =  useState<boolean>(false)
  const [vst_fasilitas_descr, setvst_fasilitas_descr] =  useState<boolean>(false)

///* eslint-disable*/
  const [id_fasilitas, setid_fasilitas] = useState('');
  const [nm_fasilitas, setnm_fasilitas] = useState('');
  const [jn_fasilitas, setjn_fasilitas] = useState('');
  const [st_fasilitas, setst_fasilitas] = useState('');
  const [st_fasilitas_descr, setst_fasilitas_descr] = useState('');

 ///* eslint-enable*/
 nm_fasilitas
 jn_fasilitas
 st_fasilitas
 st_fasilitas_descr
 vst_fasilitas_descr



  useEffect(()=>{

    setValueA(stFasilitas[+dataList.st_fasilitas]);

    setValue('id', dataList.id);
    setValue('nm_fasilitas', dataList.nm_fasilitas);
    setValue('jn_fasilitas', dataList.jn_fasilitas_descr);
    setValue('id_fasilitas', dataList.id_fasilitas);
    setValue('st_fasilitas', dataList.st_fasilitas);

    console.log("use effect ", dataList.id);
    console.log("use effect ",id_fasilitas);


    setst_fasilitas_descr(dataList.st_fasilitas_descr);

    setvnm_fasilitas(false);
    setvjn_fasilitas(false);
    setvid_fasilitas(false);
    setvst_fasilitas(false);
    setvst_fasilitas_descr(false);


    console.log("load")
  },[dataList])


  const onSubmit = (data) => {
    console.log("id_fasilitas : "+data.id)

console.log("nm_fasilitas : "+data.nm_fasilitas)
console.log("st_fasilitas_descr : ", valueA?.label ? valueA.label : '')
console.log("st_fasilitas : ", valueA?.id ? valueA.id : '' )
console.log("jn_fasilitas : "+data.jn_fasilitas)



    // if (!data.nm_fasilitas) {
    //   setvnm_fasilitas(true);
    // }
    // if (!data.jn_fasilitas) {
    //   setvjn_fasilitas(true);
    // }
    // if (!data.st_fasilitas) {
    //   setvst_fasilitas(true);
    // }

  };

  // function autoOnChange (event, newValue){
  //   console.log("autoonchange = ",newValue)
  //   setValueA(newValue);
  //   setvst_fasilitas_descr(true);
  //   setValue('st_fasilitas_descr', newValue? stFasilitas[+newValue.id] : stFasilitas[0])
  // }


  const [valueA, setValueA] = useState(stFasilitas[0]);

 // const [inputValue, setInputValue] = useState('');

  return (
    <Card>
      <CardHeader title='Form' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
          <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='id'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      label='ID Fasilitas'
                      value={ dataList.id}
                      error={vid_fasilitas && value === ''}
                      aria-describedby='id'
                      onChange={e => {
                        onChange(e),
                        setvid_fasilitas(true);
                        setValue('id_fasilitas', e.target.value  );
                        setid_fasilitas(e.target.value)
                      }}
                    />
                  )}
                />
                { vid_fasilitas  && !control._formState.dirtyFields.id &&  (
                  <FormHelperText sx={{ color: 'error.main' }} id='id'>
                     This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>




            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='nm_fasilitas'
                  control={control}
                   rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      label='Nama Fasilitas'
                      value={vnm_fasilitas ? value : dataList.nm_fasilitas}
                      error={vnm_fasilitas && value === ''}
                      aria-describedby='nm_fasilitas'
                      onChange={e => {
                        onChange(e),
                        setvnm_fasilitas(true);
                        setValue('nm_fasilitas', e.target.value  );
                        setnm_fasilitas(e.target.value)
                      }}
                    />
                  )}
                />
                { vnm_fasilitas  && !control._formState.dirtyFields.nm_fasilitas &&  (
                  <FormHelperText sx={{ color: 'error.main' }} id='nm_fasilitas'>
                     This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
                <Controller
                  name='jn_fasilitas'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      label='Jenis Fasilitas'
                      value={vjn_fasilitas ? value : dataList.jn_fasilitas_descr}
                      error={vjn_fasilitas && value === ''}
                      aria-describedby='jn_fasilitas'
                      onChange={e => {
                        onChange(e),
                        setvjn_fasilitas(true);
                        setValue('jn_fasilitas', e.target.value  );
                        setjn_fasilitas(e.target.value)
                      }}
                    />
                  )}
                />
                { vjn_fasilitas  && !control._formState.dirtyFields.jn_fasilitas &&  (
                  <FormHelperText sx={{ color: 'error.main' }} id='jn_fasilitas'>
                     This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='st_fasilitas'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      label='Status Fasilitas'
                      value={vst_fasilitas ? value : dataList.st_fasilitas_descr}
                      error={vst_fasilitas && value === ''}
                      aria-describedby='st_fasilitas'
                      onChange={e => {
                        onChange(e),
                        setvst_fasilitas(true);
                        setValue('st_fasilitas', e.target.value  );
                        setst_fasilitas(e.target.value)
                      }}
                    />
                  )}
                />
                { vst_fasilitas  && !control._formState.dirtyFields.st_fasilitas &&  (
                  <FormHelperText sx={{ color: 'error.main' }} id='st_fasilitas'>
                     This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>


            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='st_fasilitas_descr'
                  control={control}
                  rules={{ required: true }}
                  render={() => (
                    <Autocomplete
                      value={valueA}
                      options={ stFasilitas }
                      onChange={(event, newValue) => {
                        setValueA(newValue);
                        setvst_fasilitas_descr(true);

                        //setValue('st_fasilitas_descr', newValue? stFasilitas[+newValue.id] : stFasilitas[0])
                      }}
                      id='st_fasilitas_descr'
                      renderInput={params => (
                        <TextField
                          {...params}
                          label='Status Fasilitas'
                          error={!valueA?.label }
                          aria-describedby='st_fasilitas_descr'
                        />
                      )}
                    />
                    )}
                  />
                {!valueA?.label && (
                  <FormHelperText sx={{ color: 'error.main' }} id='st_fasilitas_descr'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>



            </Grid>


            {/* <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='st_fasilitas_descr'
                  control={control}
                  rules={{ required: true }}
                  render={({ field  : { value, onChange } }) => (
                    <Autocomplete
                      //value={vst_fasilitas_descr  ?  value   :  {'label':dataList.st_fasilitas_descr, 'id':dataList.st_fasilitas}}
                      value={dataList.st_fasilitas_descr}
                      options={ stFasilitas }
                      onChange={(event, newValue) => {
                        setvst_fasilitas_descr(true);
                        setdo_form('edit');
                        onChange(newValue);
                        setValue('st_fasilitas_descr', newValue);
                        // if(newValue!=null){
                        //   setvst_fasilitas_descr(false)
                        // }else{
                        //   setvst_fasilitas_descr(true)
                        // }
                      }}
                      id='st_fasilitas_descr'

                     // getOptionLabel={option => option.label ||  dataList.st_fasilitas_descr }
                    //  isOptionEqualToValue={(option, value) => option === value}
                   isOptionEqualToValue={(option, value) => {
                      // console.log('option = ', option);
                      // console.log('value = ', value);
                      // console.log('dataList.st_fasilitas_descr = ', dataList.st_fasilitas_descr)
                      // console.log('vst_fasilitas_descr  = ', vst_fasilitas_descr )

                      // return option.label ==  value.label;
                      //return typeof option === 'string' ? option === value : option.label === value?.label;
                       return typeof option === 'string'  ? option === value : (option as { label: any; id: any }).label === (value as { label: any; id: any }).label;

                    }}


                      renderInput={params => (
                        <TextField
                          {...params}
                          label='Status Fasilitas'

                          InputLabelProps={{ shrink: dataList.st_fasilitas_descr  ? true : undefined  }}
                          // error={vst_fasilitas_descr  && st_fasilitas_descr ==='' ? true : false}

                          error={ vst_fasilitas_descr===true && value == null ? true : false}

                          // error={vnm_fasilitas && value === ''}

                          aria-describedby='st_fasilitas_descr'
                        />
                      )}
                    />
                  )}
                />
                {vst_fasilitas_descr  && (
                  <FormHelperText sx={{ color: 'error.main' }} id='st_fasilitas_descr'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid> */}


            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained' >
                Submit
              </Button>
            </Grid>
          </Grid>



        </form>
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth={maxWidth}
          fullWidth={fullWidth}
          aria-labelledby='alert-dialog-title'
          aria-describedby='alert-dialog-description'
        >
          <DialogTitle id='alert-dialog-title'>Alert</DialogTitle>
          <DialogContent>
            <DialogContentText id='alert-dialog-description'></DialogContentText>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>

  )
}

export default FormData
