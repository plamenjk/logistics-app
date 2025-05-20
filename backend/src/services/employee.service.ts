import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDto } from '../dto/create-employee.dto';
import { UpdateEmployeeDto } from '../dto/update-employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly repo: Repository<Employee>,
  ) {}

  async create(dto: CreateEmployeeDto): Promise<Employee> {
    const e = this.repo.create(dto as DeepPartial<Employee>);
    return this.repo.save(e);
  }

  async findAll(
    page = 1,
    limit = 20,
  ): Promise<{ data: Employee[]; total: number }> {
    const [data, total] = await this.repo.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
      relations: ['office'],
    });
    return { data, total };
  }

  async findOne(id: number): Promise<Employee> {
    const e = await this.repo.findOne({ where: { id }, relations: ['office'] });
    if (!e) throw new NotFoundException(`Employee #${id} not found`);
    return e;
  }

  async update(
    id: number,
    dto: UpdateEmployeeDto,
  ): Promise<Employee> {
    await this.repo.update(id, dto as DeepPartial<Employee>);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const res = await this.repo.delete(id);
    if (res.affected === 0) {
      throw new NotFoundException(`Employee #${id} not found`);
    }
  }
}
export function listEmployees(): any {
    throw new Error('Function not implemented.');
}

export function getEmployee(arg0: number) {
    throw new Error('Function not implemented.');
}

export function createEmployee(body: any): any {
    throw new Error('Function not implemented.');
}

export function updateEmployee(arg0: number, body: any) {
    throw new Error('Function not implemented.');
}

export function deleteEmployee(arg0: number) {
    throw new Error('Function not implemented.');
}

