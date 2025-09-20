import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'periode' })
export class Periode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_periode', type: 'varchar', length: 15 })
  nomPeriode: string;
}
