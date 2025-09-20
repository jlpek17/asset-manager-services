import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DomaineCritere } from '../domaine-critere/domaine-critere.entity';

@Entity({ name: 'type_critere' })
export class TypeCritere {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => DomaineCritere, { nullable: false })
  @JoinColumn({ name: 'domaine_id' })
  domaine: DomaineCritere;

  @Column({ name: 'nom_type', type: 'varchar', length: 255 })
  nomType: string;

  @Column({ name: 'poids', type: 'int' })
  poids: number;

  @Column({ name: 'description_type', type: 'longtext', nullable: true })
  descriptionType?: string;
}
