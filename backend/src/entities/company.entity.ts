import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Office } from './office.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  name!: string;
  @Column({ nullable: true }) address?: string;

  @OneToMany(() => Office, (office) => office.company)
  offices!: Office[];
}
