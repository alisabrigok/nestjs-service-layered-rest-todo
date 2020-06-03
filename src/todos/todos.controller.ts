import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TodosService } from "./todos.service";
import { TodoEntity } from "./model/todo.entity";
import { CreateTodoDto } from "./dto/todo.dto";
import { SuccessDto } from "src/shared/dto/success.dto";

@Controller("todos")
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(): Promise<TodoEntity[]> {
    return this.todosService.getTodos();
  }

  @Get(":id")
  getTodo(@Param("id") id: string): Promise<TodoEntity> {
    return this.todosService.getTodoById(id);
  }

  @Post()
  createTodo(@Body() todo: CreateTodoDto): Promise<SuccessDto> {
    return this.todosService.createTodo(todo);
  }

  @Patch(":id")
  updateTodo(
    @Param("id") id: string,
    @Body() updatedTodo: CreateTodoDto,
  ): Promise<SuccessDto> {
    return this.todosService.updateTodoById(id, updatedTodo);
  }

  @Delete(":id")
  deleteTodo(@Param("id") id: string): Promise<SuccessDto> {
    return this.todosService.deleteTodoById(id);
  }
}
