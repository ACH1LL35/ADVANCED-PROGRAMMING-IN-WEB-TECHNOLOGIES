import { Controller, Get, Param, Query } from "@nestjs/common";
import { GuestService } from "./guest.service";

@Controller('guest')
export class GuestController{
    constructor (private readonly GuestService: GuestService){}

    @Get()
    getCourse(): object{
        return this.GuestService.getCourse();
    }

    @Get('getcoursebyid/:id')
    getCourseById(@Param('id') id:number ): object{
        return this.GuestService.getCourseById(id);
    }

    @Get('getcoursebyname')
    getCourseByName(@Query('name') name: string): object{
        return this.GuestService.getCourseByName(name);
    }

    @Get('getinstructorbyid/:id')
    getinstructorById(@Param('id') id:number ): object{
        return this.GuestService.getInstructorById(id);
    }

    @Get('getinstructorbyname')
    getInstructorByName(@Query('name') name: string): object{
        return this.GuestService.getinstructorByName(name);
    }
}