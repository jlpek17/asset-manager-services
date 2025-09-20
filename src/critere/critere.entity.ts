import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TypeCritere } from '../type-critere/type-critere.entity';

@Entity({ name: 'critere' })
export class Critere {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TypeCritere, { nullable: false })
  @JoinColumn({ name: 'type_id' })
  type: TypeCritere;

  @Column({ name: 'nom_critere', type: 'varchar', length: 255 })
  nomCritere: string;

  @Column({ name: 'note', type: 'int' })
  note: number;
}
