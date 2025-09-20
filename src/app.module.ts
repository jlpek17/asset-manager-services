import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DomaineCritere } from './domaine-critere/domaine-critere.entity';
import { TypeCritere } from './type-critere/type-critere.entity';
import { Critere } from './critere/critere.entity';
import { TypeReferent } from './type-referent/type-referent.entity';
import { Referent } from './referent/referent.entity';
import { TypeHebergement } from './type-hebergement/type-hebergement.entity';
import { CodePilotageBudgetaire } from './code-pilotage-budgetaire/code-pilotage-budgetaire.entity';
import { Direction } from './direction/direction.entity';
import { DomaineActif } from './domaine-actif/domaine-actif.entity';
import { Fournisseur } from './fournisseur/fournisseur.entity';
import { NatureAchat } from './nature-achat/nature-achat.entity';
import { Periode } from './periode/periode.entity';
import { Tva } from './tva/tva.entity';
import { Actif } from './actif/actif.entity';
import { ActifCritere } from './actif-critere/actif-critere.entity';
import { ActifReferent } from './actif-referent/actif-referent.entity';
import { Achat } from './achat/achat.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'asset_manager',
      entities: [
        DomaineCritere,
        TypeCritere,
        Critere,
        TypeReferent,
        Referent,
        TypeHebergement,
        CodePilotageBudgetaire,
        Direction,
        DomaineActif,
        Fournisseur,
        NatureAchat,
        Periode,
        Tva,
        Actif,
        ActifCritere,
        ActifReferent,
        Achat,
      ],
      synchronize: true, // Note: Set to false in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
