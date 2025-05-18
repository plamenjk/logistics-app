import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    CreateDateColumn
  } from 'typeorm';
  import { Client } from './Client';
  import { Office } from './Office';
  import { Employee } from './Employee';
  
  export type PackageStatus = 'sent' | 'in_transit' | 'delivered';
  
  @Entity()
  export class Package {
    @PrimaryGeneratedColumn()
    id!: number;
  
    @ManyToOne(() => Client, client => client.sentPackages)
    sender!: Client;
  
    @ManyToOne(() => Client, client => client.receivedPackages)
    recipient!: Client;
  
    @ManyToOne(() => Office, office => office.packages)
    pickupOffice!: Office;
  
    @Column()
    deliveryAddress!: string;
  
    @Column('float')
    weight!: number;
  
    @Column('float')
    price!: number;
  
    @Column({ type: 'enum', enum: ['sent','in_transit','delivered'], default: 'sent' })
    status!: PackageStatus;
  
    @ManyToOne(() => Employee, emp => emp.handledPackages)
    registeredBy!: Employee;
  
    @CreateDateColumn()
    createdAt!: Date;
  }
  