import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'direction' })
export class Direction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_direction', type: 'varchar', length: 255 })
  nomDirection: string;
}
