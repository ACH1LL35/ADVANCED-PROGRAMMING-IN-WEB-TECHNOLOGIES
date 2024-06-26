import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query, UsePipes, ValidationPipe } from "@nestjs/common";
import { GuestService } from "./guest.service";
import { GuestRegistrationDTO, InstructorDTO, NoteDto, PostDto, SupportDto } from "./guest.dto";

@Controller('guest')
export default class GuestController{
    constructor (private readonly GuestService: GuestService){}

    @Post('registerguest')
    @UsePipes(new ValidationPipe())
    registerGuest(@Body() GuestRegistrationDTO: GuestRegistrationDTO): object {
      return this.GuestService.registerGuest(GuestRegistrationDTO);
    }

    @Get('getcourse')
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

    @Get('getinstructorByName')
    @UsePipes(new ValidationPipe())
    getInstructorByName(@Query() query: InstructorDTO): InstructorDTO {
      return {
        InstructorID: query.InstructorID,
        InstructorName: query.InstructorName,
        InstructorEmail: query.InstructorEmail,
        InstructorJoinDate: query.InstructorJoinDate,
        // InstructorSocialHandle: query.InstructorSocialHandle,
        InstructorDes: query.InstructorDes,
        InstructorStat: query.InstructorStat
    }
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

    @Post('guestnote')
    async guestNote(@Body() NoteDto: NoteDto) {
    console.log('Received Note Data:', NoteDto);

    return {
      message: 'Note created successfully',
      user: NoteDto,
    };
    }

    @Put('updatenote/:id')
  async updateNote(
    @Param('id') id: string,
    @Body() updateNoteDto: Partial<NoteDto>
  ) {
    console.log('Updating Note ID:', id);
    console.log('Received Updated Note Data:', updateNoteDto);

    // Simulate updating the note
    return {
      message: 'Note updated successfully',
      noteId: id,
      updatedData: updateNoteDto,
    };
  }

  @Patch('patchnote/:id')
  async patchNote(
    @Param('id') id: string,
    @Body() updateNoteDto: Partial<NoteDto>
  ) {
    console.log('Patching Note ID:', id);
    console.log('Received Patch Data:', updateNoteDto);

    // Simulate patching the note
    return {
      message: 'Note patched successfully',
      noteId: id,
      patchedData: updateNoteDto,
    };
  }

  @Delete('deletenote/:id')
  async deleteNote(
    @Param('id') id: string
  ) {
    console.log('Deleting Note ID:', id);

    // Simulate deleting the note
    return {
      message: 'Note deleted successfully',
      noteId: id,
    };
  }
}