import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("todos")
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column({ default: false })
  isDone: boolean;
}
