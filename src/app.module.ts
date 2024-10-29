/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './modules/books/books.controller';

@Module({
  imports: [],
  controllers: [AppController, BooksController],
  providers: [AppService],
})
export class AppModule {}
