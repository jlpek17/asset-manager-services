import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'code_pilotage_budgetaire' })
export class CodePilotageBudgetaire {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'code_pilotage', type: 'varchar', length: 15 })
  codePilotage: string;
}
