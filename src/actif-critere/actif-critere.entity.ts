import { Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Actif } from '../actif/actif.entity';
import { Critere } from '../critere/critere.entity';

@Entity({ name: 'actif_critere' })
export class ActifCritere {
  @PrimaryColumn({ name: 'actif_id', type: 'int' })
  actifId: number;

  @PrimaryColumn({ name: 'critere_id', type: 'int' })
  critereId: number;

  @ManyToOne(() => Actif, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'actif_id' })
  actif: Actif;

  @ManyToOne(() => Critere, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'critere_id' })
  critere: Critere;
}
