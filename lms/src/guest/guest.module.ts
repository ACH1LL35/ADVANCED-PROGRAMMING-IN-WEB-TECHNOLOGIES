import { Module } from "@nestjs/common";
import GuestController from "./guest.controller";
import { GuestService } from "./guest.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuestEntity } from "./guest.entity";


@Module({
    imports: [GuestModule, TypeOrmModule.forFeature([GuestEntity]),],
    controllers: [GuestController],
    providers: [GuestService],

})

export class GuestModule{}