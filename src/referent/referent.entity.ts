import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'referent' })
export class Referent {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'nom', type: 'varchar', length: 50 })
  nom: string;

  @Column({ name: 'prenom', type: 'varchar', length: 50 })
  prenom: string;

  @Column({ name: 'email', type: 'varchar', length: 100 })
  email: string;
}
