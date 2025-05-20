import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Package } from '../entities/package.entity';
import { CreatePackageDto } from '../dto/create-package.dto';
import { UpdatePackageDto } from '../dto/update-package.dto';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package)
    private readonly repo: Repository<Package>,
  ) {}

  /** Създава нова пратка */
  async create(dto: CreatePackageDto): Promise<Package> {
    const p = this.repo.create(dto as Partial<Package>);
    return this.repo.save(p);
  }

  /** Връща странирана листа с всички пратки */
  async findAll(
    page = 1,
    limit = 20,
  ): Promise<{ data: Package[]; total: number }> {
    const [data, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['sender', 'recipient', 'pickupOffice', 'createdBy'],
    });
    return { data, total };
  }

  /** Връща една пратка или хвърля 404 */
  async findOne(id: number): Promise<Package> {
    const p = await this.repo.findOne({
      where: { id },
      relations: ['sender', 'recipient', 'pickupOffice', 'createdBy'],
    });
    if (!p) throw new NotFoundException(`Package #${id} not found`);
    return p;
  }

  /** Актуализира пратка или хвърля 404 */
  async update(
    id: number,
    dto: UpdatePackageDto,
  ): Promise<Package> {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  /** Изтрива пратка или хвърля 404 */
  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`Package #${id} not found`);
    }
  }
}
export function listPackages(): any {
    throw new Error('Function not implemented.');
}

export function getPackage(arg0: number) {
    throw new Error('Function not implemented.');
}

export function createPackage(body: any): any {
    throw new Error('Function not implemented.');
}

export function updatePackage(arg0: number, body: any) {
    throw new Error('Function not implemented.');
}

export function deletePackage(arg0: number) {
    throw new Error('Function not implemented.');
}

