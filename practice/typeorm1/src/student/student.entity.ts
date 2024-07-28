import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  fullName: string;

  @Column({ unsigned: true })
  age: number;

  @Column()
  status: string;
}
