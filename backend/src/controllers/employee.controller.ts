// backend/src/controllers/employee.controller.ts
import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Query,
  } from '@nestjs/common';
  
  import { EmployeeService }      from '../services/employee.service';
  import { CreateEmployeeDto }    from '../dto/create-employee.dto';
  import { UpdateEmployeeDto }    from '../dto/update-employee.dto';
  import { Employee }             from '../entities/employee.entity';
  
  @Controller('employees')
  export class EmployeeController {
    constructor(private readonly employeeService: 
       EmployeeService) {}

    @Post()
    create(@Body() dto: CreateEmployeeDto): Promise<Employee> {
      return this.employeeService.create(dto);
    }
  
    @Get()
    findAll(
      @Query('page') page: string = '1',
      @Query('limit') limit: string = '20',
    ) {
      return this.employeeService.findAll(+page, +limit);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Employee> {
      return this.employeeService.findOne(+id);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() dto: UpdateEmployeeDto,
    ): Promise<Employee> {
      return this.employeeService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.employeeService.remove(+id);
    }
  }
  