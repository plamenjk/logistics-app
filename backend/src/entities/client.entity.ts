import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Package } from './package.entity';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;
  @Column({ unique: true })
  email!: string;

  @OneToMany(() => Package, (p) => p.sender)
  sentPackages!: Package[];
  @OneToMany(() => Package, (p) => p.recipient)
  receivedPackages!: Package[];
}
