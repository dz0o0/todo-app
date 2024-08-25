import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
export class Task {
  @Field(() => Int, { description: 'ID of the task' })
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ description: 'Name of the task' })
  @Column()
  taskName: string;

  @Field({ description: 'Completion status of the task' })
  @Column({ default: false })
  completed: boolean;
}