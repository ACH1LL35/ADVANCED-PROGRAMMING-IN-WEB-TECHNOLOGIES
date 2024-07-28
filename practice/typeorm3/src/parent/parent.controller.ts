import { Controller, Post, Get, Delete, Body, Param, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { ParentService } from './parent.service';
import { CreateParentDto, UpdateParentDto } from './parent.dto';

@Controller('parent')
export class ParentController {
  constructor(private readonly parentService: ParentService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  createParent(@Body() createParentDto: CreateParentDto) {
    return this.parentService.createParent(createParentDto);
  }

  @Get('search')
  findParentsByFullNameSubstring(@Query('substring') substring: string) {
    return this.parentService.findParentsByFullNameSubstring(substring);
  }

  @Get(':username')
  findParentByUsername(@Param('username') username: string) {
    return this.parentService.findParentByUsername(username);
  }

  @Delete(':username')
  removeParentByUsername(@Param('username') username: string) {
    return this.parentService.removeParentByUsername(username);
  }
}
