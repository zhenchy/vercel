// ** React Imports
import { forwardRef, useState, ChangeEvent, SyntheticEvent } from 'react'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'

import TextField from '@mui/material/TextField'

import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'

import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'

import FormHelperText from '@mui/material/FormHelperText'

//auto complete
import Autocomplete from '@mui/material/Autocomplete'
import { pelabuhan } from 'src/@fake-db/negara'
import { portID } from 'src/@fake-db/negara'
import { portSG } from 'src/@fake-db/negara'

import { mstLabel } from 'src/@fake-db/negara'

const lblVesselName = mstLabel.find(item => item.lblId === 'lblVesselName')?.lblName || ''
const lblVoyageIn = mstLabel.find(item => item.lblId === 'lblVoyageIn')?.lblName || ''
const lblVoyageOut = mstLabel.find(item => item.lblId === 'lblVoyageOut')?.lblName || ''

//const lblEta = mstLabel.find(item => item.lblId === 'lblEta')?.lblName || ''
//const lblEtd = mstLabel.find(item => item.lblId === 'lblEtd')?.lblName || ''
//const lblNegaraPelSebelum = mstLabel.find(item => item.lblId === 'lblNegaraPelSebelum')?.lblName || ''
//const lblPelSebelum = mstLabel.find(item => item.lblId === 'lblPelSebelum')?.lblName || ''

//alert
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import DialogContentText from '@mui/material/DialogContentText'

// ** Third Party Imports
//import toast from 'react-hot-toast'
import DatePicker from 'react-datepicker'
import { useForm, Controller } from 'react-hook-form'
import { Breakpoint } from '@mui/material'
import { AutocompleteType } from 'src/@fake-db/types'

//import { ReactDatePickerProps } from 'react-datepicker'

// ** Icon Imports
//import Icon from 'src/@core/components/icon'

//import Alert from '../components/dialogs/Alert'

interface State {
  password: string
  showPassword: boolean
}

interface FormInputs {
  dob: string
  radio: string
  select: string
  password: string
  textarea: string
  checkbox: boolean
  ves_name: string
  pkk_no: string
  voy_in: string
  voy_out: string
  eta: string
  etd: string
  jn_kunjungan: string
  jn_kemasan: string
  kegiatan: string
  negara: string
  port: string
}

interface CustomInputProps {
  value: string
  label: string
  error: boolean
  onChange: (event: ChangeEvent) => void
}

const defaultValues = {
  dob: null,
  radio: '',
  select: '',
  password: '',
  textarea: '',
  ves_name: '',
  pkk_no: '',
  voy_in: '',
  voy_out: '',
  eta: null,
  etd: '',
  jn_kunjungan: '',
  jn_kemasan: '',
  kegiatan: '',
  negara: '',
  port: '',
  checkbox: false
}

const CustomInput = forwardRef(({ ...props }: CustomInputProps, ref) => {
  return <TextField inputRef={ref} {...props} sx={{ width: '100%' }} />
})

const FormPkk = () => {
  // ** States
  // const [state, setState] = useState<State>({
  //   password: '',
  //   showPassword: false
  // })

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>({ defaultValues })

  // const handleClickShowPassword = () => {
  //   setState({ ...state, showPassword: !state.showPassword })
  // }

  //const [dateTime, setDateTime] = useState<DateType>(new Date()) // ada default value
  //const [dateTime, setDateTime] = useState<DateType>()

  //const onSubmit = () => toast.success('Form Submitted')

  const onSubmit = data => {
    console.log('Form validation berhasil')

    // Lakukan tindakan selanjutnya, seperti mengirim data ke server, dll.
  }

  //autocomplete
  interface FilmOptionType {
    id: string
    title: string
  }
  interface portOptionType {
    unlocode: string
    nama: string
  }

  const [vNegara, setvNegara] = useState('')
  const [vNegaraPort, setvNegaraPort] = useState('')
  const [vIdNegaraPort] = useState('')

  //const handleChange = (event: SyntheticEvent, newValue: FilmOptionType | null) => {
  //  setValue(newValue)
  //  setvPort('')
  //  setvNegara(newValue?.id || '')
  //  console.log(newValue?.title + ' ' + newValue?.id)
  //}

  const handleChange = (event: SyntheticEvent, newValue: FilmOptionType | null) => {
    console.log(newValue?.title + ' ' + newValue?.id)
    setvNegara(newValue?.id || '')
    if (newValue) {
      console.log('ada nilai baru ' + newValue.title + ' ' + newValue.id)
    }
  }

  const handleChange2 = (event: SyntheticEvent, newValue: portOptionType | null) => {
    if (newValue) {
      const portOption = newValue as portOptionType
      console.log(portOption.unlocode + ' ' + portOption.nama)
      console.log(portOption)
    }
  }

  const [nama, setNama] = useState('henky')
  const onChange2 = (ves_name: string) => {
    setNama(ves_name)
  }

  const [msgError, setMsgError] = useState('')

  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleStartDateChange = async (date: Date | null) => {
    setStartDate(date)
    console.log('set tgl mulai')
  }

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date)
  }

  const compareDates = () => {
    if (startDate && endDate) {
      if (startDate.getTime() < endDate.getTime()) {
      } else if (startDate.getTime() > endDate.getTime()) {
        handleClickOpen()
        setMsgError('ETA harus lebih kecil ETD')
      } else {
        handleClickOpen()
        setMsgError('ETA harus lebih kecil ETD')
        console.log('Start date is the same as end date')
      }
    }
  }

  // const [vpelabuhan, setvPelabuhan] = useState('')

  //alert
  const [open, setOpen] = useState<boolean>(false)
  const [fullWidth] = useState<boolean>(true)
  const [maxWidth] = useState<Breakpoint>('sm')

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => setOpen(false)

  const [selectedOption, setSelectedOption] = useState<AutocompleteType | null>(null)

  return (
    <Card>
      <CardHeader title='Form' />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={6}>
              {nama}
              <FormControl fullWidth>
                <Controller
                  name='ves_name'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label={lblVesselName}
                      onChange={e => {
                        //onChange(e), setNama(e.target.value)
                        onChange(e), onChange2(e.target.value)
                      }}
                      placeholder=''
                      error={Boolean(errors.ves_name)}
                      aria-describedby='ves_name'
                    />
                  )}
                />
                {errors.ves_name && (
                  <FormHelperText sx={{ color: 'error.main' }} id='ves_name'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='pkk_no'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label='No PKK Otoritas Pelabuhan:'
                      onChange={onChange}
                      placeholder=''
                      error={Boolean(errors.pkk_no)}
                      aria-describedby='val_pkk_no'
                    />
                  )}
                />
                {errors.pkk_no && (
                  <FormHelperText sx={{ color: 'error.main' }} id='val_pkk_no'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='voy_in'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label={lblVoyageIn}
                      onChange={onChange}
                      error={Boolean(errors.voy_in)}
                      placeholder=''
                      aria-describedby='val_voy_in'
                    />
                  )}
                />
                {errors.voy_in && (
                  <FormHelperText sx={{ color: 'error.main' }} id='val_voy_in'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='voy_out'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <TextField
                      value={value}
                      label={lblVoyageOut}
                      onChange={onChange}
                      error={Boolean(errors.voy_out)}
                      placeholder=''
                      aria-describedby='val_voy_out'
                    />
                  )}
                />
                {errors.voy_out && (
                  <FormHelperText sx={{ color: 'error.main' }} id='val_voy_out'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name='eta'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    selected={value}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={10}
                    showYearDropdown
                    showMonthDropdown
                    dateFormat='dd/MM/yyyy HH:mm'
                    onChange={e => {
                      onChange(e), handleStartDateChange(e)
                    }}
                    placeholderText='DD/MM/YYYY HH:mm'
                    customInput={
                      <CustomInput
                        value={value}
                        onChange={onChange}
                        label='ETA'
                        error={Boolean(errors.eta)}
                        aria-describedby='validation-basic-eta'
                      />
                    }
                  />
                )}
              />
              {errors.eta && (
                <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-eta'>
                  This field is required
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <Controller
                name='etd'
                control={control}
                rules={{ required: true }}
                render={({ field: { value, onChange } }) => (
                  <DatePicker
                    selected={value}
                    showTimeSelect
                    timeFormat='HH:mm'
                    timeIntervals={10}
                    showYearDropdown
                    showMonthDropdown
                    dateFormat='dd/MM/yyyy HH:mm'
                    onChange={e => {
                      onChange(e), handleEndDateChange(e)
                    }}
                    placeholderText='DD/MM/YYYY HH:mm'
                    customInput={
                      <CustomInput
                        value={value}
                        onChange={onChange}
                        label='ETD'
                        error={Boolean(errors.etd)}
                        aria-describedby='validation-basic-eta'
                      />
                    }
                  />
                )}
              />
              {errors.etd && (
                <FormHelperText sx={{ mx: 3.5, color: 'error.main' }} id='validation-basic-etd'>
                  This field is required
                </FormHelperText>
              )}
            </Grid>

            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='negara'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Autocomplete
                      value={field.value}
                      options={pelabuhan}
                      onChange={(event, newValue) => {
                        field.onChange(newValue)
                        handleChange(event, newValue)
                      }}
                      id='autocomplete-controlled'
                      getOptionLabel={option => option.title || ''}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label='Country'
                          error={Boolean(errors.negara)}
                          aria-describedby='validation-basic-select'
                        />
                      )}
                    />
                  )}
                />
                {errors.negara && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-select'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <Controller
                  name='port'
                  control={control}
                  rules={{ required: true }}
                  render={({ field }) => (
                    <Autocomplete
                      value={vNegara === vNegaraPort ? field.value : null}
                      options={vNegara === 'ID' ? portID : portSG}
                      onChange={(event, newValue) => {
                        field.onChange(newValue)
                        handleChange2(event, newValue)
                        setvNegaraPort(vNegara)
                      }}
                      id='autocomplete-controlled2'
                      getOptionLabel={option => option.unlocode || ''}
                      renderInput={params => (
                        <TextField
                          {...params}
                          label='Port'
                          error={vNegara == vNegaraPort ? Boolean(errors.negara) : true}
                          aria-describedby='validation-basic-port'
                        />
                      )}
                    />
                  )}
                />
                {errors.port && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-port'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel
                  id='validation-basic-select'
                  error={Boolean(errors.select)}
                  htmlFor='validation-basic-select'
                >
                  Country
                </InputLabel>
                <Controller
                  name='select'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <Select
                      value={value}
                      label='Country'
                      onChange={onChange}
                      error={Boolean(errors.select)}
                      labelId='validation-basic-select'
                      aria-describedby='validation-basic-select'
                    >
                      <MenuItem value='UK'>UK</MenuItem>
                      <MenuItem value='USA'>USA</MenuItem>
                      <MenuItem value='Australia'>Australia</MenuItem>
                      <MenuItem value='Germany'>Germany</MenuItem>
                    </Select>
                  )}
                />
                {errors.select && (
                  <FormHelperText sx={{ color: 'error.main' }} id='validation-basic-select'>
                    This field is required
                  </FormHelperText>
                )}
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Button size='large' type='submit' variant='contained' onClick={compareDates}>
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
            <DialogContentText id='alert-dialog-description'>{msgError}</DialogContentText>
          </DialogContent>
          <DialogActions className='dialog-actions-dense'>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export default FormPkk
