import { Module } from '@nestjs/common';
import { TicketsApiModule } from './modules/tickets-api/tickets-api.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'node:path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    TicketsApiModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
