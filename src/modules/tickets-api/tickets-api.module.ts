import { Module } from '@nestjs/common';
import { PdfModule } from '../pdf/pdf.module';
import { BookingController } from './controllers/booking.controller';

@Module({
  imports: [PdfModule],
  controllers: [BookingController],
  providers: [],
})
export class TicketsApiModule {}
