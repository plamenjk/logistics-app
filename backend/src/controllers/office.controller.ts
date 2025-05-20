// backend/src/controllers/office.controller.ts
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
  import { OfficeService } from '../services/office.service';
  import { CreateOfficeDto } from '../dto/create-office.dto';
  import { UpdateOfficeDto } from '../dto/update-office.dto';
  import { Office } from '../entities/office.entity';
  
  @Controller('offices')
  export class OfficeController {
    constructor(private readonly officeService: OfficeService) {}
  
    @Post()
    create(@Body() dto: CreateOfficeDto): Promise<Office> {
      return this.officeService.create(dto);
    }
  
    @Get()
    findAll(
      @Query('page') page: string = '1',
      @Query('limit') limit: string = '20',
    ): Promise<{ data: Office[]; total: number }> {
      return this.officeService.findAll(+page, +limit);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Office> {
      return this.officeService.findOne(+id);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() dto: UpdateOfficeDto,
    ): Promise<Office> {
      return this.officeService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.officeService.remove(+id);
    }
  }
  