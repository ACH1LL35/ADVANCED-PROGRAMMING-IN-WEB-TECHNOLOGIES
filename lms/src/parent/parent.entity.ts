// parent.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryGeneratedColumn()
  ParentsID: number;

  @Column()
  Fname: string;

  @Column()
  Lname: string;

  @Column()
  Email: string;

  @Column()
  Mobile: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  RegistrationDate: Date;

  @Column()
  Password: string; // Add password field
}