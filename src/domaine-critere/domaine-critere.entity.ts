import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'domaine_critere' })
export class DomaineCritere {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_domaine', type: 'varchar', length: 255 })
  nomDomaine: string;

  @Column({ name: 'description_domaine', type: 'longtext', nullable: true })
  descriptionDomaine?: string;
}
