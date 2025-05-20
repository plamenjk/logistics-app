// backend/src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CompanyModule }  from './company.module';
import { ClientModule }   from './client.module';
import { OfficeModule }   from './office.module';
import { PackageModule }  from './package.module';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',                        // спрямо вашата БД
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT! || 5432,
      username: process.env.DB_USER || 'user',
      password: process.env.DB_PASS || 'pass',
      database: process.env.DB_NAME || 'db',
      entities: [__dirname + '/entities/*.entity{.ts,.js}'],
      synchronize: true,                       // само за дев!
    }),
    CompanyModule,
    ClientModule,
    OfficeModule,
    PackageModule,
    EmployeeModule,
  ],
})
export class AppModule {}
