// backend/src/controllers/package.controller.ts
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
  import { PackageService } from '../services/package.service';
  import { CreatePackageDto } from '../dto/create-package.dto';
  import { UpdatePackageDto } from '../dto/update-package.dto';
  import { Package } from '../entities/package.entity';
  
  @Controller('packages')
  export class PackageController {
    constructor(private readonly packageService: PackageService) {}
  
    @Post()
    create(@Body() dto: CreatePackageDto): Promise<Package> {
      return this.packageService.create(dto);
    }
  
    @Get()
    findAll(
      @Query('page') page: string = '1',
      @Query('limit') limit: string = '20',
    ): Promise<{ data: Package[]; total: number }> {
      return this.packageService.findAll(+page, +limit);
    }
  
    @Get(':id')
    findOne(@Param('id') id: string): Promise<Package> {
      return this.packageService.findOne(+id);
    }
  
    @Patch(':id')
    update(
      @Param('id') id: string,
      @Body() dto: UpdatePackageDto,
    ): Promise<Package> {
      return this.packageService.update(+id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string): Promise<void> {
      return this.packageService.remove(+id);
    }
  }
  