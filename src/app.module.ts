import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { DomaineCritereModule } from './domaine-critere/domaine-critere.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'asset_manager',
      autoLoadEntities: true,
      synchronize: true, // Note: Set to false in production
    }),
    DomaineCritereModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
