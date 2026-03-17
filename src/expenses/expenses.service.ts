import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) { }

  async createExpense(amount: number, category: string, userId: string) {
    return this.prisma.expense.create({
      data: {
        amount,
        category,
        userId,
      },
    });
  }
  async returnExpense() {
    return this.prisma.expense.findMany()

  }
}
