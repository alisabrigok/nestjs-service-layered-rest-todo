import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepo: Repository<TodoEntity>,
  ) {}

  async getTodos(): Promise<TodoEntity[]> {
    try {
      return this.todoRepo.find();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
