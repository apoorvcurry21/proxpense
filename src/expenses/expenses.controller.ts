import { Controller, Post, Body, Get, Param, Delete } from '@nestjs/common';
import { ExpensesService } from './expenses.service';

@Controller('expenses')
export class ExpensesController {
    constructor(private readonly expensesService: ExpensesService) { }

    @Post()
    async create(@Body() data: { amount: number; category: string; userId: string }) {
        return await this.expensesService.createExpense(
            data.amount,
            data.category,
            data.userId,
        );
    }
    @Get()
    async findAll() {
        return await this.expensesService.returnExpense();
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        return await this.expensesService.findOneExpense(id);
    }
    @Delete(':id')
    async remove(@Param('id') id: string) {
        return await this.expensesService.removeExpense(id);
    }
}