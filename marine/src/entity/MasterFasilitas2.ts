import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm"
import { SysCodesLocal } from "./SysCodesLocal"

@Entity({ name: 'MASTER_FASILITAS' })
export class MasterFasilitas {
  @PrimaryColumn({ name: 'FASILITAS_ID', length: 6 })
  FASILITAS_ID: string

  @Column({ name: 'JN_FAS',  nullable: true })
  JN_FAS: string

  @Column({ name: 'NM_FAS', nullable: true })
  NM_FAS: string


  @Column({ name: 'STATUSAA', nullable: true })
  STATUSAA: string

  @Column({ name: 'STATUS', nullable: true })
  STATUS: string

   @ManyToOne(()=> SysCodesLocal)
   @JoinColumn([{ name: 'JN_FAS', referencedColumnName: 'code_ref' }])
   SysCodesLocal: SysCodesLocal

}

