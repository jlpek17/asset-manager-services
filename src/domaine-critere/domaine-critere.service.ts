import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DomaineCritere } from './domaine-critere.entity';

@Injectable()
export class DomaineCritereService {
  constructor(
    @InjectRepository(DomaineCritere)
    private readonly domaineCritereRepository: Repository<DomaineCritere>,
  ) {}

  findAll(): Promise<DomaineCritere[]> {
    return this.domaineCritereRepository.find();
  }

  findOne(id: number): Promise<DomaineCritere | null> {
    return this.domaineCritereRepository.findOneBy({ id });
  }

  create(data: Partial<DomaineCritere>): Promise<DomaineCritere> {
    const entity = this.domaineCritereRepository.create(data);
    return this.domaineCritereRepository.save(entity);
  }

  async remove(id: number): Promise<void> {
    await this.domaineCritereRepository.delete(id);
  }
}
