import { Injectable } from '@nestjs/common';
import { DomaineCritereService } from './domaine-critere/domaine-critere.service';

@Injectable()
export class AppService {
  constructor(private readonly domaineCritereService: DomaineCritereService) {}

  async getHello(): Promise<{ message: string; domaineCritere: any }> {
    const domaineCritere = await this.domaineCritereService.findAll();
    return {
      message: 'Hello World!',
      domaineCritere,
    };
  }
}
