import { Body, Controller, Get, Param, Post, Query, UseInterceptors } from "@nestjs/common";
import { GuestService } from "./guest.service";
import { PostDto, SupportDto } from "./guest.dto";

@Controller('guest')
export default class GuestController{
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

    @Post('contactsupport')
    async ContactSupport(@Body() SupportDto: SupportDto) {
    console.log('Received Support Data:', SupportDto);

    return {
      message: 'Ticket Submitted successfully',
      user: SupportDto,
    };
    }

    @Post('forumpost')
    async forumPost(@Body() PostDto: PostDto) {
    console.log('Received Post Data:', PostDto);

    return {
      message: 'Post created successfully',
      user: PostDto,
    };
    }
}