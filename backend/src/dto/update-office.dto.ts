// backend/src/dto/update-office.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateOfficeDto } from './create-office.dto';

export class UpdateOfficeDto extends PartialType(CreateOfficeDto) {}
