// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'

// ** Custom Components Imports
import PageHeader from 'src/@core/components/page-header'

// ** Demo Components Imports

import FormValidationBasic from 'src/views/pkk/form'
import TableFilter from 'src/views/table/data-grid/TableFilter'

import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const DataGrid = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={6}>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='http://localhost:3000/apps/pkk/' target=''>
                PKK - Pemberitahuan Kedatangan Kapal
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Vessel Apointment</Typography>}
        />

        <Grid item xs={12}>
          <FormValidationBasic />
        </Grid>

        <Grid item xs={12}>
          <TableFilter />
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default DataGrid
