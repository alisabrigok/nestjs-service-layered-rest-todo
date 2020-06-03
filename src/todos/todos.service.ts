import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./model/todo.entity";
import { Repository } from "typeorm";
import { CreateTodoDto, UpdateTodoDto } from "./dto/todo.dto";
import { SuccessDto } from "src/shared/model/success.dto";
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

  async createTodo(todo: CreateTodoDto): Promise<SuccessDto> {
    try {
      await this.todoRepo.insert(todo);
      return this.messageService.success();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async updateTodo(id: string, data: UpdateTodoDto): Promise<SuccessDto> {
    try {
      await this.todoRepo.update({ id }, data);
      return this.messageService.success();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
