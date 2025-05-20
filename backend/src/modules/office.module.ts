// backend/src/office.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Office }           from '../entities/office.entity';
import { OfficeService }    from '../services/office.service';
import { OfficeController } from '../controllers/office.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Office])],
  providers: [OfficeService],
  controllers: [OfficeController],
  exports: [OfficeService],
})
export class OfficeModule {}
