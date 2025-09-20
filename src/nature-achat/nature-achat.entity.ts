import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'nature_achat' })
export class NatureAchat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'code_nature', type: 'varchar', length: 15 })
  codeNature: string;

  @Column({ name: 'libelle_nature', type: 'varchar', length: 255 })
  libelleNature: string;
}
