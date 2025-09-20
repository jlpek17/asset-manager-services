import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'fournisseur' })
export class Fournisseur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom_denomination', type: 'varchar', length: 255 })
  nomDenomination: string;

  @Column({ name: 'contact_nom', type: 'varchar', length: 50, nullable: true })
  contactNom?: string;

  @Column({
    name: 'contact_prenom',
    type: 'varchar',
    length: 50,
    nullable: true,
  })
  contactPrenom?: string;
}
