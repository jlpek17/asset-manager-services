import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DomaineCritere } from './domaine-critere.entity';
import { DomaineCritereService } from './domaine-critere.service';
import { DomaineCritereController } from './domaine-critere.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DomaineCritere])],
  controllers: [DomaineCritereController],
  providers: [DomaineCritereService],
  exports: [DomaineCritereService],
})
export class DomaineCritereModule {}
