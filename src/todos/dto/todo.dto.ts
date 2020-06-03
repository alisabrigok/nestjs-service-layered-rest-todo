import { IsNotEmpty, IsString, IsBoolean, IsOptional } from "class-validator";

export class TodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;
}

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}

export class UpdateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isDone?: boolean;
}
