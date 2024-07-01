import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('guest_reg')
export class GuestEntity {
  @PrimaryGeneratedColumn()
  GuestID: number;

  @Column()
  GuestFName: string;

  @Column()
  GuestLName: string;

  @Column()
  GuestEmail: string;

  @Column()
  Password: string;

  @Column()
  PhoneNumber: string;

  @Column()
  DateOfBirth: Date;

  @Column()
  Address: string;

  @Column()
  Reg_Date: Date;
}
