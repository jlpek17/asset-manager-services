import { Controller, Get } from '@nestjs/common';
import { DomaineCritereService } from './domaine-critere.service';

@Controller('domaine-critere')
export class DomaineCritereController {
  constructor(private readonly domaineCritereService: DomaineCritereService) {}

  @Get()
  async findAll() {
    return this.domaineCritereService.findAll();
  }
}
