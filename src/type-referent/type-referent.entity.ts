import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'type_referent' })
export class TypeReferent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_type', type: 'varchar', length: 50 })
  nomType: string;
}
