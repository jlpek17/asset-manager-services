import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { NatureAchat } from '../nature-achat/nature-achat.entity';
import { Periode } from '../periode/periode.entity';
import { Tva } from '../tva/tva.entity';
import { Actif } from '../actif/actif.entity';

@Entity('achat')
export class Achat {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => NatureAchat, { nullable: true })
  @JoinColumn({ name: 'nature_achat_id' })
  natureAchat: NatureAchat;

  @ManyToOne(() => Periode, { nullable: true })
  @JoinColumn({ name: 'periode_id' })
  periode: Periode;

  @ManyToOne(() => Tva, { nullable: false })
  @JoinColumn({ name: 'tva_id' })
  tva: Tva;

  @ManyToOne(() => Actif, { nullable: false })
  @JoinColumn({ name: 'actif_id' })
  actif: Actif;

  @Column({ name: 'num_buyer', type: 'varchar', length: 15, nullable: true })
  numBuyer: string;

  @Column({ name: 'num_cde', type: 'varchar', length: 15, nullable: true })
  numCde: string;

  @Column({ name: 'date_da', type: 'date', nullable: true })
  dateDa: Date;

  @Column({
    name: 'montant_ttc',
    type: 'decimal',
    precision: 12,
    scale: 4,
    nullable: true,
  })
  montantTtc: string;

  @Column({ name: 'debut_quote_part', type: 'date', nullable: true })
  debutQuotePart: Date;

  @Column({ name: 'fin_quote_part', type: 'date', nullable: true })
  finQuotePart: Date;

  @Column({
    name: 'cout_ht_quote_part',
    type: 'decimal',
    precision: 12,
    scale: 4,
    nullable: true,
  })
  coutHtQuotePart: string;

  @Column({
    name: 'cout_ttc_quote_part',
    type: 'decimal',
    precision: 12,
    scale: 4,
    nullable: true,
  })
  coutTtcQuotePart: string;

  @Column({ name: 'created_at', type: 'datetime' })
  createdAt: Date;

  @Column({ name: 'updated_at', type: 'datetime' })
  updatedAt: Date;
}
