// backend/src/dto/update-package.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreatePackageDto } from './create-package.dto';

export class UpdatePackageDto extends PartialType(CreatePackageDto) {}
