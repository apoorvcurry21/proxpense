import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { ExpensesService } from './expenses/expenses.service';
import { ExpensesController } from './expenses/expenses.controller';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), AuthModule],
  controllers: [AppController, ExpensesController],
  providers: [AppService, PrismaService, ExpensesService],
})
export class AppModule {}
