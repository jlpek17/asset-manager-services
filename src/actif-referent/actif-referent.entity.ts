import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Actif } from '../actif/actif.entity';
import { Referent } from '../referent/referent.entity';
import { TypeReferent } from '../type-referent/type-referent.entity';

@Entity('actif_referent')
export class ActifReferent {
  @PrimaryColumn({ name: 'referent_id', type: 'int' })
  referentId: number;

  @PrimaryColumn({ name: 'type_referent_id', type: 'int' })
  typeReferentId: number;

  @PrimaryColumn({ name: 'actif_id', type: 'int' })
  actifId: number;

  @ManyToOne(() => Referent, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'referent_id' })
  referent: Referent;

  @ManyToOne(() => TypeReferent, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'type_referent_id' })
  typeReferent: TypeReferent;

  @ManyToOne(() => Actif, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actif_id' })
  actif: Actif;
}
