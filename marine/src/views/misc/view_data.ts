export interface FormErrors {
  [key: string]: string | undefined
}

export interface ViewDataOnlyProps {
  json_data: any
  json_data1: any
}

export interface ViewDataAndDataChangeOnlyProps {
  json_data: any
  json_data1: any
  onDataChange: (updatedData: any) => void
}

export interface ViewDataProps {
  json_data: any
  json_data1: any
  onDataChange: (updatedData: any) => void
  onDataDelete: (updatedData: any) => void
  selectedData: any
  onRowSelected: (data: any) => void
}

export type YardBlockProps = {
  YARD_BLOCK: string
  YARD_SLOT: number
  YARD_ROW: number
  YARD_BLOCK_NAME: string
  X: number
  Y: number
  PHYS_VIRTUAL: string
  YARD_TIER: number
  YARD_DESC: string
  HORZ_VERT: string
  CRT_TS: string
  CRT_BY: string
  UPD_TS: string
  UPD_BY: string
  TRUCK_LANE: string
  SLOT_START: string
  TEUS_AVA: number
  TEUS_USED: number
  tierColor: string
  updateURL: string
  startY: number
  isSelected: boolean
  onDoubleClick: (e: any) => void
}

export type YardSlotProps = {
  YARD_BLOCK: string
  YARD_SLOT: number
  YARD_ROW: number
  YARD_TIER: number
  X: number
  Y: number
  WIDTH: number
  HEIGHT: number
  COLOR: string
  isSelected: boolean
  onDoubleClick: (e: any) => void
}
