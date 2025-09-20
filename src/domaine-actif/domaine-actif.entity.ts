import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'domaine_actif' })
export class DomaineActif {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_domaine', type: 'varchar', length: 255 })
  nomDomaine: string;
}
