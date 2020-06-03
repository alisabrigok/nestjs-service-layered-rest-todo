import { Module } from "@nestjs/common";
import { TodosController } from "./todos.controller";
import { TodosService } from "./todos.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodoEntity } from "./model/todo.entity";
import { MessageService } from "src/shared/services/message.service";

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity])],
  controllers: [TodosController],
  providers: [TodosService, MessageService],
})
export class TodosModule {}
