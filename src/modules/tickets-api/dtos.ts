import { ApiProperty } from '@nestjs/swagger';

export class TicketsDto {
  @ApiProperty({ example: 'Ivan Petrenko' })
  passengerName: string;

  @ApiProperty({ example: 'ID12345678' })
  documentId: string;

  @ApiProperty({ example: '123' })
  trainNumber: string;

  @ApiProperty({ example: 'Kyiv' })
  from: string;

  @ApiProperty({ example: 'Lviv' })
  to: string;

  @ApiProperty({ example: '20.07.2025' })
  departureDate: string;

  @ApiProperty({ example: '10:00' })
  departureTime: string;

  @ApiProperty({ example: '15:30' })
  arrivalTime: string;

  @ApiProperty({ example: '5' })
  carriage: string;

  @ApiProperty({ example: '12A' })
  seat: string;
}
