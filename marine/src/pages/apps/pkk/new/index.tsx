import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material'
import { useState } from 'react'
import DatePicker, { ReactDatePickerProps } from 'react-datepicker'
import CustomInput from './component/PickersComponent'
import { DateType } from 'src/types/forms/reactDatepickerTypes'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

export default function Entry({ popperPlacement }: { popperPlacement: ReactDatePickerProps['popperPlacement'] }) {
  const [dateFormat, setDateFormat] = useState<DateType>(new Date())

  return (
    <Card>
      <CardHeader title='PKK'></CardHeader>
      <CardContent>
        <form>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField fullWidth placeholder='Nama Kapal' label='Nama Kapal*' InputLabelProps={{ shrink: true }} />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder='PKK Otoritas Pelabuhan'
                label='No PKK Otoritas Pelabuhan (Manual) *'
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder='NO BC 1.1'
                label='BC 1.1*'
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <DatePickerWrapper>
                <DatePicker
                  selected={dateFormat}
                  dateFormat={'dd/MM/yyyy'}
                  id='basic-input'
                  onChange={(dateFormat: Date) => setDateFormat(dateFormat)}
                  popperPlacement={popperPlacement}
                  placeholderText='dd/mm/yyyy'
                  customInput={<CustomInput label='Tanggal BC 1.1*'></CustomInput>}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid item xs={12}>
              <DatePickerWrapper>
                <DatePicker
                  selected={dateFormat}
                  dateFormat={'dd/MM/yyyy'}
                  id='basic-input'
                  onChange={(dateFormat: Date) => setDateFormat(dateFormat)}
                  popperPlacement={popperPlacement}
                  placeholderText='dd/mm/yyyy'
                  customInput={<CustomInput label='Batal Awal Pembuatan Job Order*'></CustomInput>}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid item xs={12}>
              <DatePickerWrapper>
                <DatePicker
                  selected={dateFormat}
                  dateFormat={'dd/MM/yyyy'}
                  id='basic-input'
                  onChange={(dateFormat: Date) => setDateFormat(dateFormat)}
                  popperPlacement={popperPlacement}
                  placeholderText='dd/mm/yyyy'
                  customInput={<CustomInput label='Batal Akhir Pembuatan Job Order*'></CustomInput>}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth placeholder='Voy In' label='Voy In*' InputLabelProps={{ shrink: true }}></TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                placeholder='Voy Out'
                label='Voy Out*'
                InputLabelProps={{ shrink: true }}
              ></TextField>
            </Grid>
            <Grid item xs={12}>
              <DatePickerWrapper>
                <DatePicker
                  selected={dateFormat}
                  dateFormat={'dd/MM/yyyy'}
                  id='basic-input'
                  onChange={(dateFormat: Date) => setDateFormat(dateFormat)}
                  popperPlacement={popperPlacement}
                  placeholderText='dd/mm/yyyy'
                  customInput={<CustomInput label='Tanggal Tiba*'></CustomInput>}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid item xs={12}>
              <DatePickerWrapper>
                <DatePicker
                  selected={dateFormat}
                  dateFormat={'dd/MM/yyyy'}
                  id='basic-input'
                  onChange={(dateFormat: Date) => setDateFormat(dateFormat)}
                  popperPlacement={popperPlacement}
                  placeholderText='dd/mm/yyyy'
                  customInput={<CustomInput label='Tanggal Berangkat*'></CustomInput>}
                />
              </DatePickerWrapper>
            </Grid>
            <Grid>{/* <Autocomplete sx={{ width: 250 }} id='autocomplete-outlined' options={}></Autocomplete> */}</Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}
