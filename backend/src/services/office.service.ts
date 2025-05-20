// backend/src/services/office.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Office } from '../entities/office.entity';
import { CreateOfficeDto } from '../dto/create-office.dto';
import { UpdateOfficeDto } from '../dto/update-office.dto';

@Injectable()
export class OfficeService {
  constructor(
    @InjectRepository(Office)
    private readonly repo: Repository<Office>,
  ) {}

  async create(dto: CreateOfficeDto): Promise<Office> {
    const office = this.repo.create(dto);
    return this.repo.save(office);
  }

  async findAll(
    page = 1,
    limit = 20,
  ): Promise<{ data: Office[]; total: number }> {
    const [data, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['company'],
    });
    return { data, total };
  }

  async findOne(id: number): Promise<Office> {
    const office = await this.repo.findOne({ where: { id }, relations: ['company'] });
    if (!office) throw new NotFoundException(`Office #${id} not found`);
    return office;
  }

  async update(
    id: number,
    dto: UpdateOfficeDto,
  ): Promise<Office> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`Office #${id} not found`);
    }
  }
}
export function listOffices(): any {
    throw new Error('Function not implemented.');
}

export function getOffice(arg0: number) {
    throw new Error('Function not implemented.');
}

export function createOffice(body: any): any {
    throw new Error('Function not implemented.');
}

export function updateOffice(arg0: number, body: any) {
    throw new Error('Function not implemented.');
}

export function deleteOffice(arg0: number) {
    throw new Error('Function not implemented.');
}

