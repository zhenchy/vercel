import { Card, CardHeader } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import { ChangeEvent, useState } from 'react'
import CustomNoRowsOverlay from 'src/layouts/components/rpkop/CustomNoRowsOverlay'
import CustomPaginationBtn from 'src/layouts/components/rpkop/CustomPaginationBtn'
import QuickSearchToolbar from './QuickSearchToolbar'

const escapeRegExp = (value: string) => {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&')
}

const TableFilterColumn = (props: {
  title: string
  rows: any[]
  columns: []
  isExport?: boolean
  alignContent?: string
  isLoading?: boolean,

  //  onRowSelected: any
}) => {
  const { title, rows, columns, isExport = true, alignContent = 'space-between', isLoading = false } = props
  const [searchText, setSearchText] = useState<string>('')
  const [filteredData, setFilteredData] = useState([])


  const handleSearch = (searchValue: string) => {
    setSearchText(searchValue)
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i')
    const filteredRows: any = props.rows.filter((row: any) => {
      return Object.keys(row).some(field => {
        // @ts-ignore
        return searchRegex.test(row[field].toString())
      })
    })
    if (searchValue.length) {
      setFilteredData(filteredRows)
    } else {
      setFilteredData([])
    }
  }

  // const handleRowClick = (params: any) => {
  //   const selectedRow = rows.find((row: any) => row.id === params.id)
  //   // props.onRowSelected(selectedRow)
  //   console.log(selectedRow)

  //   // props.onRowSelected(selectedRow)
  // }

  return (
    <Card>
      <CardHeader title={title} />
      <DataGrid
        loading={isLoading}
        autoHeight
        rows={filteredData.length ? filteredData : rows}
        columns={columns}

        // onRowClick={handleRowClick}
        pageSizeOptions={[5, 10, 25, 50]}
        slots={{
          toolbar: QuickSearchToolbar,
          pagination: CustomPaginationBtn,
          noRowsOverlay: CustomNoRowsOverlay
        }}
        slotProps={{
          baseButton: {
            variant: 'outlined'
          },
          toolbar: {
            value: searchText,
            clearSearch: () => handleSearch(''),
            onChange: (event: ChangeEvent<HTMLInputElement>) => handleSearch(event.target.value),
            isExport: isExport,
            alignContent: alignContent
          }
        }}
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } }
        }}
      />
    </Card>
  )
}

export default TableFilterColumn
