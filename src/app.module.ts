import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesController } from './expenses/expenses.controller';

@Module({
  imports: [],
  controllers: [AppController, ExpensesController],
  providers: [AppService, PrismaService, ExpensesService],
})
export class AppModule {}
