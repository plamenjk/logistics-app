// backend/src/employee.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Employee } from '../entities/employee.entity';
import { EmployeeService } from '../services/employee.service';
import { EmployeeController } from '../controllers/employee.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
  ],
  providers: [EmployeeService],
  controllers: [EmployeeController],
  exports: [EmployeeService], // ако искаш да го ползваш в други модули
})
export class EmployeeModule {}
