import { Injectable } from '@nestjs/common';
import { CreateTaskInput } from './dto/create-task.input';
import { UpdateTaskInput } from './dto/update-task.input';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class TasksService {
  constructor(private readonly prisma: PrismaService) {}
  
  async create(createTaskInput: CreateTaskInput) {
    return await this.prisma.task.create({
      data: {
        taskName: createTaskInput.taskName,
        completed: false, // デフォルトでfalseに設定
      },
    });
  }

  async findAll() {
    return this.prisma.task.findMany();
  }

  async findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
    });
  }

  async update(id: number, updateTaskInput: UpdateTaskInput) {
    return this.prisma.task.update({
      where: { id },
      data: updateTaskInput,
    });
  }

  async remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
