import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Office } from './Office';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;

  @OneToMany(() => Office, office => office.company)
  offices!: Office[];
}
