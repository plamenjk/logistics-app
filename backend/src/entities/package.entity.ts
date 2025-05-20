import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Client } from './client.entity';
import { Employee } from './employee.entity';
import { Office } from './office.entity';

export enum PackageStatus {
  PENDING   = 'pending',
  SHIPPED   = 'shipped',
  DELIVERED = 'delivered',
}

@Entity()
export class Package {
  @PrimaryGeneratedColumn()
  id!: number;

  @ManyToOne(() => Client, (c) => c.sentPackages, { eager: true })
  sender!: Client;

  @ManyToOne(() => Client, (c) => c.receivedPackages, { eager: true })
  recipient!: Client;

  // Тегло на пратката
  @Column('float')
  weight!: number;

  @Column('float')
  price!: number;

  @Column({ type: 'enum', enum: PackageStatus, default: PackageStatus.PENDING })
  status!: PackageStatus;

  @ManyToOne(() => Office, (o) => o.packages, { eager: true })
  pickupOffice!: Office;

  @ManyToOne(() => Employee, { nullable: true, eager: true })
  createdBy?: Employee;

  @CreateDateColumn()
  createdAt!: Date;
}
