import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity("guest")
export class GuestEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    Password: string;

}