import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./model/todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto } from "./dto/todo.dto";
import { SuccessDto } from "src/shared/dto/success.dto";
import { MessageService } from "src/shared/services/message.service";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,
    private readonly messageService: MessageService,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    try {
      return this.todoRepo.find();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async getTodoById(id: string): Promise<TodoEntity> {
    try {
      return this.todoRepo.findOne(id);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async createTodo(todo: CreateTodoDto): Promise<SuccessDto> {
    try {
      await this.todoRepo.insert(todo);
      return this.messageService.success();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateTodoById(
    id: string,
    updatedTodo: CreateTodoDto,
  ): Promise<SuccessDto> {
    try {
      await this.todoRepo.update({ id }, updatedTodo);
      return this.messageService.success();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async deleteTodoById(id: string): Promise<SuccessDto> {
    try {
      await this.todoRepo.update({ id }, { isDeleted: true });
      return this.messageService.success();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
