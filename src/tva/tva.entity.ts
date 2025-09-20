import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'tva' })
export class Tva {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'multiplicateur_tva',
    type: 'decimal',
    precision: 3,
    scale: 2,
  })
  multiplicateurTva: number;

  @Column({ name: 'debut_validite', type: 'date' })
  debutValidite: Date;

  @Column({ name: 'fin_validite', type: 'date', nullable: true })
  finValidite?: Date;
}
