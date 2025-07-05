import { Body, Controller, Post } from '@nestjs/common';
import { TicketsDto } from '../dtos';
import { PdfService } from '../../pdf/services/pdf.service';

@Controller()
export class BookingController {
  constructor(private readonly pdfService: PdfService) {}

  @Post()
  async bookTicket(@Body() body: TicketsDto): Promise<{ data: string }> {
    const url = await this.pdfService.generatePdf<TicketsDto>(
      body,
      'ticket.hbs',
    );

    return {
      data: url,
    };
  }
}
