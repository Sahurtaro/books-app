/* eslint-disable prettier/prettier */

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './modules/books/books.controller';
import { BooksService } from './modules/books/books.service';
import { BooksModule } from './modules/books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './modules/books/entities/book.entity';
import { PrismaModule } from './libs/prisma/prisma.module';

@Module({
  imports: [BooksModule, PrismaModule],
  controllers: [AppController, BooksController],
  providers: [AppService, BooksService],
})
export class AppModule {}
