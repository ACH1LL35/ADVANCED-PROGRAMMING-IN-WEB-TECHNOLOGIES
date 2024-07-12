// parent.controller.ts

import { Controller, Post, Body, Patch, Param, Session, Delete, BadRequestException, Logger } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentDto, UpdateParentDto } from './parent.dto';
import { MailerService } from '@nestjs-modules/mailer'; // Import MailerService

@Controller('parents')
export class ParentController {
  private readonly logger = new Logger(ParentController.name);

  constructor(
    private readonly parentService: ParentService,
    private readonly mailerService: MailerService, // Inject MailerService
  ) {}

  @Post()
  async create(@Body() createParentDto: ParentDto) {
    const createdParent = await this.parentService.create(createParentDto);

    try {
      await this.sendRegistrationEmail(createdParent.Email);
    } catch (error) {
      // Handle email sending error (optional)
      this.logger.error(`Failed to send registration email to ${createdParent.Email}`, error.stack);
    }

    return { message: 'Profile created successfully / registration complete', parent: createdParent };
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateParentDto: UpdateParentDto,
    @Session() session: Record<string, any>,
  ) {
    const sessionParentId = parseInt(session.parentId); // Parse session.parentId to number if necessary
    const updatedParent = await this.parentService.update(id, updateParentDto, sessionParentId);
    return { message: 'Profile edited successfully', parent: updatedParent };
  }

  @Post('login')
  async login(@Body() credentials: { email: string; password: string }, @Session() session: Record<string, any>) {
    const { email, password } = credentials;
    const parent = await this.parentService.findByEmailAndPassword(email, password);
    if (!parent) {
      throw new BadRequestException('Invalid email or password');
    }
    session.parentId = parent.ParentsID.toString(); // Store ParentsID as string in session
    return { message: 'Login successful', parent };
  }

  @Delete('logout')
  logout(@Session() session: Record<string, any>) {
    session.destroy(); // Clear session data
    return { message: 'Logged out successfully' };
  }

  private async sendRegistrationEmail(email: string) {
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Our Platform',
      text: 'Thank you for registering as a parent on our platform.',
    });
  }
}