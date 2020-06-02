import { Controller, Get } from "@nestjs/common";
import { TodosService } from "./todos.service";
import { TodoEntity } from "./todo.entity";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Promise<TodoEntity[]> {
    return this.todosService.getTodos();
  }
}
