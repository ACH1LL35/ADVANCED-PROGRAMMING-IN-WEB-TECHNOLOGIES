import { Entity, PrimaryColumn, Column, BeforeInsert } from 'typeorm';

@Entity()
export class Parent {
  @PrimaryColumn({ type: 'varchar', length: 5 })
  id: string;

  @Column({ length: 100, unique: true })
  username: string;

  @Column({ length: 150 })
  fullName: string;

  @Column({ default: false })
  isActive: boolean;

  @BeforeInsert()
  generateId() {
    this.id = Math.random().toString(36).substring(2, 7);
  }
}
