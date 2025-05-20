// backend/src/entities/Office.ts
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Company } from './company.entity';
import { Package } from './package.entity';

@Entity()
export class Office {
  @PrimaryGeneratedColumn()
  id!: number;

  // Не ползвайте union string|undefined
  @Column()
  name!: string;

  @Column()
  address!: string;

  // Ако искате компанията да е задължителна
  @ManyToOne(() => Company, (c) => c.offices, { onDelete: 'CASCADE' })
  company!: Company;

  @OneToMany(() => Package, (p) => p.pickupOffice)
  packages!: Package[];
}
