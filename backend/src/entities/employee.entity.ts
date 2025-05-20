import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Office } from './office.entity';

export enum EmployeeRole {
  COURIER = 'courier',
  OFFICE = 'office',
}

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  @Column({ type: 'enum', enum: EmployeeRole })
  role!: EmployeeRole;

  @ManyToOne(() => Office, (o) => o.packages, { nullable: true })
  office?: Office;
}
