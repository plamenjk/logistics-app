import { IsString, IsNotEmpty } from 'class-validator';

export class CreateOfficeDto {
  @IsString()
    @IsNotEmpty()
    name!: string;

  @IsString()
    @IsNotEmpty()
    address!: string;

  // Ако искаш допълнителни полета, примерно:
  // @IsString()
  // @IsOptional()
  // phone?: string;
}
