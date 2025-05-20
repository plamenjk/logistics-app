// backend/src/dto/create-employee.dto.ts
import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEmployeeDto {
  @IsString() @IsNotEmpty()
    firstName!: string;

  @IsString() @IsNotEmpty()
    lastName!: string;

  @IsEmail()
    email!: string;

  @IsString() @IsNotEmpty()
    position!: string;
}
