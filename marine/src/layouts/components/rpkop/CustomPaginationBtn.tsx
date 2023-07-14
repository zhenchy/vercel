// import React from 'react'
// import { gridPageCountSelector, GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid'
// import MuiPagination from '@mui/material/Pagination'
// import { TablePaginationProps } from '@mui/material/TablePagination'

// function Pagination({
//   page,
//   onPageChange,
//   className
// }: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
//   const apiRef = useGridApiContext()
//   const pageCount = useGridSelector(apiRef, gridPageCountSelector)

//   return (
//     <MuiPagination
//       color='primary'
//       shape='rounded'
//       className={className}
//       count={pageCount}
//       page={page + 1}
//       onChange={(event, newPage) => {
//         onPageChange(event as any, newPage - 1)
//       }}
//     />
//   )
// }

// const CustomPaginationBtn = (props: any) => {
//   return <GridPagination ActionsComponent={Pagination} {...props} />
// }

// export default CustomPaginationBtn

import React from 'react';
import { GridPagination, useGridApiContext, useGridSelector } from '@mui/x-data-grid';
import MuiPagination from '@mui/material/Pagination';
import { TablePaginationProps } from '@mui/material/TablePagination';

function Pagination({
  page,
  onPageChange,
  className,
  rowCount,
  pageSize
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'> & {
  rowCount: number;
  pageSize: number;
}) {
  const pageCount = Math.ceil(rowCount / pageSize);

  return (
    <MuiPagination
      color="primary"
      shape="rounded"
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

const CustomPaginationBtn = (props: any) => {
  const apiRef = useGridApiContext();
  const pageSize = useGridSelector(apiRef, (state) => state.pagination.paginationModel.pageSize);
  const totalRowCount = useGridSelector(apiRef, (state) => state.rows.totalRowCount);

  return (
    <GridPagination
      ActionsComponent={(paginationProps) => (
        <Pagination rowCount={totalRowCount} pageSize={pageSize} {...paginationProps} />
      )}
      {...props}
    />
  );
};

export default CustomPaginationBtn;



