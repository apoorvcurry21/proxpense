import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ExpensesService } from './expenses/expenses.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, PrismaService, ExpensesService],
})
export class AppModule {}
