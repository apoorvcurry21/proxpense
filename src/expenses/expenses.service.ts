import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ExpensesService {
  constructor(private prisma: PrismaService) { }

  async createExpense(amount: number, category: string, userId: string) {
    return await this.prisma.expense.create({
      data: {
        amount,
        category,
        userId,
      },
    });
  }
  async returnExpense() {
    return await this.prisma.expense.findMany();
  }
  async findOneExpense(id: string) {
    const expense = await this.prisma.expense.findUnique({
      where: { id },
    });

    if (!expense) {
      // This stops the execution and sends the 404 error
      throw new NotFoundException(`Expense with ID ${id} not found`);
    }

    return expense;
  }
}
