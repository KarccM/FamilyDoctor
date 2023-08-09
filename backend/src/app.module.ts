import { Module } from '@nestjs/common';
import { CommandModule } from 'nestjs-command';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ConditionsModule } from './conditions/conditions.module';

// global uri 
@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    CommandModule,
    MongooseModule.forRoot(process.env.NODE_ENV == 'dev'? process.env.MONGODB_URI_LOCAL : process.env.MONGODB_URI),
    ConditionsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}