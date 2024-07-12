import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { Url } from "url";


@Entity("guest_reg")
export class GuestEntity{
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
    DateOfBirth: Date

    @Column()
    Address: string;

    @Column()
    SocialHandle: string;

    @Column()
    Reg_Date: Date;

}