import { Controller, Get, Post, Body } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { TodoEntity } from "./model/todo.entity";
import { CreateTodoDto } from "./dto/todo.dto";
import { SuccessDto } from "src/shared/model/success.dto";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Promise<TodoEntity[]> {
    return this.todosService.getTodos();
  }

  @Post()
  createTodo(@Body() todo: CreateTodoDto): Promise<SuccessDto> {
    return this.todosService.createTodo(todo);
  }
}
