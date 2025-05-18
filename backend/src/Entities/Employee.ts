import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Office } from './Office';
import { Package } from './Package';

export type Role = 'courier' | 'office';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ type: 'enum', enum: ['courier', 'office'], default: 'office' })
  role!: Role;

  @ManyToOne(() => Office, office => office.employees)
  office!: Office;

  @OneToMany(() => Package, pkg => pkg.registeredBy)
  handledPackages!: Package[];
}
