import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { TypeHebergement } from '../type-hebergement/type-hebergement.entity';
import { Direction } from '../direction/direction.entity';
import { DomaineActif } from '../domaine-actif/domaine-actif.entity';
import { CodePilotageBudgetaire } from '../code-pilotage-budgetaire/code-pilotage-budgetaire.entity';
import { Fournisseur } from '../fournisseur/fournisseur.entity';

@Entity({ name: 'actif' })
export class Actif {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TypeHebergement, { nullable: true })
  @JoinColumn({ name: 'type_hebergement_id' })
  typeHebergement?: TypeHebergement;

  @ManyToOne(() => Direction, { nullable: true })
  @JoinColumn({ name: 'direction_id' })
  direction?: Direction;

  @ManyToOne(() => DomaineActif, { nullable: true })
  @JoinColumn({ name: 'domaine_actif_id' })
  domaineActif?: DomaineActif;

  @ManyToOne(() => CodePilotageBudgetaire, { nullable: true })
  @JoinColumn({ name: 'cpb_id' })
  cpb?: CodePilotageBudgetaire;

  @ManyToOne(() => Fournisseur, { nullable: true })
  @JoinColumn({ name: 'fournisseur_id' })
  fournisseur?: Fournisseur;

  @Column({ name: 'nom', type: 'varchar', length: 255 })
  nom: string;

  @Column({ name: 'description', type: 'varchar', length: 255, nullable: true })
  description?: string;

  @Column({
    name: 'valeur_metier',
    type: 'decimal',
    precision: 3,
    scale: 2,
    nullable: true,
  })
  valeurMetier?: number;

  @Column({
    name: 'criticite_it',
    type: 'decimal',
    precision: 3,
    scale: 2,
    nullable: true,
  })
  criticiteIt?: number;

  @Column({
    name: 'criticite_globale',
    type: 'decimal',
    precision: 3,
    scale: 2,
    nullable: true,
  })
  criticiteGlobale?: number;

  @Column({ name: 'slug', type: 'varchar', length: 255, unique: true })
  slug: string;

  @Column({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;

  @Column({ name: 'date_entree_run', type: 'date', nullable: true })
  dateEntreeRun?: Date;

  @Column({ name: 'date_sortie_run', type: 'date', nullable: true })
  dateSortieRun?: Date;
}
