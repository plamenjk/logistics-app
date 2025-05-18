import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Company } from './Company';
import { Employee } from './Employee';
import { Package } from './Package';

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  address!: string;

  @ManyToOne(() => Company, company => company.offices)
  company!: Company;

  @OneToMany(() => Employee, emp => emp.office)
  employees!: Employee[];

  @OneToMany(() => Package, pkg => pkg.pickupOffice)
  packages!: Package[];
}
