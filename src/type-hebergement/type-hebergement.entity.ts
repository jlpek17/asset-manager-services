import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'type_hebergement' })
export class TypeHebergement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_type', type: 'varchar', length: 50 })
  nomType: string;
}
