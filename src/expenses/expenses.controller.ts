import { Controller, Post, Body } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) { }

    @Post()
    async create(@Body() data: { amount: number; category: string; userId: string }) {
        return this.expensesService.createExpense(
            data.amount,
            data.category,
            data.userId,
        );
    }
}