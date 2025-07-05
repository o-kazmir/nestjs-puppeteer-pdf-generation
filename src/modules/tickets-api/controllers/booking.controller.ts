import { Body, Controller, Post } from '@nestjs/common';
import { TicketsDto } from '../dtos';

@Controller()
export class BookingController {
  @Post()
  async bookTicket(@Body() body: TicketsDto): Promise<{ data: string }> {
    return {
      data: '',
    };
  }
}
