// backend/src/dto/create-package.dto.ts
import { IsNumber, IsEnum, IsOptional } from 'class-validator';
import { PackageStatus } from '../entities/package.entity';

export class CreatePackageDto {
  @IsNumber()
    senderId!: number;

  @IsNumber()
    recipientId!: number;

  @IsNumber()
    weight!: number;

  @IsNumber()
    price!: number;

  @IsEnum(PackageStatus)
  @IsOptional()
  status?: PackageStatus;

  @IsNumber()
    pickupOfficeId!: number;

  @IsNumber()
  @IsOptional()
  createdById?: number;
}
