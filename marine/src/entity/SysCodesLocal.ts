import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('SYS_CODES_LOCAL')
export class SysCodesLocal {
  @PrimaryColumn({ name: 'CODE_TP' })
  code_tp!: string;

  @PrimaryColumn({ name: 'CODE_REF' })
  code_ref!: string;

  @Column({ name: 'DESCR' })
  descr!: string;

}
