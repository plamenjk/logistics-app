import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Package } from './Package';

@Entity()
export class Client {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column({ unique: true })
  email!: string;

  @OneToMany(() => Package, pkg => pkg.sender)
  sentPackages!: Package[];

  @OneToMany(() => Package, pkg => pkg.recipient)
  receivedPackages!: Package[];
}
